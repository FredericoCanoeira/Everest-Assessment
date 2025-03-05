const express = require("express");

const Assessment = require("../models/Assessment");
const Joi = require("joi"); // Input joi for Validation


const router = express.Router();

// Validation schema with Joi
const assessmentSchema = Joi.object({
  leadershipSkills: Joi.number().min(0).max(10).required(),// Validate leadership between 0 and 10
  userId: Joi.string().required(),// The userId field is required
  comments: Joi.string().max(500).optional(),// The comments field is optional, with a limit of 500 characters
});


// Submit self-assessment
router.post("/", async (req, res) => {
// Input data validation
  const { error } = assessmentSchema.validate(req.body);
  if (error) {
    console.error(`Validation Error: ${error.message}`);// Validation error log
    return res.status(400).json({ message: "Invalid input data", error: error.message });
  }
  
  const { leadershipSkills, userId, comments } = req.body;

  try {

    // Convert userId to ObjectId if it is a valid ObjectId string
    // const validUserId = mongoose.Types.ObjectId(userId);


    // Create a new assessment entry
    const newAssessment = new Assessment({
      userId,
      leadershipSkills,
      comments,
    });

    await newAssessment.save();
    console.log("New self-assessment submitted:", newAssessment); // Success log
   
    res.status(201).json({
      message: "Self-assessment submitted successfully",
      data: newAssessment,
    });

  } catch (err) {
    console.error(`Error retrieving self-assessments for userId ${userId}:`, err.message);  // Log de error
    res.status(500).json({
      message: "Error submitting self-assessment",
      error: err.message,
    });
  }

});

// Get all self-assessments
router.get("/", async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.status(200).json({
      message: "Retrieved all self-assessments",
      data: assessments,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving self-assessments",
      error: err.message,
    });
  }
});

// Get a specific self-assessment by userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const assessments = await Assessment.find({ userId });
    if (!assessments || assessments.length === 0) {
      return res.status(404).json({
        message: "No self-assessments found for this user",
      });
    }
    res.status(200).json({
      message: "Retrieved user's self-assessments",
      data: assessments,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving user's self-assessments",
      error: err.message,
    });
  }
});

module.exports = router;

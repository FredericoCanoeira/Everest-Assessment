const express = require("express");
const router = express.Router();
const { submitAssessment, getAllAssessments } = require("../controllers/assessmentController");

router.post("/submit", submitAssessment);
router.get("/results", getAllAssessments);

module.exports = router;

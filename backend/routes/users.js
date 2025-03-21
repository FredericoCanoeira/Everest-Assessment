const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


const router = express.Router();


// Get all users (Admin/Debiug purpose)
router.get("/", async(req, res) => {
    try {
        const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});
    

   // res.status(200).json({ message: 'Get all users' });
;

// Create a new user
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "Email already exists" });
  
      const user = new User({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error registering user", error: err.message });
    }
  });

  // Login user
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (err) {
      res.status(500).json({ message: "Error logging in", error: err.message });
    }
  });

module.exports = router;

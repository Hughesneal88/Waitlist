const express = require("express");
const router = express.Router();
const WaitlistEntry = require("../models/waitlistEntry");

// POST /api/waitlist
router.post("/", async (req, res) => {
  try {
    const { name, phone, institution } = req.body;
    console.log("Received waitlist entry:", { name, phone, institution });
    const entry = new WaitlistEntry({ name, phone, institution });
    // await entry.save();
    res.status(201).json({ message: "Successfully joined waitlist!" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;

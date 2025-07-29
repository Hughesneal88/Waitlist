const mongoose = require("mongoose");

const WaitlistEntrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  institution: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("WaitlistEntry", WaitlistEntrySchema, "Users");

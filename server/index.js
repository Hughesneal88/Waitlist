const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const waitlistRoutes = require("./routes/waitlist");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/waitlist", waitlistRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error(err));

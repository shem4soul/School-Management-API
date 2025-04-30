const express = require("express");
const connectToDatabase = require("./db");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

// Connect to the database
connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to School Management API" });
});

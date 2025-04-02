const express = require("express")
const connectToDatabase = require("./config/db")
const dotenv = require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 8000

//Connect DATABASE

connectToDatabase()

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    
})
app.get("/", (req, res) =>{
  return res.status(200).json({message: "welcome to SCHOOL MANAGEMENT API"})    
})

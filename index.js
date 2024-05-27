const express = require("express")
const dotenv  = require( "dotenv");
const mongoose = require("mongoose");
const talks = require("./models/talks.model");
// import cors from "cors";
// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
// import nodemailer from "nodemailer";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    "mongodb+srv://algozenith:nitc@cluster0.pknc4ob.mongodb.net/algozenith?retryWrites=true&w=majority"
  );

app.get("/ok" , (req,res) => {
    res.send("working");
})

app.get("/talks", async (req, res) => {
    try {
      const alltalksdata = await talks.find();
      // console.log(alltalksdata);
      res.send(alltalksdata);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

const port  = 4000;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
})

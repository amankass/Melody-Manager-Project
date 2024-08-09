import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/Melody-App")
  .then(() => console.log("MongoDB Connected"));

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});

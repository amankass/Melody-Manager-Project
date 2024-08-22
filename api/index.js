import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes.js";
import authRouter from "./routes/auth-routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Melody-App")
  .then(() => console.log("MongoDB Connected"));

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

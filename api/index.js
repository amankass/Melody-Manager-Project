import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-routes.js";
import authRouter from "./routes/auth-routes.js";

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

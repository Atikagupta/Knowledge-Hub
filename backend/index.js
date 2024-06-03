import express from "express";
import connectDB from "./db/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

connectDB();

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

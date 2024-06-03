import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.0uhpjs3.mongodb.net/knowledge-hub"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}

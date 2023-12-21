import mongoose from "mongoose";
import DB_NAME from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      `\n MongoDB connected!! DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
    process.exit(1);
  }
}

export { connectDB };

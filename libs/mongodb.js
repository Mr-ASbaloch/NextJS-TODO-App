import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connnected to database");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;

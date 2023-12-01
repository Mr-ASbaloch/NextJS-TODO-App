import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: String,
  description: String,
});

const task = mongoose.models.task || mongoose.model("task", taskSchema);

export default task;

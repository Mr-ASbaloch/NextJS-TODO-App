import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: String,
  description: String,
});

export const task = mongoose.models.tasks || mongoose.model("tasks", taskSchema);



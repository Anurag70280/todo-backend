import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  status: "complete" | "incomplete";
  user: mongoose.Schema.Types.ObjectId; 
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    status: { type: String, enum: ["complete", "incomplete"], default: "incomplete" },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Task = mongoose.model<ITask>("Task", taskSchema);

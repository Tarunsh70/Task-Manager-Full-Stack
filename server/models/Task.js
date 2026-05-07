import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
    },

    dueDate: {
      type: Date,
    },

    priority: {
      type: String,
      enum: [
        "High",
        "Medium",
        "Low",
      ],
      default: "Medium",
    },

    status: {
      type: String,
      enum: [
        "To Do",
        "In Progress",
        "Done",
      ],
      default: "To Do",
    },

    project: {
      type:
        mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },

    assignedTo: {
      type:
        mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model(
  "Task",
  taskSchema
);

export default Task;
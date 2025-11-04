import { Response } from "express";
import { Task } from "../models/task.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";


export const addTask = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { title, status } = req.body;

    const task = new Task({
      title,
      status: status || "incomplete",
      user: req.user.id,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getTasks = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { status, sortBy, order, search } = req.query;

 
    const query: any = { user: req.user.id };

 
    if (status && (status === "complete" || status === "incomplete")) {
      query.status = status;
    }


    if (search) {
      query.title = { $regex: search as string, $options: "i" };
    }


    let sortOptions: any = { createdAt: -1 };

    
    if (sortBy) {
      const sortField = sortBy === "title" ? "title" : "createdAt";
      const sortOrder = order === "asc" ? 1 : -1;
      sortOptions = { [sortField]: sortOrder };
    }

    
    const tasks = await Task.find(query).sort(sortOptions);

    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};




export const updateTask = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { title, status },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


export const deleteTask = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({ _id: id, user: req.user.id });
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

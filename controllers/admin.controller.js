import User from "../models/User.model.js";
import Task from "../models/Task.model.js";


export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserTasks = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const tasks = await Task.find({ user: userId });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

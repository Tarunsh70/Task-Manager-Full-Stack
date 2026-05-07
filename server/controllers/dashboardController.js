import Task from "../models/Task.js";

export const getDashboardStats =
  async (req, res) => {
    try {
      const totalTasks =
        await Task.countDocuments();

      const completedTasks =
        await Task.countDocuments({
          status: "Done",
        });

      const pendingTasks =
        await Task.countDocuments({
          status: {
            $ne: "Done",
          },
        });

      const overdueTasks =
        await Task.countDocuments({
          dueDate: {
            $lt: new Date(),
          },
          status: {
            $ne: "Done",
          },
        });

      res.json({
        totalTasks,
        completedTasks,
        pendingTasks,
        overdueTasks,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

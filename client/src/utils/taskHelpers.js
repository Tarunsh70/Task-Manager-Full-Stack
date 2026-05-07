export const getCompletedTasks = (tasks) => {
  return tasks.filter(
    (task) => task.status === "Done"
  );
};

export const getPendingTasks = (tasks) => {
  return tasks.filter(
    (task) => task.status !== "Done"
  );
};

export const getOverdueTasks = (tasks) => {
  const today = new Date();

  return tasks.filter(
    (task) =>
      new Date(task.dueDate) < today &&
      task.status !== "Done"
  );
};
const TaskCard = ({ task }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">
          {task.title}
        </h2>

        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
          {task.priority}
        </span>
      </div>

      <p className="text-slate-400 mb-4">
        {task.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-blue-400">
          {task.status}
        </span>

        <span className="text-slate-500 text-sm">
          Due: {task.dueDate}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
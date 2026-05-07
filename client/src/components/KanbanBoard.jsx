const KanbanBoard = () => {
  const columns = [
    "To Do",
    "In Progress",
    "Done",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {columns.map((column) => (
        <div
          key={column}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-5 min-h-[500px]"
        >
          <h2 className="text-xl font-bold mb-5">
            {column}
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-xl">
              Sample Task
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
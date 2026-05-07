import TaskCard from "../components/TaskCard";

const ProjectDetails = () => {
  const tasks = [
    {
      title: "Build API",
      description:
        "Develop authentication APIs",
      priority: "High",
      status: "In Progress",
      dueDate: "20 May",
    },
    {
      title: "Create UI",
      description:
        "Design dashboard components",
      priority: "Medium",
      status: "Done",
      dueDate: "22 May",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          AI Dashboard Project
        </h1>

        <p className="text-slate-400">
          Manage tasks and project workflow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tasks.map((task) => (
          <TaskCard
            key={task.title}
            task={task}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition cursor-pointer">
      <h2 className="text-2xl font-bold mb-2">
        {project.title}
      </h2>

      <p className="text-slate-400 mb-4">
        {project.description}
      </p>

      <div className="flex justify-between">
        <span className="text-blue-400">
          {project.tasks} Tasks
        </span>

        <span className="text-green-400">
          Active
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
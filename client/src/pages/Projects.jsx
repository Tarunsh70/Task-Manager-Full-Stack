import {
  useEffect,
  useState,
} from "react";

import {
  FolderKanban,
  Trash2,
} from "lucide-react";

import {
  createProject,
  getProjects,
  deleteProject,
} from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const fetchProjects = async () => {
    try {
      const data =
        await getProjects();

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateProject = async () => {
    try {
      await createProject({
        title,
        description,
      });

      setTitle("");
      setDescription("");

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProject = async (
    id
  ) => {
    try {
      await deleteProject(id);

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-4">
          Projects
        </h1>

        <p className="text-slate-400 text-xl">
          Manage and organize your projects
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10 space-y-5">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl outline-none h-32 focus:border-blue-500"
        ></textarea>

        <button
          onClick={handleCreateProject}
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg"
        >
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <FolderKanban size={30} />
              </div>

              <button
                onClick={() =>
                  handleDeleteProject(
                    project._id
                  )
                }
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 w-12 h-12 rounded-xl flex items-center justify-center"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const deleteProject = (id) => {
    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        addProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () =>
  useContext(ProjectContext);
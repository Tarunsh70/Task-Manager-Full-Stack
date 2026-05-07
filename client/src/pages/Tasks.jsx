import {
  useEffect,
  useState,
} from "react";

import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../services/taskService";

const Tasks = () => {
  const [tasks, setTasks] =
    useState([]);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
    });

  const [loading, setLoading] =
    useState(false);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleCreateTask =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        await createTask(formData);

        setFormData({
          title: "",
          description: "",
          priority: "Medium",
          dueDate: "",
        });

        fetchTasks();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const handleStatusChange =
    async (id, status) => {
      try {
        await updateTask(id, {
          status,
        });

        fetchTasks();
      } catch (error) {
        console.log(error);
      }
    };

  const handleDeleteTask =
    async (id) => {
      try {
        await deleteTask(id);

        fetchTasks();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="p-8 text-white">

      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-3">
          Task Management
        </h1>

        <p className="text-slate-400 text-lg">
          Create, manage and track your tasks
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">

        <h2 className="text-3xl font-bold mb-6">
          Create New Task
        </h2>

        <form
          onSubmit={
            handleCreateTask
          }
          className="space-y-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={
              formData.title
            }
            onChange={
              handleChange
            }
            className="w-full bg-slate-800 p-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none"
          />

          <textarea
            name="description"
            placeholder="Task Description"
            value={
              formData.description
            }
            onChange={
              handleChange
            }
            className="w-full bg-slate-800 p-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none h-32"
          ></textarea>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <select
              name="priority"
              value={
                formData.priority
              }
              onChange={
                handleChange
              }
              className="bg-slate-800 p-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none"
            >
              <option>
                High
              </option>

              <option>
                Medium
              </option>

              <option>
                Low
              </option>
            </select>

            <input
              type="date"
              name="dueDate"
              value={
                formData.dueDate
              }
              onChange={
                handleChange
              }
              className="bg-slate-800 p-4 rounded-2xl border border-slate-700 focus:border-blue-500 outline-none"
            />

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg">
            {loading
              ? "Creating..."
              : "Create Task"}
          </button>

        </form>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {tasks.map((task) => (

          <div
            key={task._id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl"
          >

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-bold">
                {task.title}
              </h2>

              <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                {task.priority}
              </span>

            </div>

            <p className="text-slate-400 mb-5">
              {task.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-5">

              <button
                onClick={() =>
                  handleStatusChange(
                    task._id,
                    "To Do"
                  )
                }
                className={`px-4 py-2 rounded-xl ${
                  task.status ===
                  "To Do"
                    ? "bg-yellow-600"
                    : "bg-slate-700"
                }`}
              >
                To Do
              </button>

              <button
                onClick={() =>
                  handleStatusChange(
                    task._id,
                    "In Progress"
                  )
                }
                className={`px-4 py-2 rounded-xl ${
                  task.status ===
                  "In Progress"
                    ? "bg-blue-600"
                    : "bg-slate-700"
                }`}
              >
                In Progress
              </button>

              <button
                onClick={() =>
                  handleStatusChange(
                    task._id,
                    "Done"
                  )
                }
                className={`px-4 py-2 rounded-xl ${
                  task.status ===
                  "Done"
                    ? "bg-green-600"
                    : "bg-slate-700"
                }`}
              >
                Done
              </button>

            </div>

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500">
                Due:{" "}
                {task.dueDate
                  ? new Date(
                      task.dueDate
                    ).toLocaleDateString()
                  : "No Date"}
              </p>

              <button
                onClick={() =>
                  handleDeleteTask(
                    task._id
                  )
                }
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-5 py-2 rounded-xl"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Tasks;
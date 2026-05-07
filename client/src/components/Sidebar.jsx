import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  const links = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      name: "Projects",
      icon: FolderKanban,
      path: "/projects",
    },
    {
      name: "Tasks",
      icon: CheckSquare,
      path: "/tasks",
    },
  ];

  return (
    <div className="w-72 bg-slate-950 border-r border-slate-800 p-6 flex flex-col justify-between">
      <div>
        <div className="mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            EtharaAI
          </h1>

          <p className="text-slate-400 mt-2">
            Team Task Manager
          </p>
        </div>

        <div className="space-y-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "hover:bg-slate-800 text-slate-300"
                  }`
                }
              >
                <Icon size={22} />

                <span className="font-medium text-lg">
                  {link.name}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 transition-all duration-300 py-4 rounded-2xl font-semibold text-lg"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

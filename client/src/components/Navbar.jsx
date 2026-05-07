import { Bell, Search } from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="h-24 border-b border-slate-800 bg-slate-950/60 backdrop-blur-xl px-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 mt-1 text-lg">
          {user?.name}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-5 py-3 rounded-2xl w-80">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search tasks or projects"
            className="bg-transparent outline-none w-full text-white"
          />
        </div>

        <button className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-all duration-300">
          <Bell size={20} />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
          {user?.name?.charAt(0)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

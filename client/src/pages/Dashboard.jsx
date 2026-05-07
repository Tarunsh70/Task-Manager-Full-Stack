import {
  useEffect,
  useState,
} from "react";

import {
  CheckCircle,
  Clock,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";

import api from "../services/api";

const Dashboard = () => {
  const [stats, setStats] =
    useState(null);

  const fetchStats = async () => {
    try {
      const response = await api.get(
        "/dashboard/stats"
      );

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="text-3xl text-white">
        Loading Dashboard...
      </div>
    );
  }

  const cards = [
    {
      title: "Total Tasks",
      value: stats.totalTasks,
      icon: ClipboardList,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Completed",
      value: stats.completedTasks,
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Pending",
      value: stats.pendingTasks,
      icon: Clock,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Overdue",
      value: stats.overdueTasks,
      icon: AlertTriangle,
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-4">
          Dashboard
        </h1>

        <p className="text-slate-400 text-xl">
          Track your projects and team productivity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-slate-400 text-lg mb-3">
                    {card.title}
                  </p>

                  <h1 className="text-5xl font-bold text-white">
                    {card.value}
                  </h1>
                </div>

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center`}
                >
                  <Icon size={30} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

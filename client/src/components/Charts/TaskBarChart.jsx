import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    tasks: 4,
  },
  {
    name: "Tue",
    tasks: 7,
  },
  {
    name: "Wed",
    tasks: 5,
  },
  {
    name: "Thu",
    tasks: 9,
  },
  {
    name: "Fri",
    tasks: 6,
  },
];

const TaskBarChart = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 h-[350px]">
      <h2 className="text-2xl font-bold mb-5">
        Weekly Productivity
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Bar dataKey="tasks" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskBarChart;
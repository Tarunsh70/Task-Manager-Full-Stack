import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Mon",
    completed: 2,
  },
  {
    day: "Tue",
    completed: 5,
  },
  {
    day: "Wed",
    completed: 4,
  },
  {
    day: "Thu",
    completed: 8,
  },
  {
    day: "Fri",
    completed: 6,
  },
  {
    day: "Sat",
    completed: 9,
  },
];

const ProductivityChart = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 h-[350px]">
      <h2 className="text-2xl font-bold mb-5">
        Productivity Overview
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="completed"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityChart;
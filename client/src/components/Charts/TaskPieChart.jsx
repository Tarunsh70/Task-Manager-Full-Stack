import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Done", value: 14 },
  { name: "In Progress", value: 7 },
  { name: "Pending", value: 3 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

const TaskPieChart = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 h-[350px]">
      <h2 className="text-2xl font-bold mb-5">
        Task Status
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskPieChart;
const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
      <p className="text-slate-400">{title}</p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
};

export default DashboardCard;
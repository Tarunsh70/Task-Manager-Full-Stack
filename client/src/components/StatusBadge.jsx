const StatusBadge = ({ status }) => {
  const styles = {
    "To Do": "bg-yellow-500/20 text-yellow-400",
    "In Progress": "bg-blue-500/20 text-blue-400",
    Done: "bg-green-500/20 text-green-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
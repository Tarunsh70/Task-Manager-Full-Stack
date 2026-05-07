const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
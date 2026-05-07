const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:border-blue-500 transition"
    />
  );
};

export default Input;
const MemberAvatar = ({ name }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
      {name.charAt(0)}
    </div>
  );
};

export default MemberAvatar;
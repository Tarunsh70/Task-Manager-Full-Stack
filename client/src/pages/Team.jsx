import MemberAvatar from "../components/MemberAvatar";

const Team = () => {
  const members = [
    {
      name: "Tarun",
      role: "Admin",
    },
    {
      name: "Ankit",
      role: "Member",
    },
    {
      name: "Rahul",
      role: "Developer",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">
          Team Members
        </h1>

        <button className="bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition">
          + Add Member
        </button>
      </div>

      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <MemberAvatar name={member.name} />

              <div>
                <h2 className="text-xl font-semibold">
                  {member.name}
                </h2>

                <p className="text-slate-400">
                  {member.role}
                </p>
              </div>
            </div>

            <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
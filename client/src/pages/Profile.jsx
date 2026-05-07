const Profile = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Profile
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-2xl">
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold mb-6">
          T
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-slate-400 mb-1">
              Name
            </p>

            <h2 className="text-xl font-semibold">
              Tarun
            </h2>
          </div>

          <div>
            <p className="text-slate-400 mb-1">
              Email
            </p>

            <h2 className="text-xl font-semibold">
              tarun@gmail.com
            </h2>
          </div>

          <div>
            <p className="text-slate-400 mb-1">
              Role
            </p>

            <h2 className="text-xl font-semibold">
              Admin
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
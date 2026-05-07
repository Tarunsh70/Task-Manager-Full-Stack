const Settings = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-2xl space-y-5">
        <button className="bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition">
          Enable Notifications
        </button>

        <button className="bg-red-600 px-5 py-3 rounded-xl hover:bg-red-700 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
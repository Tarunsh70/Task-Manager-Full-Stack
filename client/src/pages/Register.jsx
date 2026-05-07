import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data =
        await registerUser(
          formData
        );

      login(data);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl px-20 py-16">
          <div className="text-center mb-7">
            <h1 className="text-5xl font-bold text-white mb-2">
              Create Account
            </h1>

            <p className="text-slate-300 text-base">
              Join your team and start
              managing projects
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-3 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg mt-2">
              {loading
                ? "Creating..."
                : "Register"}
            </button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
              <span
                onClick={() =>
                  navigate(
                    "/login"
                  )
                }
                className="text-blue-400 hover:text-blue-300 cursor-pointer font-medium"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
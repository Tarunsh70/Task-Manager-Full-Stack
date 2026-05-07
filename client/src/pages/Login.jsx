import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      const data =
        await loginUser(formData);

      login(data);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data
          ?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center px-6 relative">

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]" />

      {/* Card */}

      <div className="relative w-full max-w-md">

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[36px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

          {/* Header */}

          <div className="text-center mb-10">

            <h1 className="text-6xl font-black text-white leading-tight mb-4">
              Welcome
              <br />
              Back
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed">
              Login to continue managing
              your team and tasks
            </p>

          </div>

          {/* Error */}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-300 p-4 rounded-2xl mb-6 text-sm">
              {error}
            </div>
          )}

          {/* Form */}

          <form
            onSubmit={
              handleSubmit
            }
            className="space-y-7"
          >

            <div>

              <label className="block text-slate-300 text-sm font-medium mb-3">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-white placeholder:text-slate-500 px-5 py-4 rounded-2xl outline-none transition-all duration-300"
              />

            </div>

            <div>

              <label className="block text-slate-300 text-sm font-medium mb-3">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                placeholder="Enter your password"
                className="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 text-white placeholder:text-slate-500 px-5 py-4 rounded-2xl outline-none transition-all duration-300"
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:scale-[1.02]"
            >
              {loading
                ? "Signing In..."
                : "Login"}
            </button>

          </form>

          {/* Footer */}

          <div className="mt-8 text-center">

            <p className="text-slate-400">
              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;
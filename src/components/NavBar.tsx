import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const apiKey = localStorage.getItem("apiKey"); // or sessionStorage

  const handleLogout = () => {
    localStorage.removeItem("apiKey");
    navigate("/signin");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-lg font-semibold text-white-600 dark:text-white-400"
            >
              Health Care
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {apiKey && (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
                >
                  Dashboard
                </Link>
                <Link
                  to="/add"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
                >
                  Add Result
                </Link>
              </>
            )}
            {!apiKey ? (
              <>
                <Link
                  to="/signin"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

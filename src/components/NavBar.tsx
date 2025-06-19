import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const apiKey = localStorage.getItem("apiKey"); // or sessionStorage
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("apiKey");
    navigate("/signin");
  };

  type HamburgerButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };

  function HamburgerButton({ onClick }: HamburgerButtonProps) {
    return (
      <button
        onClick={onClick}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle menu"
      >
        {/* <span className="block w-8 h-0.5 bg-gray-800 dark:bg-white rounded"></span>
        <span className="block w-8 h-0.5 bg-gray-800 dark:bg-white rounded"></span>
        <span className="block w-8 h-0.5 bg-gray-800 dark:bg-white rounded"></span> */}
        <img src="/images/profileIcon.jpg" className="w-8"></img>
      </button>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-blue-950 border-b border-gray-200 dark:border-gray-700">
      <div>
        <div className="flex items-center">
          <div className="flex flex-1 items-center gap-6">
            <Link
              to="/"
              className="text-lg font-semibold !text-white dark:!text-white/70"
            >
              <span className="text-white text-lg font-semibold">
                Health Care
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center gap-4">
            {apiKey && (
              <>
                <div className="flex flex-1 justify-end">
                  <Link
                    to="/dashboard"
                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    Dashboard
                  </Link>
                </div>
                <div className="flex flex-1 justify-end">
                  <Link
                    to="/add"
                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    Add Result
                  </Link>
                </div>
                {/* <div className="flex flex-1">
                  <Link
                    to="/add"
                    className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    Profile
                  </Link>
                </div> */}
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
              <div className="flex flex-1 justify-end">
                <HamburgerButton onClick={() => setOpen(!open)} />
                {open && (
                  <ul className="absolute top-full right-0 m-0 w-32 p-0 h-32 bg-red-500 text-white rounded shadow-lg z-50 flex flex-col justify-center items-center">
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 hover:bg-red-600 rounded"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="block px-4 py-2 hover:bg-red-600 rounded"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

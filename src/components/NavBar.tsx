import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../index.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const apiKey = localStorage.getItem("apiKey"); 
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
   const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 p-3 opacity-80 bg-white dark:bg-black">
      <div className="flex items-center">
        <div className="flex flex-2 items-center">
          <Link to="/" className="text-lg font-semibold NavBarTextColor opacity-100">
            Health Care
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Regular links - shown on medium screens and up */}
          <div className="hidden md:flex items-center gap-4">
            {apiKey && (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm NavBarTextColor hover:underline"
                >
                  Dashboard
                </Link>
                <Link
                  to="/add-result"
                  className="text-sm NavBarTextColor hover:underline"
                >
                  Add Result
                </Link>
              </>
            )}

            {!apiKey && (
              <>
                <Link
                  to="/login"
                  className="text-sm NavBarTextColor hover:underline"
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
            )}
          </div>

          {/* Mobile menu button - shown on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-8 h-8"
              aria-label="Menu"
            >
              {/* Hamburger icon */}
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
              </div>
            </button>
          </div>

          {/* Profile dropdown - shown when logged in */}
          {apiKey && (
            <div className="hidden md:block">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center justify-center w-8 h-8"
              >
                <img
                  src="/images/profileIcon.jpg"
                  className="w-8 h-8 rounded-full"
                  alt="Profile"
                />
              </button>

              {profileOpen && (
                <div className="absolute top-16 right-2 bg-white dark:bg-black rounded shadow-lg py-2 w-30 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm NavBarTextColor NavBarDropDownHover"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm NavBarTextColor NavBarDropDownHover"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile menu dropdown - shown when hamburger is clicked */}
          {open && (
            <div className="absolute top-16 right-4 md:hidden bg-white dark:bg-black rounded shadow-lg py-2 w-30 z-50">
              {apiKey ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm NavBarTextColor NavBarDropDownHover"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/add"
                    className="block px-4 py-2 text-sm NavBarTextColor NavBarDropDownHover"
                    onClick={() => setOpen(false)}
                  >
                    Add Result
                  </Link>
                  <Link
                    to="/add"
                    className="block px-4 py-2 text-sm NavBarTextColor NavBarDropDownHover"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm NavBarTextColor NavBarDropDownHover"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm NavBarTextColor NavBarDropDownHover"
                    onClick={() => setOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-blue-600 dark:text-blue-400 NavBarDropDownHover"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

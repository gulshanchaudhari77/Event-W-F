import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

const Navbar = ({ isHome }) => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("eventData"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess("logged-out");
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <nav className="bg-black p-4 text-white">
      <div className="mx-auto flex justify-between items-center max-w-7xl">
        <a href="/home" className="text-xl font-semibold">
          EventWalllh
        </a>

        {/* Hamburger button */}
        <button
          className="sm:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4 items-center">
          {!isHome && (
            <a href="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">
              Dashboard
            </a>
          )}
          {!isHome && (
            <a href="/eventform" className="hover:bg-gray-700 px-3 py-2 rounded">
              Create Event
            </a>
          )}
          <button
            onClick={handleLogout}
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-2 flex flex-col space-y-2 px-4">
          {!isHome && (
            <a href="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">
              Dashboard
            </a>
          )}
          {!isHome && (
            <a href="/eventform" className="hover:bg-gray-700 px-3 py-2 rounded">
              Create Event
            </a>
          )}
          <button
            onClick={handleLogout}
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

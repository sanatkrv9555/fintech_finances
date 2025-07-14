import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Topics", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          💸 FinEdu
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-3 ml-6">
            <Link to="/login">
              <button className="px-4 py-1 border border-white rounded hover:bg-white hover:text-blue-900 transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-1 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-blue-900 transition">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-400 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-blue-800 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 border-b border-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Link to="/login">
              <button className="w-full px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-900 transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-full px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-blue-900 transition">
                Sign Up
              </button>
            </Link>
            <Link to="/get-started">
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

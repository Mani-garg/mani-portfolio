import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
 
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "achievements", label: "Achievements" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
  to="top"
  smooth={true}
  duration={500}
  offset={-70}
  className="text-xl font-bold text-blue-700 cursor-pointer hover:text-blue-600 transition"
>
  Mani.dev
</Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 pb-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={closeMenu}
                  className="block cursor-pointer hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

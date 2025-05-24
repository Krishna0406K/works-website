import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-[999] bg-black text-white font-[Freight big pro] px-6 py-4 flex justify-between items-center">
      <div className="text-[2vw] text-yellow-400 font-light uppercase tracking-tight">
        MySite
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-[1.3vw] font-light">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition-all">Home</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-yellow-400 transition-all">Projects</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition-all">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400 transition-all">Contact</Link>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-yellow-400">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[100%] left-0 w-full bg-black text-white flex flex-col items-start gap-6 p-6 text-[4.5vw] md:hidden font-light z-[9999]">
          <li><Link to="/" onClick={closeMenu} className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/projects" onClick={closeMenu} className="hover:text-yellow-400">Projects</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;


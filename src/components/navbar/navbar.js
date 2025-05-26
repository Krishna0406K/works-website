import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ideas', path: '/ideas' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-black text-2xl font-bold">WØRKS</h1>

          <div className="hidden md:flex gap-8 text-black text-lg">
            {navLinks.map(({ name, path }) => (
              <Link key={name} to={path} className="cursor-pointer hover:text-yellow-500 transition">
                {name}
              </Link>
            ))}
          </div>

          <div className="md:hidden text-gray-800 z-[100]">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-black text-white p-8 z-40 flex flex-col gap-6"
          >
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setNavOpen(false)}
                className="text-xl border-b border-gray-700 pb-2"
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

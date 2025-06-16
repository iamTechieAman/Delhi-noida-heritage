import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Globe, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin size={28} className="text-red-600" />
            </motion.div>
            <motion.span 
              className={`ml-3 text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              हेरिटेज सफर
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/delhi" isScrolled={isScrolled}>Delhi</NavLink>
            <NavLink to="/noida" isScrolled={isScrolled}>Noida</NavLink>
            <NavLink to="/tours" isScrolled={isScrolled}>Tours</NavLink>
            <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* User Menu & Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <motion.div 
              className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              whileHover={{ scale: 1.05 }}
            >
              <Globe size={20} className="mr-2" />
              <select className={`bg-transparent border-none focus:outline-none cursor-pointer ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                <option value="en" className="text-gray-800">English</option>
                <option value="hi" className="text-gray-800">हिंदी</option>
              </select>
            </motion.div>

            {/* User Authentication */}
            {user ? (
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <button className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}>
                  <User size={20} />
                  <span className="text-sm font-medium">
                    {user.user_metadata?.name || 'User'}
                  </span>
                </button>
                
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/bookings" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      My Bookings
                    </Link>
                    <button 
                      onClick={signOut}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.button
                onClick={onAuthClick}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/delhi">Delhi</MobileNavLink>
              <MobileNavLink to="/noida">Noida</MobileNavLink>
              <MobileNavLink to="/tours">Tours</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              
              <div className="flex items-center pt-4 border-t border-gray-200">
                <Globe size={20} className="text-gray-600 mr-2" />
                <select className="bg-transparent text-gray-800 border-none focus:outline-none">
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>

              {user ? (
                <div className="pt-2 space-y-2">
                  <div className="text-gray-800 font-medium px-2">
                    Welcome, {user.user_metadata?.name || 'User'}!
                  </div>
                  <MobileNavLink to="/profile">Profile</MobileNavLink>
                  <MobileNavLink to="/bookings">My Bookings</MobileNavLink>
                  <button 
                    onClick={signOut}
                    className="block w-full text-left py-2 px-2 text-gray-800 hover:text-red-600 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <motion.button
                  onClick={onAuthClick}
                  className="mt-2 w-full bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

interface NavLinkProps {
  to: string;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isScrolled, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to}>
      <motion.span
        className={`
          font-medium transition-all duration-300 relative
          ${isActive 
            ? (isScrolled ? 'text-red-600' : 'text-yellow-300') 
            : (isScrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-yellow-300')
          }
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
              isScrolled ? 'bg-red-600' : 'bg-yellow-300'
            }`}
            layoutId="activeIndicator"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.span>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to}>
      <motion.div
        className={`py-2 px-2 block transition-colors duration-200 ${
          isActive ? 'text-red-600 font-medium' : 'text-gray-800 hover:text-red-600'
        }`}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export default Navbar;
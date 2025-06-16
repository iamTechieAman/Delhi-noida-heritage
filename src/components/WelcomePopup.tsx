import React, { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const WelcomePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenWelcome', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const modalVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      <motion.div 
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative bg-white rounded-lg p-8 max-w-md w-full mx-auto shadow-2xl z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </motion.button>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex items-center mb-6"
        >
          <MapPin size={32} className="text-red-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Welcome to हेरिटेज सफर!</h2>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <p className="text-gray-600 mb-6">
            Embark on a journey through time as we explore the rich historical heritage of Delhi and Noida. 
            Let us guide you through centuries of fascinating history and architectural marvels.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="flex items-center text-gray-700"
            whileHover={{ x: 10 }}
          >
            <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
            <span>Expert historian guides</span>
          </motion.div>
          <motion.div 
            className="flex items-center text-gray-700"
            whileHover={{ x: 10 }}
          >
            <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
            <span>Curated heritage experiences</span>
          </motion.div>
          <motion.div 
            className="flex items-center text-gray-700"
            whileHover={{ x: 10 }}
          >
            <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
            <span>Exclusive tour packages</span>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Button 
            onClick={() => setIsOpen(false)}
            fullWidth
            className="transform hover:scale-105 transition-transform"
          >
            Start Exploring
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomePopup;
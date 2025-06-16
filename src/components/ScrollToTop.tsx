import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const springProps = useSpring({
    transform: isVisible ? 'scale(1)' : 'scale(0)',
    opacity: isVisible ? 1 : 0,
    config: { tension: 300, friction: 20 }
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <animated.button
      style={{
        ...springProps,
        position: 'fixed',
        bottom: '120px', // Increased to avoid overlap with chat button
        right: '24px',
        backgroundColor: 'rgba(193, 69, 51, 0.9)',
        color: 'white',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 40, // Decreased to be below chat button
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        border: 'none',
        transition: 'all 0.3s ease'
      }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      <ArrowUp 
        size={24} 
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}
      />
    </animated.button>
  );
};

export default ScrollToTop;
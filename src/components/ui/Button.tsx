import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const [springs, api] = useSpring(() => ({
    scale: 1,
    shadow: '0 2px 4px rgba(0,0,0,0.1)',
    config: { mass: 1, tension: 400, friction: 20 }
  }));

  const handleMouseEnter = () => {
    if (!disabled) {
      api.start({
        scale: 1.02,
        shadow: '0 4px 8px rgba(0,0,0,0.15)',
      });
    }
  };

  const handleMouseLeave = () => {
    api.start({
      scale: 1,
      shadow: '0 2px 4px rgba(0,0,0,0.1)',
    });
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    secondary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    outline: 'bg-transparent border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <animated.button
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${widthClass}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      style={{
        transform: springs.scale.to(s => `scale(${s})`),
        boxShadow: springs.shadow,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.button>
  );
};

export default Button;
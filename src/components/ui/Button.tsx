import { ReactNode, MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </motion.button>
  );
}

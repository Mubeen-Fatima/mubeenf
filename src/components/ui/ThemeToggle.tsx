import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
      </motion.div>
    </motion.button>
  );
}

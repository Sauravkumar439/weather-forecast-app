// src/components/ThemeToggleButton.js

import React from "react";
import { IconButton, useTheme } from "@mui/material";
import { useThemeToggle } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeToggle();
  const theme = useTheme();

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: mode === "light" ? 360 : 180 }}
      transition={{ duration: 0.5 }}
    >
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === "light" ? <DarkModeIcon /> : <Brightness7Icon />}
      </IconButton>
    </motion.div>
  );
};

export default ThemeToggleButton;

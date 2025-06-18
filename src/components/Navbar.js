// src/components/Navbar.js

import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  Box,
} from "@mui/material";
import { ThemeModeContext } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function Navbar() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ThemeModeContext);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <AppBar position="static" elevation={4}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Weather Forecast
          </Typography>
          <Box>
            <motion.div
              key={theme.palette.mode}
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <IconButton onClick={toggleColorMode} color="inherit">
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

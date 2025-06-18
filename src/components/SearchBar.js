import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { motion } from "framer-motion";

export default function SearchBar({ onSearch, onLocationClick }) {
  const [query, setQuery] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4}
        px={isMobile ? 2 : 10}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch} color="primary">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Use My Location Button */}
        <Button
          variant="outlined"
          startIcon={<MyLocationIcon />}
          onClick={onLocationClick}
          sx={{ mt: 2, width: isMobile ? "100%" : "30%" }}
        >
          Use My Location
        </Button>
      </Box>
    </motion.div>
  );
}

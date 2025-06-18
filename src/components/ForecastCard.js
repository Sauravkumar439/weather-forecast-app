import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import AnimatedWeather from "react-animated-weather";

// OpenWeather icon code to animated icon mapping
const iconMapping = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "CLOUDY",
  "03n": "CLOUDY",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "WIND",
  "11n": "WIND",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

const ForecastCard = ({ day, icon, min, max, desc }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const mappedIcon = iconMapping[icon] || "CLEAR_DAY";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card
        sx={{
          minWidth: isMobile ? 120 : 150,
          margin: 1,
          backgroundColor: "#e3f2fd",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" align="center">
            {day}
          </Typography>
          <Box display="flex" justifyContent="center" mt={1}>
            <AnimatedWeather
              icon={mappedIcon}
              color="dodgerblue"
              size={50}
              animate={true}
            />
          </Box>
          <Typography align="center" variant="body2">
            {desc}
          </Typography>
          <Typography align="center" sx={{ mt: 1 }}>
            {min}° / {max}°
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ForecastCard;

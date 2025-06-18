import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import AnimatedWeather from "react-animated-weather";

const iconMapping = {
  Clear: "CLEAR_DAY",
  Clouds: "CLOUDY",
  Rain: "RAIN",
  Drizzle: "SLEET",
  Thunderstorm: "WIND",
  Snow: "SNOW",
  Mist: "FOG",
  Smoke: "FOG",
  Haze: "FOG",
  Dust: "FOG",
  Fog: "FOG",
  Sand: "FOG",
  Ash: "FOG",
  Squall: "WIND",
  Tornado: "WIND",
};

export default function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  const condition = weather[0].main;
  const icon = iconMapping[condition] || "CLEAR_DAY";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={11} sm={8} md={6}>
          <Card elevation={6}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4">{name}</Typography>
                  <Typography variant="h6">{weather[0].main}</Typography>
                  <Typography variant="body1">
                    Temp: {main.temp}°C | Feels like: {main.feels_like}°C
                  </Typography>
                  <Typography variant="body2">
                    Humidity: {main.humidity}% | Wind: {wind.speed} m/s
                  </Typography>
                </Box>
                <Box>
                  <AnimatedWeather
                    icon={icon}
                    color="goldenrod"
                    size={80}
                    animate={true}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  );
}

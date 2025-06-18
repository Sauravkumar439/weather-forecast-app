import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ForecastCard from "./ForecastCard";
import { groupForecastByDay } from "../utils/groupForecastByDay";
import { motion } from "framer-motion";

const ForecastList = ({ forecast }) => {
  const dailyForecast = groupForecastByDay(forecast.list).slice(0, 5);
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  return (
    <Box mt={4} px={isMobile ? 2 : 6}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        5-Day Forecast
      </Typography>

      <motion.div
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          paddingBottom: 8,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {dailyForecast.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{
              flex: "0 0 auto",
              width: isMobile ? "80%" : "160px",
            }}
          >
            <ForecastCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default ForecastList;

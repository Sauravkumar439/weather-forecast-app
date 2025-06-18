// src/components/ForecastChart.js
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Box, Typography } from "@mui/material";

export default function ForecastChart({ forecast }) {
  const data = forecast.list
    .filter((item, index) => index % 8 === 0) // one per day (3-hour intervals → 8/day)
    .map((item) => ({
      date: new Date(item.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      temp: item.main.temp,
    }));

  return (
    <Box mt={4} px={2}>
      <Typography variant="h6" gutterBottom>
        Temperature Trend (Next 5 Days)
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#1976d2" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

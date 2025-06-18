import React from "react";
import { motion } from "framer-motion";

const weatherBackgrounds = {
  Clear: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  Clouds: "linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%)",
  Rain: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
  Thunderstorm: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
  Snow: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
  Drizzle: "linear-gradient(135deg, #74ebd5 0%, #9face6 100%)",
  Mist: "linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 100%)",
  Haze: "linear-gradient(135deg, #f2f2f2 0%, #b6b6b6 100%)",
  Fog: "linear-gradient(135deg, #d7d2cc 0%, #304352 100%)",
  Default: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
};

const Background = ({ condition }) => {
  const bg = weatherBackgrounds[condition] || weatherBackgrounds.Default;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: -1,
        background: bg,
      }}
    />
  );
};

export default Background;

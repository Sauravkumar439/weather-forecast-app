import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import CustomThemeProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherSkeleton from "./components/WeatherSkeleton";
import ForecastList from "./components/ForecastList";
import ForecastChart from "./components/ForecastChart"; // ✅ New
import Background from "./components/Background"; // ✅ Background
import { fetchCurrentWeather } from "./api/weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const API_KEY = "e4ac8ad712c9ffdd5b56daa1201ba706";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setWeatherData(null);
    setForecastData(null);

    try {
      const current = await fetchCurrentWeather(city);
      const forecastResponse = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      setWeatherData(current);
      setForecastData(forecastResponse.data);
    } catch (error) {
      toast.error("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setWeatherData(null);
    setForecastData(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const currentResponse = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
              params: {
                lat: latitude,
                lon: longitude,
                appid: API_KEY,
                units: "metric",
              },
            }
          );

          const forecastResponse = await axios.get(
            "https://api.openweathermap.org/data/2.5/forecast",
            {
              params: {
                lat: latitude,
                lon: longitude,
                appid: API_KEY,
                units: "metric",
              },
            }
          );

          setWeatherData(currentResponse.data);
          setForecastData(forecastResponse.data);
        } catch (err) {
          toast.error("Unable to fetch weather for your location.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        toast.error("Permission denied or location unavailable.");
        setLoading(false);
      }
    );
  };

  return (
    <CustomThemeProvider>
      <CssBaseline />

      {/* ✅ Weather-based Animated Background */}
      {weatherData && <Background condition={weatherData.weather[0].main} />}

      <Navbar />
      <SearchBar onSearch={handleSearch} onLocationClick={handleLocation} />

      {loading && <WeatherSkeleton />}
      {!loading && weatherData && <WeatherCard data={weatherData} />}
      {!loading && forecastData && <ForecastList forecast={forecastData} />}
      {!loading && forecastData && <ForecastChart forecast={forecastData} />}

      <ToastContainer position="top-right" autoClose={3000} />
    </CustomThemeProvider>
  );
}

export default App;

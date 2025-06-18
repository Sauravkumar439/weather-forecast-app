import axios from "axios";

const API_KEY = "e4ac8ad712c9ffdd5b56daa1201ba706";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("City not found");
  }
};

import axios from 'axios';

const API_KEY = '*****';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

// The fetchWeatherData function takes a latitude and longitude and returns weather data for those coordinates.
const fetchWeatherData = async (latitude, longitude) => {
  try {
    const url = `${BASE_URL}&lat=${latitude}&lon=${longitude}`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// The fetchWeatherDataByCity function takes a city name and returns the weather data for that city.
const fetchWeatherDataByCity = async city => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export {fetchWeatherData, fetchWeatherDataByCity};

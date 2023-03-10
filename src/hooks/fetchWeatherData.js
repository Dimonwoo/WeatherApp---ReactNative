import axios from 'axios';

const API_KEY = '54fd8c05d6bb82948472a6779a824a46';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

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

export default fetchWeatherData;

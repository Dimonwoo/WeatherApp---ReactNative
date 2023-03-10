import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import fetchWeatherData from './hooks/fetchWeatherData';

import Loading from './components/Loading/Loading';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        fetchWeatherData(latitude, longitude)
          .then(data => {
            setWeatherData(data);
            console.log(data);
            setLoading(false);
          })
          .catch(error => {
            Alert.alert('Bir hata oluştu!');
            setLoading(false);
          });
      },
      error => {
        Alert.alert('Bir hata oluştu!');
        setLoading(false);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <Text>Hello Weather</Text>
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </View>
  );
};

export default App;

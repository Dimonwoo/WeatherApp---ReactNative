import React, {useState, useEffect} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import {fetchWeatherData} from './hooks/fetchWeatherData';

import Loading from './components/Loading/Loading';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [searchedData, setSearchedData] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        fetchWeatherData(latitude, longitude)
          .then(data => {
            setWeatherData(data);
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

  const handleCityData = data => {
    setSearchedData(data);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SearchBar cityData={handleCityData} />
      {searchedData ? (
        <WeatherInfo weatherData={searchedData} />
      ) : (
        <WeatherInfo weatherData={weatherData} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

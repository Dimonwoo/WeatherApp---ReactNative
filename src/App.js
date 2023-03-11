import React, {useState, useEffect} from 'react';
import {
  View,
  Alert,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
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
            Alert.alert('Something went wrong!');
            setLoading(false);
          });
      },
      error => {
        Alert.alert('Something went wrong!');
        setLoading(false);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const handleCityData = data => {
    setSearchedData(data);
  };

  const getBackgroundImage = description => {
    const images = {
      Rain: require('./assets/images/rainy.jpg'),
      Clouds: require('./assets/images/clouds.jpg'),
      Clear: require('./assets/images/sunny.jpg'),
      Snow: require('./assets/images/snow.jpg'),
      default: require('./assets/images/default.jpg'),
    };
    const selectedImage = images[description] || images.default;
    return selectedImage;
  };
  let backgroundImage;
  if (searchedData || weatherData) {
    const description = (searchedData || weatherData).weather[0].main;
    backgroundImage = getBackgroundImage(description);
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}>
          <SearchBar cityData={handleCityData} />
          {searchedData ? (
            <WeatherInfo weatherData={searchedData} />
          ) : (
            <WeatherInfo weatherData={weatherData} />
          )}
        </ImageBackground>
      </View>
    );
  }
};

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: deviceSize.width / 1,
    height: deviceSize.height / 1,
  },
});

export default App;

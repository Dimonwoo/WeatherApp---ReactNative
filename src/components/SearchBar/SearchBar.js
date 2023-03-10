import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {fetchWeatherDataByCity} from '../../hooks/fetchWeatherData';

import styles from './SearchBar.style';

const SearchBar = ({cityData}) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    const data = await fetchWeatherDataByCity(city);
    cityData(data);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setCity(text)}
        placeholder="Search city..."
        value={city}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text style={styles.button_text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

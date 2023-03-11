import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {fetchWeatherDataByCity} from '../../hooks/fetchWeatherData';
import Icon from 'react-native-vector-icons/EvilIcons';

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
        placeholderTextColor="gray"
      />
      <Icon
        onPress={handleSearch}
        name="search"
        size={35}
        color="gray"
        style={styles.icon}
      />
    </View>
  );
};

export default SearchBar;

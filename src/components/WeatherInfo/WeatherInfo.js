import React from 'react';
import {View, Text, Image} from 'react-native';

const WeatherInfo = ({weatherData}) => {
  const {name, weather, main, wind, visibility, rain} = weatherData;
  const {description, icon} = weather[0];

  return (
    <View>
      <Text>{name}</Text>
      <Image source={{uri: `http://openweathermap.org/img/w/${icon}.png`}} />
      <Text>{description}</Text>
      <Text>Sıcaklık: {main.temp}°C</Text>
      <Text>Nem: {main.humidity}%</Text>
      <Text>Rüzgar Hızı: {wind.speed} m/s</Text>
      <Text>Rüzgar Yönü: {wind.deg}°</Text>
      <Text>Görüş Mesafesi: {visibility} metre</Text>
      {rain && <Text>Yağış: {rain['1h']} mm/saat</Text>}
    </View>
  );
};

export default WeatherInfo;

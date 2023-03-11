import React from 'react';
import {View, Text, Image} from 'react-native';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './WeatherInfo.style';

const WeatherInfo = ({weatherData}) => {
  const {name, weather, main, wind, visibility, sys} = weatherData;
  const {main: description, icon} = weather[0];
  const date = format(new Date(), 'dd/MM/yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.loc_time_container}>
        <Text style={styles.location}>
          {sys.country} / {name}
        </Text>
        <Text style={styles.date_time}>{date}</Text>
      </View>
      <View style={styles.icon_desc_container}>
        <Image
          style={styles.weather_icon}
          source={{uri: `http://openweathermap.org/img/w/${icon}.png`}}
        />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.temp}>{main.temp.toFixed()}°C</Text>
      </View>
      <View style={styles.hum_vis_container}>
        <View style={styles.bottom_info_containers}>
          <Icon
            name="water-percent"
            size={35}
            style={styles.icons}
            color="#007a96"
          />
          <Text style={styles.humidity}>{main.humidity}%</Text>
          <Text style={styles.humidity}>Humidity</Text>
        </View>
        <View style={styles.bottom_info_containers}>
          <Icon name="eye" size={35} style={styles.icons} color="#00963e" />
          <Text style={styles.visiblity}>{visibility} m</Text>
          <Text style={styles.visiblity}>Visibility</Text>
        </View>
      </View>
      <View style={styles.wind_container}>
        <View style={styles.bottom_info_containers}>
          <Icon
            name="weather-windy"
            size={35}
            style={styles.icons}
            color="orange"
          />
          <Text style={styles.wind_speed}>{wind.speed} m/s</Text>
          <Text style={styles.wind_speed}>Wind Speed</Text>
        </View>
        <View style={styles.bottom_info_containers}>
          <Icon
            name="windsock"
            size={35}
            style={styles.icons}
            color="#c04000"
          />
          <Text style={styles.wind_deg}>{wind.deg}°</Text>
          <Text style={styles.wind_deg}>Wind Deg</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfo;

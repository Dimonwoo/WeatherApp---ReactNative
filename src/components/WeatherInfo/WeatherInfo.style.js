import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  location: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  date_time: {
    textAlign: 'center',
    fontSize: 18,
  },
  icon_desc_container: {
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    // backgroundColor: 'yellow',
  },
  description: {
    fontSize: 18,
    marginTop: -20,
  },
  temp: {
    textAlign: 'center',
    marginTop: 30,
  },
  hum_vis_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginHorizontal: 15,
  },
  humidity: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
  },
  visiblity: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
  },
  wind_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginHorizontal: 15,
  },
  wind_speed: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
  },
  wind_deg: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
  },
  bottom_info_containers: {
    borderWidth: 1,
    padding: 10,
    width: 130,
    height: 110,
    borderRadius: 10,
    // backgroundColor: 'black',
    // opacity: 0.9,
  },
  icons: {
    alignSelf: 'center',
    marginBottom: 3,
  },
  rain: {},
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 5,
    height: 50,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button_text: {
    borderRadius: 10,
    padding: 7,
    paddingHorizontal: 10,
    marginRight: 2,
    backgroundColor: 'green',
    color: 'white',
    fontSize: 15,
  },
});

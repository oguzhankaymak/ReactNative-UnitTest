import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  card: {
    backgroundColor: '#C0C0C0',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#d9534f',
    height: 34,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#ffffff',
  },
});

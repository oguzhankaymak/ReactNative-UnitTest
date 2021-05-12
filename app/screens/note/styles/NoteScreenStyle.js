import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  header: {
    marginTop: 40,
    alignItems: 'center',
  },

  headerTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  addButton: {
    marginTop: 15,
    width: deviceWidth - 30,
    backgroundColor: '#4BB543',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 15,
  },

  body: {
    marginTop: 50,
  },

  content: {
    paddingVertical: 15,
  },

  contentTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  line: {
    marginTop: 8,
    width: deviceWidth - 30,
    backgroundColor: '#A9A9A9',
    height: 0.8,
  },

  noteCardView: {
    marginTop: 10,
  },
});

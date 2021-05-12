import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18FDFA80',
  },

  modalView: {
    width: 220,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  titleText: {
    fontSize: 15,
  },

  container: {
    alignItems: 'center',
    paddingBottom: 5,
  },

  closeView: {
    alignItems: 'flex-end',
    padding: 2,
  },

  close: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 24,
    height: 24,
    borderRadius: 10,
  },

  closeText: {
    color: '#ffffff',
  },

  textInput: {
    marginTop: 15,
    width: 200,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 12,
    alignItems: 'center',
    paddingVertical: 0,
    borderColor: '#A9A9A9',
  },

  addButton: {
    marginTop: 15,
    width: 200,
    backgroundColor: '#4BB543',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 13,
  },
});

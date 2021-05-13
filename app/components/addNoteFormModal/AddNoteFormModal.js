import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';

import styles from './styles/AddNoteFormModalStyle';

const AddNoteFormModal = ({closeModal, addNote}) => {
  const [text, setText] = useState('');

  const resetInputs = () => {
    setText('');
  };
  return (
    <Modal animationType="fade" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.closeView}>
            <TouchableOpacity
              hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
              onPress={closeModal}>
              <View style={styles.close}>
                <Text style={styles.closeText}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.titleText}>Add Note</Text>
            <TextInput
              value={text}
              onChangeText={setText}
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={() => {
                addNote(text);
                resetInputs();
              }}
              style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteFormModal;

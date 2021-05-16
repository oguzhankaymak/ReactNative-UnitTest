import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AddNoteFormModal from '../../components/addNoteFormModal/AddNoteFormModal';
import NoteCard from '../../components/noteCard/NoteCard';

import styles from './styles/NoteScreenStyle';

const NoteScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [noteList, setNoteList] = useState([]);

  const addNote = text => {
    if (text && text.length > 0) {
      let tempValue = {
        id: Math.floor(Math.random() * 100000),
        text,
      };

      setNoteList([...noteList, tempValue]);
    }
  };

  const deleteNote = id => {
    let newNotes = noteList.filter(data => data.id !== id);
    setNoteList(newNotes);
  };

  const _renderContent = () => {
    if (noteList && noteList.length > 0) {
      return noteList.map(note => (
        <View key={note.id} style={styles.noteCardView}>
          <NoteCard note={note} deleteNote={id => deleteNote(id)} />
        </View>
      ));
    }
    return (
      <View>
        <Text>Note Not Added Yet</Text>
      </View>
    );
  };

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      {modalVisible && (
        <AddNoteFormModal closeModal={closeModal} addNote={addNote} />
      )}

      <View style={styles.header}>
        <Text style={styles.headerTitleText}>Note Screen</Text>
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Text style={styles.addButtonText}>Add Note</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.contentTitleText}>Note List</Text>
        <View style={styles.line} />
        <View style={styles.content} testID={'note-content'}>
          {_renderContent()}
        </View>
      </View>
    </View>
  );
};

export default NoteScreen;

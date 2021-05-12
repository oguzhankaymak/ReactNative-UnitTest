import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles/NoteCardStyle';

const NoteCard = ({note, deleteNote}) => {
  return (
    <View style={styles.card}>
      <View>
        <Text>{note.title}</Text>
        <Text>{note.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => deleteNote(note.id)}>
        <Text style={styles.btnText}>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteCard;

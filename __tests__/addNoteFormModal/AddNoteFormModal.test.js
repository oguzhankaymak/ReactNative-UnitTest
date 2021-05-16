import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import AddNoteFormModal from '../../app/components/addNoteFormModal/AddNoteFormModal';

test('given a text in the input and then returns that text when click button', () => {
  var noteText;

  const addNote = text => {
    noteText = text;
  };

  const {getByPlaceholderText, getByText, toJSON} = render(
    <AddNoteFormModal addNote={text => addNote(text)} />,
  );

  const input = getByPlaceholderText('Write note...');
  fireEvent.changeText(input, 'Blog yazımı tamamlamam gerekiyor.');

  const addNotebutton = getByText('Add');
  fireEvent.press(addNotebutton);

  expect(noteText).toBe('Blog yazımı tamamlamam gerekiyor.');
  expect(toJSON()).toMatchSnapshot();
});

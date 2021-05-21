import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NoteScreen from '../../app/screens/note/NoteScreen';

test("if it hasn't note, displaying description message ", () => {
  const noNoteMessage = 'Note Not Added Yet';

  const {getByText} = render(<NoteScreen />);
  expect(getByText(noNoteMessage)).toBeTruthy();
});

test('when new notes added, these notes are displaying', () => {
  const note_1 = 'Blog yazımı tamamlamam gerekiyor.';
  const note_2 = 'Alışveriş yapmam gerekiyor.';

  const {getByText, getByPlaceholderText, getByTestId, toJSON} = render(
    <NoteScreen />,
  );

  //open modal
  const openModalButton = getByText('Add Note');
  fireEvent.press(openModalButton);

  const input = getByPlaceholderText('Write note...');
  const addNotebutton = getByText('Add');

  //note 1
  fireEvent.changeText(input, note_1);
  fireEvent.press(addNotebutton);

  //note 2
  fireEvent.changeText(input, note_2);
  fireEvent.press(addNotebutton);

  // note count control
  const noteContent = getByTestId('note-content');
  expect(noteContent.children.length).toBe(2);

  expect(getByText(note_1)).toBeTruthy();
  expect(getByText(note_2)).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});

test("when deleted note, this note don't display", () => {
  const note_1 = 'Blog yazımı tamamlamam gerekiyor.';
  const note_2 = 'Alışveriş yapmam gerekiyor.';

  const {getByText, getAllByText, getByPlaceholderText, getByTestId} = render(
    <NoteScreen />,
  );

  const openModalButton = getByText('Add Note');
  fireEvent.press(openModalButton);

  const input = getByPlaceholderText('Write note...');
  const addNotebutton = getByText('Add');

  //note 1
  fireEvent.changeText(input, note_1);
  fireEvent.press(addNotebutton);

  //note 2
  fireEvent.changeText(input, note_2);
  fireEvent.press(addNotebutton);

  //delete note
  const deletebutton = getAllByText('delete');
  fireEvent.press(deletebutton[0]);

  const noteContent = getByTestId('note-content');
  expect(noteContent.children.length).toBe(1);
});

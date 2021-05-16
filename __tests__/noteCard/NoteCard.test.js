import React from 'react';
import {render} from '@testing-library/react-native';
import NoteCard from '../../app/components/noteCard/NoteCard';

test('given a text, note card has that text', () => {
  const note = {id: '1233213', text: 'Projemi tamamlamam gerekiyor.'};
  const {getByText, toJSON} = render(<NoteCard note={note} />);

  expect(getByText('Projemi tamamlamam gerekiyor.')).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});

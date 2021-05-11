import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import NoteScreen from '../screens/note/NoteScreen';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Note">
        <Drawer.Screen name="Note" component={NoteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

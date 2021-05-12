import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './app/navigation/Navigation';

const route = () => (
  <SafeAreaView style={{flex: 1}}>
    <Navigation />
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => route);

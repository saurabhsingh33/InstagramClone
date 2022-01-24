import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import Search from './src/Screens/Search/Search';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootNavigation from './src/Navigation/Navigation';


const Tab = createBottomTabNavigator();
const App = () => {

  return (
    <RootNavigation />
  );
};

export default App;

import React, {useState} from 'react';
import type {Node} from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from './containers/Landing';
import Home from './containers/Home';
import Header from './components/Header';

const Stack = createStackNavigator();

const customoOptions = {
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
   fontSize:16,
   color:'white'
  },
  headerTitleContainerStyle:{
    fontSize:40
  }
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            ...customoOptions
           }}
          component={Home}
        />
        <Stack.Screen
          name="Landing"
          options={{
           ...customoOptions
          }}
          component={Landing}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#ddd',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'blue',
  },
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: props => <Header title="Home" />,
            ...customoOptions,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Landing"
          options={{
            ...customoOptions,
            headerTitle: props => <Header title="Landing" />,
          }}
          component={Landing}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

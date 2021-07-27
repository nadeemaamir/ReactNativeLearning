import React, {useState} from 'react';
import type {Node} from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Landing from './containers/Landing';
import Home from './containers/Home';
import Detail from './containers/Detail';
import Header from './components/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const customoOptions = {
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 16,
    color: 'white',
  },
  headerTitleContainerStyle: {
    fontSize: 40,
  },
};
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
}

const App: () => Node = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       options={{
    //         ...customoOptions,
    //       }}
    //       component={Home}
    //     />
    //     <Stack.Screen
    //       name="Landing"
    //       options={{
    //         ...customoOptions,
    //       }}
    //       component={Landing}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Landing') {
              iconName = focused ? 'list-outline' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Landing" component={Landing} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

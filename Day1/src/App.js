import React from 'react';
import type {Node} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from './containers/Landing';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          navigation.navigate('Landing');
        }}>
        Home Screen
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App: () => Node = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Landing"
          options={{
            title: '',
            headerShown: false,
          }}
          component={Landing}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Tab, TabView} from 'react-native-elements';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignUp from './containers/SignUp';
import Login from './containers/Login';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item style={styles.TabStyle} title="Login" />
        <Tab.Item style={styles.TabStyle} title="Sign Up" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{width: '100%'}}>
          <SignUp />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Login />
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  TabStyle: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  WelcomeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  WelComeLable: {
    fontSize: 30,
  },
  InputTemplate: {
    marginTop: '20%',
  },
  BoldText: {
    fontWeight: 'bold',
  },
  Button: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '7%',
    marginTop: '20%',
  },
  redbutton: {
    backgroundColor: 'red',
    padding: 5,
  },
  yellowbutton: {
    backgroundColor: 'yellow',
    padding: 5,
  },
});

export default App;

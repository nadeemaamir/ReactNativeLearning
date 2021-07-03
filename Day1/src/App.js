/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Tab, TabView, Input, Button} from 'react-native-elements';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

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
          <View>
            <View style={styles.WelcomeContainer}>
              <Text style={styles.WelComeLable}>Welcome Back,</Text>
              <Text style={[styles.WelComeLable, styles.BoldText]}>Nadeem</Text>
            </View>
            <View style={styles.InputTemplate}>
              <Input
                style={styles.InputContainer}
                placeholder="Email Address"
              />
              <Input
                style={styles.InputContainer}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.Button}>
              <Button title="Button with icon component" />
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <View>
            <View style={styles.WelcomeContainer}>
              <Text style={styles.WelComeLable}>
                Hello <Text h1>Beautiful,</Text>
              </Text>
              <Text>
                Enter your information below or {'\n'} login with a social media
                account
              </Text>
            </View>
            <View style={styles.InputTemplate}>
              <Input
                style={styles.InputContainer}
                placeholder="Email Address"
              />
              <Input
                style={styles.InputContainer}
                placeholder="Password"
                secureTextEntry={true}
              />
              <Input
                style={styles.InputContainer}
                placeholder="Password again"
                secureTextEntry={true}
              />
            </View>
          </View>
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
});

export default App;

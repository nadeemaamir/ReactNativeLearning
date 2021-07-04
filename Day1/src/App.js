import React from 'react';
import type {Node} from 'react';
import {Tab, TabView} from 'react-native-elements';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignUp from './containers/SignUp/index';
import Login from './containers/Login/index';
import styles from './styles';

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

export default App;

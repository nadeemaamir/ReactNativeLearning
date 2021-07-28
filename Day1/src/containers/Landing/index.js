import React from 'react';
import {Text} from 'react-native';
import {Tab, TabView} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignUp from '../SignUp/index';
import Login from '../Login/index';
import Posts from '../APIPractise/Posts';
import styles from './styles';

const Landing = ({params, navigation, route}) => {
  const [index, setIndex] = React.useState(0);
  const {Username} = 'Test'; //route.params;
  return (
    <>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item style={styles.TabStyle} title="Login" />
        <Tab.Item style={styles.TabStyle} title="Sign Up" />
        <Tab.Item style={styles.TabStyle} title="Posts" />
      </Tab>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{width: '100%'}}>
          <>
            <Login UserName={Username} />
            <Text
              onPress={() => {
                navigation.pop();
              }}>
              Go Back
            </Text>
          </>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <SignUp />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Posts />
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Landing;

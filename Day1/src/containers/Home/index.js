import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Input from '../../components/TextInput';
import styles from '../Login/styles';
import Button from '../../components/Button';

const Home = ({navigation}) => {
  const [username, setUserName] = useState('');
  const Tab = createBottomTabNavigator();
  return (
    <View>
      <View style={styles.InputTemplate}>
        <Input
          placeholder="Enter User Name"
          onChangeText={text => setUserName(text)}
        />
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          onPress={() => {
            navigation.navigate('Landing', {
              Username: username,
            });
          }}>
          Home Screen
        </Text>
      </View>
    </View>
  );
};

export default Home;

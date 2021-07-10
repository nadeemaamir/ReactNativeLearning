import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Input from '../../components/TextInput';
import styles from '../Login/styles';

const Home = ({navigation}) => {
  const [username, setUserName] = useState('');
  return (
    <View>
      <View style={styles.InputTemplate}>
        <Input
          placeholder="Enter User Name"
          onChangeText={text => setUserName(text)}
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

import React, {useState} from 'react';
import axios from 'axios';
import {Text, View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/TextInput';
import Header from '../../components/Header';
import styles from './styles';

const Login = ({params, UserName}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const URL = `http://51.38.40.13:4041/api/Login/UserAuthentication?Username=${username}&Password=${password}`;
  const onLogin = async () => {
    try {
      const response = await axios.get(URL);
      alert('Login Sucessfully');
    } catch (error) {
      alert('Login Failed' + error);
    }
  };

  return (
    <View>
      <View style={styles.WelcomeContainer}>
        <Text style={styles.WelComeLable}>Welcome Back,</Text>
        <Text style={[styles.WelComeLable, styles.BoldText]}>{UserName}</Text>
      </View>
      <View style={styles.InputTemplate}>
        <Input placeholder="Email Address" onChangeText={setUsername} />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.Button}>
        <Button
          title="Login"
          onPress={() => {
            onLogin();
          }}
        />
      </View>
    </View>
  );
};

export default Login;

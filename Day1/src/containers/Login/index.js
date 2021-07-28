import React, {useState} from 'react';
import axios from 'axios';
import {Text, View, ActivityIndicator} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/TextInput';
import Header from '../../components/Header';
import styles from './styles';

const Login = ({params, UserName}) => {
  const [username, setUsername] = useState('Asad');
  const [password, setPassword] = useState('123');
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://api.themoviedb.org/3/movie/popular';
  const API_KEY = 'bb925e230868e5ea561be5d9be231edb';
  const PARAMS = 'page=1';
  const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;
  const URL = `https://51.38.40.13:4041/api/Login/UserAuthentication?Username=${username}&Password=${password}`;
  const onLogin = async () => {
    try {
      setLoading(true);
      console.log('URL kia bana', URL);
      const response = await axios.get(`${BASE_URL}`);
      console.log('response', response.data);
    } catch (error) {
      // eslint-disable-next-line no-alert
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      {/* <View style={styles.WelcomeContainer}>
        <Text style={styles.WelComeLable}>Welcome Back,</Text>
        <Text style={[styles.WelComeLable, styles.BoldText]}>{UserName}</Text>
      </View> */}
      <View style={styles.InputTemplate}>
        <Input
          placeholder="Email Address"
          onChangeText={setUsername}
          value={username}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.Button}>
        <Button
          title="Login"
          loading={loading}
          onPress={() => {
            console.log('here');
            onLogin();
          }}
        />
      </View>
    </View>
  );
};

export default Login;

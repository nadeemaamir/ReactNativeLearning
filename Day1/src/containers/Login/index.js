import React, {useState} from 'react';
import axios from 'axios';
import {Text, View, ActivityIndicator} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/TextInput';
import Header from '../../components/Header';
import styles from './styles';

const Login = ({params, UserName}) => {
  const API_URL = 'https://api.themoviedb.org/3/movie/popular';
  const API_KEY = 'bb925e230868e5ea561be5d9be231edb';
  const PARAMS = 'page=1';
  const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const baseurl = `http://51.38.40.13:4041/api/Login/UserAuthentication?Username=${username}&Password=${password}`;
  const todourl = 'https://jsonplaceholder.typicode.com/todos/1';
  const onLogin = async () => {
    try {
      setLoading(true);
      console.log('url kia bana', todourl);
      const response = await axios.get(todourl);
      alert('Login Successfully');
    } catch (error) {
      // eslint-disable-next-line no-alert
      console.log(error.response.data);
    } finally {
      setLoading(false);
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

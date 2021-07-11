import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/TextInput';
import Header from '../../components/Header'
import styles from './styles';

const Login = ({params, UserName}) => (
  <View>
    <View style={styles.WelcomeContainer}>
      <Text style={styles.WelComeLable}>Welcome Back,</Text>
      <Text style={[styles.WelComeLable, styles.BoldText]}>{UserName}</Text>
    </View>
    <View style={styles.InputTemplate}>
      <Input placeholder="Email Address" />
      <Input placeholder="Password" secureTextEntry />
    </View>
    <View style={styles.Button}>
      <Button title="Login" />
    </View>
  </View>
);

export default Login;

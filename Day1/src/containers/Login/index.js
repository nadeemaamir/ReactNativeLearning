import React from 'react';
import {Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './styles';
import Button from '../../components/Button'

const Login = ({params}) => (
  <View>
    <View style={styles.WelcomeContainer}>
      <Text style={styles.WelComeLable}>
        Hello <Text h1>Beautiful,</Text>
      </Text>
      <Text>
        Enter your information below or {'\n'} login with a social media account
      </Text>
    </View>
    <View style={styles.InputTemplate}>
      <Input style={styles.InputContainer} placeholder="Email Address" />
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
    <View style={styles.Button}>
      <Button style={styles.redbutton} title="Login" />
    </View>
  </View>
);

export default Login;

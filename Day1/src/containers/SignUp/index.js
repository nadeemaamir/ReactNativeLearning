import React from 'react';
import {Text, View} from 'react-native';
import Input from '../../components/TextInput';
import styles from './styles';
import Button from '../../components/Button';

const SignUp = ({params}) => (
  <View>
    <View style={styles.WelcomeContainer}>
      <Text style={styles.WelComeLable}>
        Hello <Text h1>Beautiful,</Text>
      </Text>
      <Text>
        Enter your information below or {'\n'} SifnUp with a social media
        account
      </Text>
    </View>
    <View style={styles.InputTemplate}>
      <Input placeholder="Email Address" />
      <Input placeholder="Password" secureTextEntry={true} />
      <Input placeholder="Password again" secureTextEntry={true} />
    </View>
    <View style={styles.Button}>
      <Button style={styles.redbutton} title="Sign Up" />
    </View>
  </View>
);

export default SignUp;

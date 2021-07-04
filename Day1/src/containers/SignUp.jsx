import React from 'react';
import {Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';

const SignUp = ({params}) => (
  <View>
    <View style={styles.WelcomeContainer}>
      <Text style={styles.WelComeLable}>Welcome Back,</Text>
      <Text style={[styles.WelComeLable, styles.BoldText]}>Nadeem</Text>
    </View>
    <View style={styles.InputTemplate}>
      <Input style={styles.InputContainer} placeholder="Email Address" />
      <Input
        style={styles.InputContainer}
        placeholder="Password"
        secureTextEntry={true}
      />
    </View>
    <View style={styles.Button}>
      <Button style={styles.yellowbutton} title="--->" />
    </View>
  </View>
);

export default SignUp;

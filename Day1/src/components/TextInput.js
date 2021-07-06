import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const RNInput = ({placeholder, secureTextEntry}) => (
  <View>
    <Input
      style={styles.InputContainer}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </View>
);
const styles = StyleSheet.create({
  InputContainer: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default RNInput;

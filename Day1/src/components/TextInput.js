import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const RNInput = ({placeholder, secureTextEntry, onChangeText, value}) => (
  <View>
    <Input
      style={styles.InputContainer}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
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

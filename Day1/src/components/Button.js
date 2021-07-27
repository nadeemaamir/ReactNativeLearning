import React from 'react';
import {StyleSheet, Button} from 'react-native';

const RNButton = ({title, onPress}) => (
  <Button onPress={onPress} color="red" title={title} />
);

export default RNButton;

const styles = StyleSheet.create({
  yellowbutton: {
    backgroundColor: 'yellow',
    padding: 5,
    marginHorizontal: 20,
  },
});

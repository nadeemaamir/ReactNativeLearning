import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const RNButton = ({title, onPress, loading}) => (
  <Button onPress={onPress} color="red" title={title} loading={loading} />
);

export default RNButton;

const styles = StyleSheet.create({
  yellowbutton: {
    backgroundColor: 'yellow',
    padding: 5,
    marginHorizontal: 20,
  },
});

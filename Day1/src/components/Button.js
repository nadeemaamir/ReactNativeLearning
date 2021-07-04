import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const RNButton = ({title}) => (
  <Button style={styles.yellowbutton} title={title} />
);

export default RNButton;

const styles = StyleSheet.create({
  yellowbutton: {
    backgroundColor: 'yellow',
    padding: 5,
  },
});

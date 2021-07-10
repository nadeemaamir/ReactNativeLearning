import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = props => {
  console.log(props);
  return (
    <View style={styles.HeaderContainer}>
      <Text styles={styles.TextStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#f4511e',
    color: 'white',
  },
  TextStyle: {color: 'white', fontWeight: 'bold', textAlign: 'center'},
});
export default Header;

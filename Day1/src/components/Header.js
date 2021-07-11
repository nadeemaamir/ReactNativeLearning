import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = props => {
  console.log(props);
  return (
    <View style={styles.HeaderContainer}>
      <Text styles={{color:'green'}}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
   
  },
  TextStyle: {fontWeight: 'bold', 
  textAlign: 'center',  
  color: 'white',
  fontSize:40}
});
export default Header;

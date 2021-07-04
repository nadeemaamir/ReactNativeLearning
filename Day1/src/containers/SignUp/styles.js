import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  InputContainer: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  WelcomeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  WelComeLable: {
    fontSize: 30,
  },
  InputTemplate: {
    marginTop: '20%',
  },
  BoldText: {
    fontWeight: 'bold',
  },
  Button: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '7%',
    marginTop: '20%',
  },
  redbutton: {
    backgroundColor: 'red',
    padding: 5,
  },
  yellowbutton: {
    backgroundColor: 'yellow',
    padding: 5,
  },
});

export default styles;

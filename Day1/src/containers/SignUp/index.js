import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Input from '../../components/TextInput';
import styles from './styles';
import Button from '../../components/Button';

const Messages = [
  {
    id: 1,
    Subjext: 'S1',
    Body: 'B1',
  },
  {
    id: 2,
    Subjext: 'S2',
    Body: 'B2',
  },
  {
    id: 3,
    Subjext: 'S3',
    Body: 'B3',
  },
];

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
      <Button
        style={styles.redbutton}
        onPress={() => {
          alert('SignUp');
        }}
        title="Sign Up"
      />
    </View>
    <View>
      <FlatList
        data={Messages}
        keyExtractor={message => message.id.toString()}
        renderItem={item => {
          return (
            <View>
              <Text>item.Subjext</Text>
            </View>
          );
        }}
      />
    </View>
  </View>
);

export default SignUp;

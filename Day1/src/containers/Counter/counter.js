import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../reducer/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const clickaction = useSelector(state => state.counter.clickaction);
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="decrement" onPress={() => dispatch(decrement())} />
      <Text>{clickaction}</Text>
    </View>
  );
};

export default Counter;

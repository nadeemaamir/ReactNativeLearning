import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  clickaction: 'none',
  initialState: {
    value: 0,
    clickaction: 'none',
  },
  reducers: {
    increment: state => {
      state.value += 1;
      state.clickaction = 'Incremenet';
    },
    decrement: state => {
      state.value -= 1;
      state.clickaction = 'Decrement';
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.clickaction = 'incrementByAmount';
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;

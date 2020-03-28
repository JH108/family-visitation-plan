import reduxToolkit from "@reduxjs/toolkit";

export const counterSlice = reduxToolkit.createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    add(state, action) {
      // TODO: Test if you can directly mutate state
      return state + action.payload.value;
    }
  }
});

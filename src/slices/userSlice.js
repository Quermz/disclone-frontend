import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "testname",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action;
    },
  },
});

export const { setUsername, setLoggedIn, setJsonToken } = counterSlice.actions;

export default counterSlice.reducer;

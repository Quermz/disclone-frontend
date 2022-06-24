import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  loggedIn: false,
  jsonToken: "",
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action;
    },
    setJsonToken: (state, action) => {
      state.jsonToken = action;
    },
  },
});

export const { setUsername, setLoggedIn, setJsonToken } = counterSlice.actions;

export default counterSlice.reducer;

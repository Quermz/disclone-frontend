import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentServer: "",
};

export const counterSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    setCurrentServer: (state, action) => {
      state.currentServer = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setCurrentServer } = counterSlice.actions;

export default counterSlice.reducer;

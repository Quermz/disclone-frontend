import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serverList: [],
  currentServer: "",
  serverDescription:
    "t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
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

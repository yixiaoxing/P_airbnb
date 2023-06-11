import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
    },
  },
  reducers: {
    changeHandleConfigAction(state, { payload }) {
      state.headerConfig = payload;
    },
  },
});

export const { changeHandleConfigAction } = mainSlice.actions;
export default mainSlice.reducer;

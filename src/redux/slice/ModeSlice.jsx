import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const ModeSlice = createSlice({
  name: "ModeSlice",
  initialState,
  reducers: {
    addMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { addMode } = ModeSlice.actions;
export default ModeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlide = createSlice({
  name: "darkMode",
  initialState: {
    darkMode: localStorage.getItem("darkMode") || "dark",
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlide.actions;
export default darkModeSlide.reducer;

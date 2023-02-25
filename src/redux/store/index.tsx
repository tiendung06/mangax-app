import darkModeSlide from "../slide/darkModeSlide";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  darkMode: darkModeSlide,
});

const store = configureStore({
  reducer,
});

export default store;

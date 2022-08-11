import { configureStore } from "@reduxjs/toolkit";

import horseReducer from "./horses/horseReducer";

const reducer = {
  horses: horseReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

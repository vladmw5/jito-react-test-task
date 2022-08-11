import { createReducer } from "@reduxjs/toolkit";
import horseActions from "./horseActions";

const initialState = {
  isConnected: false,
  horses: [],
  race: false,
};

const horseReducer = createReducer(initialState, {
  [horseActions.setConnectionTo]: (state, action) => {
    state.isConnected = action.payload;
  },
  [horseActions.setHorsesTo]: (state, action) => {
    state.horses = action.payload;
  },
  [horseActions.setRaceTo]: (state, action) => {
    state.race = action.payload;
  },
});

export default horseReducer;

import { createAction } from "@reduxjs/toolkit";

const setConnectionTo = createAction("horses/connect");
const setHorsesTo = createAction("horses/set");
const setRaceTo = createAction("horses/race");

const horseActions = { setConnectionTo, setHorsesTo, setRaceTo };

export default horseActions;

import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from "./Button.module.css";
import { WSContext } from "../../websocket/WebSocket";
import horseActions from "../../redux/horses/horseActions";
import { getRace } from "../../redux/horses/horseSelectors";

const Button = () => {
  const socket = useContext(WSContext);
  const isRacing = useSelector(getRace);
  const dispatch = useDispatch();

  const startTheRace = () => {
    if (isRacing) return;

    socket.emit("start");
    dispatch(horseActions.setRaceTo(true));
  };

  return (
    <button
      className={!isRacing ? s.button : s.disabled}
      type="button"
      onClick={startTheRace}
    >
      {!isRacing ? "Start the Race!" : "The Race is on..."}
    </button>
  );
};

export default Button;

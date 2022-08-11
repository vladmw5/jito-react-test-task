import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import s from "./App.module.css";
import Controls from "./Controls/";
import Race from "./Race";
import horseActions from "../redux/horses/horseActions";
import { WSContext } from "../websocket/WebSocket";

function App() {
  const socket = useContext(WSContext);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("connect", () => {
      dispatch(horseActions.setConnectionTo(true));
    });

    socket.on("disconnect", () => {
      dispatch(horseActions.setConnectionTo(false));
    });

    socket.on("ticker", (response) => {
      dispatch(horseActions.setHorsesTo(response));
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("ticker");
    };
  }, [dispatch, socket]);

  return (
    <div className={s.container}>
      <div className={s.app}>
        <Controls socket={socket} />
        <Race />
      </div>
    </div>
  );
}

export default App;

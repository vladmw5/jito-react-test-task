import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import s from "./Race.module.css";
import RaceChart from "../RaceChart";
import { getHorses, getRace } from "../../redux/horses/horseSelectors";
import { WSContext } from "../../websocket/WebSocket";

const Race = () => {
  const socket = useContext(WSContext);
  const horses = useSelector(getHorses);
  const isRacing = useSelector(getRace);
  const [winners, setWinners] = useState([]);
  const labels = horses.map((horse) => horse.name);
  const data = horses.map((horse) => horse.distance);

  useEffect(() => {
    horses.forEach((horse) => {
      if (
        horse.distance >= 1000 &&
        winners.findIndex((winner) => winner.name === horse.name) === -1
      )
        setWinners([...winners, horse]);
    });

    if (
      isRacing &&
      horses.length > 0 &&
      horses.every((horse) => horse.distance >= 1000) &&
      winners.length === horses.length
    ) {
      socket.off("ticker");
      alert(
        `We have the winners!\n${winners
          .map((horse, i) => `${i + 1}. ${horse.name}`)
          .join("\n")}`
      );
      document.location.reload();
    }
  }, [isRacing, winners, horses, socket]);

  return (
    <section className={s.race}>
      {isRacing ? (
        <RaceChart labels={labels} data={data} />
      ) : (
        <p className={s.text}>The race hasn't started yet</p>
      )}
    </section>
  );
};

export default Race;

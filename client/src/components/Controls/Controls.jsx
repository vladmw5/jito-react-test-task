import { useSelector } from "react-redux";

import s from "./Controls.module.css";
import Button from "../Button";
import { getIsConnected } from "../../redux/horses/horseSelectors";

const Controls = () => {
  const isConnected = useSelector(getIsConnected);
  return (
    <section className={s.controls}>
      {isConnected ? (
        <Button />
      ) : (
        <p className={s.noConnectionText}>No connection with the Server!</p>
      )}
    </section>
  );
};

export default Controls;

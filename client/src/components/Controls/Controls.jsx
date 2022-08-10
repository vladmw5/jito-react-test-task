import s from "./Controls.module.css";
import Button from "../Button";

const Controls = ({ isConnected }) => {
  return (
    <section className={s.controls}>
      {isConnected ? (
        <Button />
      ) : (
        <p className={s.noConnectionText}>No Connection with the Server!</p>
      )}
    </section>
  );
};

export default Controls;

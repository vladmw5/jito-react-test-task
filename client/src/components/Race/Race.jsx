import s from "./Race.module.css";

import RaceChart from "../RaceChart";
const Race = ({ horses }) => {
  const labels = horses.map((horse) => horse.name);
  const data = horses.map((horse) => horse.distance);
  return (
    <section className={s.race}>
      <RaceChart labels={labels} data={data} />
    </section>
  );
};

export default Race;

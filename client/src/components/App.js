import { useState } from "react";

import s from "./App.module.css";
import Controls from "./Controls/";
import Race from "./Race";

const horses = [
  {
    name: "Princess Diana",
    distance: 400,
  },
  {
    name: "Cricket",
    distance: 360,
  },
  {
    name: "Rebel",
    distance: 720,
  },
  {
    name: "Lucy",
    distance: 140,
  },
  {
    name: "Lacey",
    distance: 800,
  },
  {
    name: "Ginger",
    distance: 550,
  },
];

(async () => {
  const res = await fetch("http://localhost:3002");
})();

function App() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.app}>
        <Controls isConnected={isConnected} />
        <Race horses={horses} />
      </div>
    </div>
  );
}

export default App;

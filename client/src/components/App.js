import logo from "../images/logo.svg";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.App}>
      <header className={s.header}>
        <img src={logo} className={s.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={s.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
      </header>
    </div>
  );
}

export default App;

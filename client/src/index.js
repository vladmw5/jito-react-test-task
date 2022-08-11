import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import WSContextProvider from "./websocket/WebSocket";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WSContextProvider>
        <App />
      </WSContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

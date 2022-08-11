import { createContext } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";

const BASE_URL = "http://localhost:3002";

export const WSContext = createContext(null);

const WSContextProvider = ({ children }) => {
  let socket = null;
  if (!socket) {
    socket = io.connect(BASE_URL);
  }
  return <WSContext.Provider value={socket}>{children}</WSContext.Provider>;
};

WSContextProvider.propTypes = {
  children: PropTypes.node,
};

export default WSContextProvider;

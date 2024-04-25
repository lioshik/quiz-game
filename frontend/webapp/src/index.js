import consoleDisabled from "./disable_console";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import WebSocketService from "./websocket";
import "./css/normalize.css";
import "./css/index.css";
import "./css/scrollbar.css";
import App from "./App";

if (consoleDisabled) {
  console.log(
    "running productino build. logging disabled. you shouldn't see this message"
  );
} else {
  console.log("running dev build. logging enabled");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const webSocketService = new WebSocketService(store);
const backendUrl = process.env.REACT_APP_BACKEND_URL;
webSocketService.connect(backendUrl);

export { webSocketService };

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

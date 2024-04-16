import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import WebSocketService from "./websocket";
import "./css/normalize.css";
import "./css/index.css";
import "./css/scrollbar.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const webSocketService = new WebSocketService(store);
const backendUrl = process.env.REACT_APP_BACKEND_URL;
webSocketService.connect(backendUrl);

if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}

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

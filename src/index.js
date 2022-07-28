import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const initialState = {
  count: 0,
  testProp: 77,
};

const reducer = (state = initialState, action) => {
  return { ...state };
};

const store = legacy_createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

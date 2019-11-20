import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

// Import the reducer and create a store
import { reducer } from "./TodoListRedux";
const store = createStore(reducer);

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(AppWithStore, document.querySelector("#root"));

import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";

import rootReducer from "./reducers/";

const store = createStore(rootReducer);

// console.log("state: ", store.getState());

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import giphyAPI from "./APIs/giphyAPI";

giphyAPI("dog").then((res) => {
  console.log(res.data);
});

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { smurfReducer } from "./reducers";
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import "./index.css";


const store = createStore(smurfReducer, applyMiddleware());



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

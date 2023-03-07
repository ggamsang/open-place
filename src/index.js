import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Desktop from "./desktop/App.js";
import Mobile from "./mobile/App.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import registerServiceWorker from "./registerServiceWorker";
import ismobile from "is-mobile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  // <React.StrictMode>
  // <Provider store={store}>{!ismobile() ? <Desktop /> : <Mobile />}</Provider>
  <Provider store={store}>{ <Desktop />}</Provider>
  // </React.StrictMode>
);

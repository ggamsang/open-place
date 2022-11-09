// import common
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import desktop
import App from "./App";
import store from "./store";

// import mobile
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AppMobile from "./AppMobile";
import reducers from "./mobile/reducers";
// import './index.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeM = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  window.innerWidth > 500 ? (
    // useEffect 두번수행되어 코멘트함.
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  ) : (
    <Provider store={storeM}>
      <AppMobile />
    </Provider>
  ),
  // </React.StrictMode>
  document.getElementById("root")
);

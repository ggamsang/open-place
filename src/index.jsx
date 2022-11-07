import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  // useEffect 두번수행되어 코멘트함.
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);

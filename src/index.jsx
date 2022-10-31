import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import AppMobile from "./AppMobile";
// const WIDTH = 500;

ReactDOM.render(
  <React.StrictMode>
    <App />

    {/* 
    <div className="device-info">
      {window.innerWidth > WIDTH ? "🖥️데스크탑" : "📱모바일"}
    </div>
    {window.innerWidth > WIDTH ? <App /> : <AppMobile />}
  */}
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={MainPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

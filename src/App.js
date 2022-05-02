// REACT //
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "pages/MainPage";

class App extends Component {
  render() {

    return(
        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={MainPage} />
          </Routes>
        </BrowserRouter>
    )
  }
}
export default App;

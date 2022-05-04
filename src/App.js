// REACT //
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "pages/MainPage";
import SignInPage from "pages/RegistrationPage/SignInPage";
import SignUpPage from "pages/RegistrationPage/SignUpPage";
import FindPWPage from "pages/RegistrationPage/FindPWPage";
import MyDetailPage from "pages/UserPage/MyDetailPage";
import IntroPage from "pages/IntroPage";
import ClientTemplate from "clientTemplate/ClientTemplate";
class App extends Component {
  render() {
    return(
        <BrowserRouter>
          <ClientTemplate>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/intro" element={<IntroPage/>} />
              <Route path="/login" element={<SignInPage/>} />
              <Route path="/join" element={<SignUpPage/>} />
              <Route path="/findPW" element={<FindPWPage/>} />
              <Route path="/myDetail" element={<MyDetailPage/>} />
            </Routes>
          </ClientTemplate>
        </BrowserRouter>
    )
  }
}
export default App;

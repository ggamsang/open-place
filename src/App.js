// REACT //
import React, { Component } from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage";
import CommunityPage from "pages/CommunityPage";
import SignInPage from "pages/RegistrationPage/SignInPage";
import SignUpPage from "pages/RegistrationPage/SignUpPage";
import FindPWPage from "pages/RegistrationPage/FindPWPage";
import MyDetailPage from "pages/UserPage/MyDetailPage";
import IntroPage from "pages/IntroPage";
import TermsOfServicePage from "pages/TermsOfServicePage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import SearchPage from "pages/SearchPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/join" element={<SignUpPage />} />
          <Route path="/findPW" element={<FindPWPage />} />
          <Route path="/myDetail" element={<MyDetailPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/search/:keyword?" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;

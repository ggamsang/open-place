import React from "react";
import { BrowserRouter, Route, Switch as Routes } from "react-router-dom";
import MainPage from "mobile/pages/MainPage";
import PlayExpListPage from "mobile/pages/ExpPage/PlayExpListPage";
import LearnExpListPage from "mobile/pages/ExpPage/LearnExpListPage";
import MakeExpListPage from "mobile/pages/ExpPage/MakeExpListPage";
import NotFoundPage from "mobile/pages/NotFoundPage";
import TermsOfServicePage from "mobile/pages/TermsOfServicePage";
import SignInPage from "mobile/pages/RegistrationPage/SignInPage";
// import SignUpPage from "mobile/pages/RegistrationPage/SignUpPage";

class AppMobile extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={MainPage} />
          <Route path="/play" component={PlayExpListPage} />
          <Route path="/learn" component={LearnExpListPage} />
          <Route path="/make" component={MakeExpListPage} />
          <Route path="/k" element={SignInPage} />

          {/* - */}
          {/* - */}
          {/* <Route path="/signup" element={SignUpPage} /> */}
          <Route path="/terms" element={TermsOfServicePage} />
          <Route path="*" component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default AppMobile;

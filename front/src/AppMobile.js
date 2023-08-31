import React from "react";
import { BrowserRouter, Route, Switch as Routes } from "react-router-dom";
import MainPage from "mobile/pages/MainPage";
import PlayExpListPage from "mobile/pages/ExpPage/PlayExpListPage";
import LearnExpListPage from "mobile/pages/ExpPage/LearnExpListPage";
import MakeExpListPage from "mobile/pages/ExpPage/MakeExpListPage";
import NotFoundPage from "mobile/pages/NotFoundPage";
import TermsOfServicePage from "mobile/pages/TermsOfServicePage";
import PrivacyPolicyPage from "mobile/pages/PrivacyPolicyPage";
import SignInPage from "mobile/pages/RegistrationPage/SignInPage";
import SignUpPage from "mobile/pages/RegistrationPage/SignUpPage";
import ExpDetailPage from "mobile/pages/ExpPage/ExpDetailPage/ExpDetailPage";

class AppMobile extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={MainPage} />
          <Route path="/play" component={PlayExpListPage} />
          <Route path="/learn" component={LearnExpListPage} />
          <Route path="/make" component={MakeExpListPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/exp/:id" component={ExpDetailPage} />

          {/* - */}
          <Route path="/terms" component={TermsOfServicePage} />
          <Route path="/privacy" component={PrivacyPolicyPage} />
          <Route path="*" component={NotFoundPage} />
          {/* - */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppMobile;

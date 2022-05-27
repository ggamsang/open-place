// REACT //
import React, { Component } from "react";
// import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage"; 
import SignInPage from "pages/RegistrationPage/SignInPage";
import SignUpPage from "pages/RegistrationPage/SignUpPage";
import FindPWPage from "pages/RegistrationPage/FindPWPage";
import MyDetailPage from "pages/UserPage/MyDetailPage";
import MyDetailChild from "components_mobile/User/MyDetailChild";
import MyDetailContainer from "containers/UserContainer/MyDetailContainer";
import IntroPage from "pages/IntroPage";
import TermsOfServicePage from "pages/TermsOfServicePage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import CreateSharerPage from "pages/SharerPage/CreateSharerPage";
import ModifySharerPage from "pages/SharerPage/ModifySharerPage";
import SharerDetailPage from "pages/SharerPage/SharerDetailPage";
import CommunityPage from "pages/CommunityPage";
import SearchPage from "pages/SearchPage";
import ExpListPage from "pages/ExpListPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/join" element={<SignUpPage />} />
          <Route path="/findPW" element={<FindPWPage />} />
          <Route path="/list" element={<ExpListPage />} />
          <Route path="/search" element={<SearchPage />} >
            <Route path=":keyword" element={<SearchPage />} />
          </Route>
          <Route path="/myDetail" element={<MyDetailPage />}>
            <Route path=":id" element={<MyDetailChild/>}/>
          </Route>
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/createSharer" element={<CreateSharerPage/>}/>
          <Route path="/modifySharer" element={<ModifySharerPage/>}/>
          <Route path="/SharerDetail" element={<SharerDetailPage/>}>
            <Route path=":id" element={<SharerDetailPage/>}/>
          </Route>
          <Route path="/community" element={<CommunityPage/>}/>


        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;

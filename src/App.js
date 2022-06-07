// REACT //
import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import MainPage from "pages/MainPage";
import CommunityPage, { CommunityWritePage, CommunityDetailPage } from "pages/CommunityPage";
import SignInPage from "pages/RegistrationPage/SignInPage";
import SignUpPage from "pages/RegistrationPage/SignUpPage";
import FindPWPage from "pages/RegistrationPage/FindPWPage";
import MyDetailPage from "pages/UserPage/MyDetailPage";
import MyDetailChild from "components_mobile/User/MyDetailChild";
import IntroPage from "pages/IntroPage";
import TermsOfServicePage from "pages/TermsOfServicePage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import CreateSharerPage from "pages/SharerPage/CreateSharerPage";
import ModifySharerPage from "pages/SharerPage/ModifySharerPage";
import SharerDetailPage from "pages/SharerPage/SharerDetailPage";
import SearchPage from "pages/SearchPage";
import MessageListPage, { MessageDetailPage } from "pages/MessagePage";
import ExpListPage, { ExpDetailPage } from "pages/ExpPage";
import styled from 'styled-components';


import { WIDTH } from "constant";
// import bg from "resources/sample-image-01.png";
const Wrapper = styled.main`
  overflow: hidden;
  position: relative;
  .bg {
    opacity: 0.1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: ${window.innerHeight}px;
  }
  .content {
    position: relative;
    width: ${WIDTH}px;
    height: 100%;
    margin: auto;
    background-color: white;
  }
`;

function App() {

  return (
    <Wrapper>
      {/* <img src={bg} alt="bg" className="bg" /> */}

      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="community/write" element={<CommunityWritePage />} />
            <Route path="community/:id" element={<CommunityDetailPage />} />
            <Route path="intro" element={<IntroPage />} />
            <Route path="login" element={<SignInPage />} />
            <Route path="join" element={<SignUpPage />} />
            <Route path="findPW" element={<FindPWPage />} />
            <Route path="/list" element={<ExpListPage />} />
            <Route path="myDetail" element={<MyDetailPage />}>
              <Route path=":id" element={<MyDetailChild />} />
            </Route>
            <Route path="terms" element={<TermsOfServicePage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="search" element={<SearchPage />} >
              <Route path=":keyword" element={<SearchPage />} />
            </Route>
            <Route path="createSharer" element={<CreateSharerPage />} />
            <Route path="modifySharer" element={<ModifySharerPage />} />
            <Route path="/SharerDetail" element={<SharerDetailPage />}>
              <Route path=":id" element={<SharerDetailPage />} />
            </Route>
            <Route path="exp/:id" element={<ExpDetailPage />} />
            <Route path="message" element={<MessageListPage />} />
            <Route path="message/:id" element={<MessageDetailPage />} />

            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </BrowserRouter>
      </div>

    </Wrapper>

  )
}

export default App;

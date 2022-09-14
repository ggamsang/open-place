// REACT //
import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import MainPage from "pages/MainPage";
import CommunityPage, { CommunityWritePage, CommunityDetailPage, CommunityModifyPage }
  from "pages/CommunityPage";
import { NoticeDetailPage } from "pages/NoticePage";
import SignInPage from "pages/RegistrationPage/SignInPage";
import SignUpPage from "pages/RegistrationPage/SignUpPage";
import FindPWPage from "pages/RegistrationPage/FindPWPage";
import MyDetailPage from "pages/UserPage/MyDetailPage/MyDetailPage";
import MyDetailChild from "components/User/MyDetailChild";

import IntroPage from "pages/IntroPage";
import TermsOfServicePage from "pages/TermsOfServicePage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage";
import CreateSharerPage from "pages/SharerPage/CreateSharerPage";
import ModifySharerPage from "pages/SharerPage/ModifySharerPage";
import SharerDetailPage from "pages/SharerPage/SharerDetailPage";
import ModifyUserPage from "pages/UserPage/ModifyUserPage/ModifyUserPage";
import SearchPage from "pages/SearchPage/SearchPage";

import MessageListPage from "pages/MessagePage";
import MessageDetailPage from "pages/MessagePage/Detail";
import ExpDetailPage from "pages/ExpPage/ExpDetailPage/ExpDetailPage";
import LiveExpDetailPage from "pages/ExpPage/LiveExpDetailPage/LiveExpDetailPage";

import styled from 'styled-components';

import MakeExpListPage from "pages/ExpPage/MakeExpListPage ";
import PlayExpListPage from "pages/ExpPage/PlayExpListPage";
import LearnExpListPage from "pages/ExpPage/LearnExpListPage";

import CreateExpPage from "pages/ExpPage/CreateExpPage/CreateExpPage";
import ModifyExpPage from "pages/ExpPage/ModifyExpPage/ModifyExpPage";

import { WIDTH } from "constant";
// import bg from "resources/sample-image-01.png";

import MyPaidExpDetailPage from "pages/MyPaidExpDetailPage";
// import MyPointChargePage from "pages/MyPointChargePage";
import BuyPage from "pages/BuyPage";

const Wrapper = styled.main`
  // overflow: hidden;
  position: relative;
  height: auto;

  .bg {
    opacity: 0.1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: ${window.innerHeight}px;
  }
  .appcontent {
    position: relative;
    width: 100%; //${WIDTH}px;
    // height: 100%;
    margin: auto;
    background-color: white;
    @media only screen and (min-width: 320px) and (max-width:500px){
      width:100%;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      {/* <img src={bg} alt="bg" className="bg" /> */}
      <div className="appcontent">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="community/:id" element={<CommunityDetailPage />} />
            <Route path="community/write" element={<CommunityWritePage />} />
            <Route path="community/modify/:id" element={<CommunityModifyPage />} />

            <Route path="notice/:id" element={<NoticeDetailPage />} />
            <Route path="intro" element={<IntroPage />} />
            <Route path="login" element={<SignInPage />} />
            <Route path="join" element={<SignUpPage />} />
            <Route path="findPW" element={<FindPWPage />} />

            <Route path="play/:sort/:keyword" element={<PlayExpListPage />} />
            <Route path="make/:sort/:keyword" element={<MakeExpListPage />} />
            <Route path="learn/:sort/:keyword" element={<LearnExpListPage />} />

            <Route path="myDetail" element={<MyDetailPage />}>
              <Route path=":id" element={<MyDetailChild />} />
            </Route>
            <Route path="paidExp/:id" element={<MyPaidExpDetailPage />} />
            <Route path="buy/:id" element={<BuyPage />} />
            <Route path="terms" element={<TermsOfServicePage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="search/:category/:sort/:keyword" element={<SearchPage />} />
            <Route path="createSharer" element={<CreateSharerPage />} />
            <Route path="modifySharer" element={<ModifySharerPage />} />
            <Route path="SharerDetail" element={<SharerDetailPage />}>
              <Route path=":id" element={<SharerDetailPage />} />
            </Route>
            <Route path="modifyUser" element={<ModifyUserPage />} />
            <Route path="exp/:id" element={<ExpDetailPage />} />
            <Route path="liveExp/:id" element={<LiveExpDetailPage />} />
            <Route path="createExp" element={<CreateExpPage />} />
            <Route path="modifyExp" >
              <Route path=":id" element={<ModifyExpPage />} />
            </Route>
            <Route path="message" element={<MessageListPage />} />
            <Route path="message/:id" element={<MessageDetailPage />} />
            {/* <Route path="charging" element={<MyPointChargePage />} /> */}
            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Wrapper>)
}

export default App;
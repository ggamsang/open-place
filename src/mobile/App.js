// REACT //
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "mobile/pages/MainPage";
import CommunityPage, {
  CommunityWritePage,
  CommunityDetailPage,
  CommunityModifyPage,
} from "mobile/pages/CommunityPage";
import { NoticeDetailPage } from "mobile/pages/NoticePage";
import SignInPage from "mobile/pages/RegistrationPage/SignInPage";
import SignUpPage from "mobile/pages/RegistrationPage/SignUpPage";
import FindPWPage from "mobile/pages/RegistrationPage/FindPWPage";
import MyDetailPage from "mobile/pages/UserPage/MyDetailPage/MyDetailPage";
import MyDetailChild from "mobile/components_mobile/User/MyDetailChild";

import IntroPage from "mobile/pages/IntroPage";
import TermsOfServicePage from "mobile/pages/TermsOfServicePage";
import PrivacyPolicyPage from "mobile/pages/PrivacyPolicyPage";
import CreateSharerPage from "mobile/pages/SharerPage/CreateSharerPage";
import ModifySharerPage from "mobile/pages/SharerPage/ModifySharerPage";
import SharerDetailPage from "mobile/pages/SharerPage/SharerDetailPage";
import ModifyUserPage from "mobile/pages/UserPage/ModifyUserPage/ModifyUserPage";
import SearchPage from "mobile/pages/SearchPage/SearchPage";

import MessageListPage from "mobile/pages/MessagePage";
import MessageDetailPage from "mobile/pages/MessagePage/Detail";
import ExpDetailPage from "mobile/pages/ExpPage/ExpDetailPage/ExpDetailPage";
import styled from "styled-components";

import MakeExpListPage from "mobile/pages/ExpPage/MakeExpListPage ";
import PlayExpListPage from "mobile/pages/ExpPage/PlayExpListPage";
import LearnExpListPage from "mobile/pages/ExpPage/LearnExpListPage";

import CreateExpPage from "mobile/pages/ExpPage/CreateExpPage/CreateExpPage";
import ModifyExpPage from "mobile/pages/ExpPage/ModifyExpPage/ModifyExpPage";

import { WIDTH } from "constant";
// import bg from "resources/sample-image-01.png";

import MyPaidExpDetailPage from "mobile/pages/MyPaidExpDetailPage";
// import MyPointChargePage from "pages/MyPointChargePage";
import BuyPage from "mobile/pages/BuyPage";
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
    width: ${WIDTH}px;
    // height: 100%;
    margin: auto;
    background-color: white;
    @media only screen and (min-width: 320px) and (max-width: 500px) {
      width: 100%;
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
            <Route
              path="community/modify/:id"
              element={<CommunityModifyPage />}
            />

            <Route path="notice/:id" element={<NoticeDetailPage />} />
            <Route path="intro" element={<IntroPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
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
            <Route
              path="search/:category/:sort/:keyword"
              element={<SearchPage />}
            />
            <Route path="createSharer" element={<CreateSharerPage />} />
            <Route path="modifySharer" element={<ModifySharerPage />} />
            <Route path="SharerDetail" element={<SharerDetailPage />}>
              <Route path=":id" element={<SharerDetailPage />} />
            </Route>
            <Route path="modifyUser" element={<ModifyUserPage />} />
            <Route path="exp/:id" element={<ExpDetailPage />} />
            <Route path="createExp" element={<CreateExpPage />} />
            <Route path="modifyExp">
              <Route path=":id" element={<ModifyExpPage />} />
            </Route>
            <Route path="message" element={<MessageListPage />} />
            <Route path="message/:id" element={<MessageDetailPage />} />
            {/* <Route path="charging" element={<MyPointChargePage />} /> */}
            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Wrapper>
  );
}

export default App;

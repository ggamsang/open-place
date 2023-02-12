// REACT //
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "desktop/pages/MainPage";
import CommunityPage, {
  CommunityWritePage,
  CommunityDetailPage,
  CommunityModifyPage,
} from "desktop/pages/CommunityPage";
import { NoticeDetailPage } from "desktop/pages/NoticePage";
import SignInPage from "desktop/pages/RegistrationPage/SignInPage";
import SignUpPage from "desktop/pages/RegistrationPage/SignUpPage";
import FindPWPage from "desktop/pages/RegistrationPage/FindPWPage";
import MyDetailPage from "desktop/pages/UserPage/MyDetailPage/MyDetailPage";
import MyDetailChild from "./components/User/MyDetailChild";
import IntroPage from "desktop/pages/IntroPage";
import TermsOfServicePage from "desktop/pages/TermsOfServicePage";
import PrivacyPolicyPage from "desktop/pages/PrivacyPolicyPage";
import CreateSharerPage from "desktop/pages/SharerPage/CreateSharerPage";
import ModifySharerPage from "desktop/pages/SharerPage/ModifySharerPage";
import SharerDetailPage from "desktop/pages/SharerPage/SharerDetailPage";
import ModifyUserPage from "desktop/pages/UserPage/ModifyUserPage/ModifyUserPage";
import SearchPage from "desktop/pages/SearchPage/SearchPage";
import MessageListPage from "desktop/pages/MessagePage";
import MessageDetailPage from "desktop/pages/MessagePage/Detail";
import ExpDetailPage from "desktop/pages/ExpPage/ExpDetailPage/ExpDetailPage";
import styled from "styled-components";
import MakeExpListPage from "desktop/pages/ExpPage/MakeExpListPage ";
import PlayExpListPage from "desktop/pages/ExpPage/PlayExpListPage";
import LearnExpListPage from "desktop/pages/ExpPage/LearnExpListPage";
import CreateExpPage from "desktop/pages/ExpPage/CreateExpPage/CreateExpPage";
import ModifyExpPage from "desktop/pages/ExpPage/ModifyExpPage/ModifyExpPage";
import MyPaidExpDetailPage from "desktop/pages/MyPaidExpDetailPage";
import BuyPage from "desktop/pages/BuyPage";

const Wrapper = styled.main`
  border: 1px solid gray;
  margin: auto;
  max-width: 1920px;
  width: max-content;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="play" element={<PlayExpListPage />} />
          <Route path="learn" element={<LearnExpListPage />} />
          <Route path="make" element={<MakeExpListPage />} />
          <Route path="exp/:id" element={<ExpDetailPage />} />
          <Route path="buy/:id" element={<BuyPage />} />
          <Route path="createExp" element={<CreateExpPage />} />
          <Route path="myPage" element={<MyDetailPage />}>
            <Route path=":id" element={<MyDetailChild />} />
          </Route>

          <Route path="community" element={<CommunityPage />} />
          <Route path="community/:id" element={<CommunityDetailPage />} />
          <Route path="community/write" element={<CommunityWritePage />} />
          <Route
            path="community/modify/:id"
            element={<CommunityModifyPage />}
          />

          <Route path="notice/:id" element={<NoticeDetailPage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="login" element={<SignInPage />} />
          <Route path="join" element={<SignUpPage />} />
          <Route path="findPW" element={<FindPWPage />} />

          <Route path="paidExp/:id" element={<MyPaidExpDetailPage />} />
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
          <Route path="modifyExp">
            <Route path=":id" element={<ModifyExpPage />} />
          </Route>
          <Route path="message" element={<MessageListPage />} />
          <Route path="message/:id" element={<MessageDetailPage />} />
          {/* <Route path="charging" element={<MyPointChargePage />} /> */}
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;

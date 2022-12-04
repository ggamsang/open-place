import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./mobile/pages/MainPage";
import CommunityPage from "./mobile/pages/Community/List";
import CommunityDetailPage from "./mobile/pages/Community/Detail";
import CommunityWritePage from "./mobile/pages/Community/Write";
import CommunityModifyPage from "./mobile/pages/Community/Modify";
import NoticeDetailPage from "./mobile/pages/Notice/Detail";
import IntroPage from "./mobile/pages/Intro";
import SignInPage from "./mobile/pages/Sign/SignIn";
import SignUpPage from "./mobile/pages/Sign/SignUp";
import FindPWPage from "./mobile/pages/Sign/FindPW";
import MakeExpListPage from "./mobile/pages/Exp/MakeList";
import PlayExpListPage from "./mobile/pages/Exp/PlayList";
import LearnExpListPage from "./mobile/pages/Exp/LearnList";
import MyDetailPage from "./mobile/pages/User/MyDetail";
import MyDetailChild from "./mobile/components/User/MyDetailChild";
import MyPaidExpDetailPage from "./mobile/pages/User/MyPaidExpDetail";
import BuyPage from "./mobile/pages/Exp/BuyExp";
import TermsOfServicePage from "./mobile/pages/Terms";
import PrivacyPolicyPage from "./mobile/pages/Policy";
import SearchPage from "./mobile/pages/Search";
import CreateSharerPage from "./mobile/pages/User/SharerRegister";
import ModifySharerPage from "./mobile/pages/User/SharerModify";
import SharerDetailPage from "./mobile/pages/User/SharerDetail";
import ModifyUserPage from "./mobile/pages/User/Modify";
import ExpDetailPage from "./mobile/pages/Exp/Detail";
import LiveExpDetailPage from "./mobile/pages/Exp/Live";
import CreateExpPage from "./mobile/pages/Exp/Create";
import ModifyExpPage from "./mobile/pages/Exp/Modify";
import MessageListPage from "./mobile/pages/Message/List";
import MessageDetailPage from "./mobile/pages/Message/Detail";

function AppMobile() {
  return (
    <div>
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
          <Route path="login" element={<SignInPage />} />
          <Route path="join" element={<SignUpPage />} />
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
          <Route path="liveExp/:id" element={<LiveExpDetailPage />} />

          <Route path="createExp" element={<CreateExpPage />} />
          <Route path="modifyExp">
            <Route path=":id" element={<ModifyExpPage />} />
          </Route>
          <Route path="message" element={<MessageListPage />} />
          <Route path="message/:id" element={<MessageDetailPage />} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppMobile;

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import {
  PlayListPage, MakeListPage, LearnListPage
} from "./pages/ListPage";
import {
  CommunityPage, CommunityDetailPage, CommunityWritePage, CommunityModifyPage
} from "./pages/CommunityPage";
import {
  NoticePage, NoticeDetailPage
} from "./pages/NoticePage";
import {
  ExpCreatePage, ExpDetailPage, ExpModifyPage
} from "./pages/ExpPage";
import {
  MyPage, MyPaidExpDetail, MyBuyPage
} from "./pages/MyDetail";
import {
  MessageDetailPage, MessagePage
} from "./pages/Message";
import NotFoundPage from "./pages/NotFoundPage";
import {
  UseTermPage, PrivacyPage, AboutPage
} from "./pages/About";
import {
  VerifyWithPage, SignInPage, SignUpPage
} from "./pages/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN */}
        <Route path="/" element={<MainPage />} />

        {/* EXPERIENCE */}
        <Route path="/play" element={<PlayListPage />} >
          <Route path=":sort" element={<PlayListPage />} />
          <Route path=":sort/:keyword" element={<PlayListPage />} />
        </Route>
        <Route path="/make" element={<MakeListPage />} />
        <Route path="/learn/:sort?/:keyword?" element={<LearnListPage />} />
        <Route path="/exp/:id" element={<ExpDetailPage />} />
        <Route path="/exp/create" element={<ExpCreatePage />} />{/* auth needed */}
        <Route path="/exp/:id/modify" element={<ExpModifyPage />} />{/* auth needed */}

        {/* PERSONAL */}
        <Route path="/mydetail" element={<MyPage />} />
        <Route path="/paid/:id" element={<MyPaidExpDetail />} />
        <Route path="/buy/:id" element={<MyBuyPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="message/:id" element={<MessageDetailPage />} />

        {/*  */}
        <Route path="/commu" element={<CommunityPage />} />
        <Route path="/commu/:id" element={<CommunityDetailPage />} />
        <Route path="/commu/create" element={<CommunityWritePage />} />
        <Route path="/commu/:id/modify" element={<CommunityModifyPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/:id" element={<NoticeDetailPage />} />

        {/* NOT-SIGNED-IN-YET */}
        <Route path="/term" element={<UseTermPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/verifywith" element={<VerifyWithPage />} />

        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
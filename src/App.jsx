import React from "react";
import MainPage from "./pages/Main";
import CommunityPage from "./pages/Community/List";
import CommunityWritePage from "./pages/Community/Write";
import CommunityDetailPage from "./pages/Community/Detail";
import NoticePage from "./pages/Notice/List";
import ExpAddPage from "./pages/Exp/Add";
import ExpEditPage from "./pages/Exp/Edit";
import ExpDetailPage from "./pages/Exp/Detail";
import SearchPage from "./pages/Search";
import ListPage from "./pages/ListPage";
import MyPage from "./pages/MyPage";
import Message from "./pages/Message";
import About from "./pages/About";
import SignInPage from "./pages/Sign/SignIn";
import SignUpPage from "./pages/Sign/SignUp";
import NotFoundPage from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingPage from "./pages/Loading";

function App() {
  return (
    <div style={{ margin: "auto", maxWdith: "1920px", width: "max-content" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          <Route path="/loading" element={<LoadingPage />} />

          <Route path="/" element={<MainPage />} />

          {["play", "make", "learn"].map((path, index) => (
            <Route path={path} key={index}>
              <Route index element={<ListPage type={path} />} />
              <Route path=":id" element={<ListPage type={path} />} />
            </Route>
          ))}

          {/* 경험상세페이지 – 1, 경험등록/수정 페이지 */}
          <Route path="/exp/:id" element={<ExpDetailPage />} />
          <Route path="/exp/add" element={<ExpAddPage />} />
          <Route path="/exp/edit" element={<ExpEditPage />} />

          {/* 커뮤니티 페이지(자유게시판) */}
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetailPage />} />
          <Route path="/community/write" element={<CommunityWritePage />} />
          <Route path="/notice" element={<NoticePage />} />

          {/* 마이 페이지 */}
          <Route path="/mypage" element={<MyPage />} />

          {/* 사이트 소개 페이지 */}
          <Route path="/about" element={<About />} />

          {/* 메시지 페이지 */}
          <Route path="/message" element={<Message />} />

          {/* 검색 페이지 */}
          <Route path="/search">
            <Route index element={<SearchPage />} />
            <Route path=":keyword" element={<SearchPage />} />
          </Route>

          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

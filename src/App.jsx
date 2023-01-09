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
import * as styled from "./styles";
import RegisterExpertPage from "./pages/User/Expert/Register";
import ExpertDetailPage from "./pages/User/Expert/Detail";
import LiveExpDetailPage from "./pages/Exp/Live";
import BuyExpPage from "./pages/Exp/Buy";

function App() {
  return (
    <styled.Wrapper>
      <BrowserRouter>
        <Routes>
          {/* 메인페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 검색 페이지 */}
          <Route path="/search">
            <Route index element={<SearchPage />} />
            <Route path=":keyword" element={<SearchPage />} />
          </Route>

          {/* 경험리스트 페이지 */}
          {["play", "make", "learn"].map((path, index) => (
            <Route path={path} key={index}>
              <Route index element={<ListPage type={path} />} />
              <Route path=":id" element={<ListPage type={path} />} />
            </Route>
          ))}

          {/* 커뮤니티페이지(자유게시판) */}
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetailPage />} />
          <Route path="/community/write" element={<CommunityWritePage />} />
          <Route path="/notice" element={<NoticePage />} />
          {/* 사이트소개 페이지 */}
          <Route path="/intro" element={<About />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* 마이페이지 / 유저정보수정 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage" element={<ExpertDetailPage />} />
          {/* 공유자 등록/수정/상세 */}
          <Route path="/sharer/register" element={<RegisterExpertPage />} />
          <Route path="/sharer/modify" element={<RegisterExpertPage />} />
          <Route path="/sharer/detail" element={<ExpertDetailPage />} />

          {/* 메시지 페이지 */}
          <Route path="/message" element={<Message />}>
            <Route path=":id" element={<Message />} />
          </Route>

          {/* 경험상세 페이지 – 1, 경험등록/수정 페이지 , 라이브경험 */}
          <Route path="/exp/:id" element={<ExpDetailPage />} />
          <Route path="/exp/add" element={<ExpAddPage />} />
          <Route path="/exp/:id/edit" element={<ExpEditPage />} />
          <Route path="/live/:id" element={<LiveExpDetailPage />} />
          <Route path="/buy/:id" element={<BuyExpPage />} />
          {/* loading-page */}
          <Route path="/loading" element={<LoadingPage />} />
          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </styled.Wrapper>
  );
}

export default App;

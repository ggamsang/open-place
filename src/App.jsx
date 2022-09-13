import React from "react";
import MainPage from "./pages/Main";
import CommunityPage from "./pages/Community/List";
import LoadingPage from "./pages/Loading";
import CommunityWritePage from "./pages/Community/Write";
import CommunityDetailPage from "./pages/Community/Detail";
import NoticePage from "./pages/Notice/List";
import ExpAddPage from "./pages/Exp/Add";
import ExpEditPage from "./pages/Exp/Edit";
import ExpDetailPage from "./pages/Exp/Detail";
import SearchPage from "./pages/Search";
import ListPage from "./pages/ListPage";
import MainLogin from "./pages/MainLogin";
import MyPage from "./pages/MyPage";
import Message from "./pages/Message";
import LoadingPage from "./pages/Loading";
import CommunityWritePage from "./pages/Community/Write";
import CommunityDetailPage from "./pages/Community/Detail";
import NoticePage from "./pages/Notice/List";
import ExpAddPage from "./pages/Exp/Add";
import ExpEditPage from "./pages/Exp/Edit";
import ExpDetailPage from "./pages/Exp/Detail";
import SearchPage from "./pages/Search";
import ListPage from "./pages/ListPage";
import MainLogin from "./pages/MainLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*
  로긴-마이페이지,
  등록,
  목록조회,
  조회,
  구매,
  개설,
*/
import { Wrapper } from "./styles";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/loading" element={<LoadingPage />} />

          <Route path="/" element={<MainPage />} />

          <Route path="/mainlogin" element={<MainLogin />} />

          <Route path="/play">
            <Route index element={<ListPage />} />
            <Route path=":id" element={<ListPage />} />
          </Route>
          <Route path="/make">
            <Route index element={<ListPage />} />
            <Route path=":id" element={<ListPage />} />
          </Route>
          <Route path="/learn">
            <Route index element={<ListPage />} />
            <Route path=":id" element={<ListPage />} />
          </Route>

          {/* 커뮤니티 페이지(자유게시판) */}
          <Route path="/community" element={<CommunityPage />} />
          {/* 커뮤니티 페이지(공지사항) – 상세 */}
          <Route path="/community/:id" element={<CommunityDetailPage />} />
          {/* 커뮤니티 페이지(자유게시판) – 게시글 등록페이지 */}
          <Route path="/community/write" element={<CommunityWritePage />} />

          {/* 커뮤니티 페이지(공지사항) */}
          <Route path="/notice" element={<NoticePage />} />

          {/* 마이 페이지 */}
          <Route path="/mypage" element={<MyPage />} />

          {/* 메시지 페이지 */}
          <Route path="/message" element={<Message />} />

          {/* 경험상세페이지 – 1 */}
          <Route path="/exp/:id" element={<ExpDetailPage />} />

          {/* 경험등록/수정 페이지 */}
          <Route path="/exp/add" element={<ExpAddPage />} />
          <Route path="/exp/edit" element={<ExpEditPage />} />

          {/* 검색 페이지 */}
          <Route path="/search/:keyword" element={<SearchPage />} />
          
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

import React from 'react';
import MainPage from './pages/Main';
import CommunityPage from './pages/Community/List';

import LoadingPage from './pages/Loading';
import CommunityWritePage from './pages/Community/Write';
import CommunityDetailPage from './pages/Community/Detail';
import NoticePage from './pages/Notice/List';
import ExpAddPage from './pages/Exp/Add';
import ExpEditPage from './pages/Exp/Edit';
import ExpDetailPage from './pages/Exp/Detail';
import SearchPage from './pages/Search';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 로딩페이지 - 1 */}
        <Route path="/loading" element={<LoadingPage />} />

        {/* 메인페이지 - 로그인전 – 1 */}
        {/* 메인페이지 - 로그인후 – 1 */}
        {/* 메인페이지 - 리스트페이지 태그 목록 접힌 상태 – 1 */}
        {/* 메인페이지 - 리스트페이지 태그 목록 펼침 상태 – 1 */}
        <Route path="/" element={<MainPage />} />

        {/* 커뮤니티 페이지(자유게시판) */}
        <Route path="/community" element={<CommunityPage />} />
        
        {/* 커뮤니티 페이지(자유게시판) – 게시글 등록페이지 */}
        <Route path="/community/write" element={<CommunityWritePage />} />
        
        {/* 커뮤니티 페이지(공지사항) */}
        <Route path="/notice" element={<NoticePage />} />
                
        {/* 경험상세페이지 – 1 */}
        <Route path="/exp/:id" element={<ExpDetailPage />} />
        
        {/* 경험등록/수정 페이지 */}
        <Route path="/exp/add" element={<ExpAddPage />} />
        <Route path="/exp/edit" element={<ExpEditPage />} />
        
        {/* 커뮤니티 페이지(공지사항) – 상세 */}
        <Route path="/community/:id" element={<CommunityDetailPage />} />
        
        {/* 검색 페이지 */}
        <Route path="/search/:keyword" element={<SearchPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

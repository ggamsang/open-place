import React from 'react';
import * as styled from './styles';
import Header from '../../components/desktop/ListPage-Header';
import Footer from '../../components/desktop/Footer';
import Banner from '../../components/desktop/Banner';
import ShortcutList from '../../components/desktop/ListPage-TopList';
import TopList from '../../components/desktop/TopList';
import Navbar from '../../components/desktop/ListPage-Navbar';


const MainPage = () => {
  return (
    <styled.Main>
      <Header />
      <Navbar />
      <Banner />
      <styled.Shortcut>바로가기</styled.Shortcut>
      <ShortcutList />
      <styled.MainContainer>
        <TopList />
      </styled.MainContainer>
      <Footer />
    </styled.Main>
  );
};

export default MainPage;

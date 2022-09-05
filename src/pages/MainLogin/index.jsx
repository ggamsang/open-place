import React from 'react';
import * as styled from './styles';
import Header from '../../components/ListPage-Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import ShortcutList from '../../components/ListPage-TopList';
import TopList from '../../components/TopList';
import Navbar from '../../components/ListPage-Navbar';


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

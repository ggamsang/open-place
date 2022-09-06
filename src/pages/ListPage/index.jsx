import React from 'react';
import * as styled from './styles';
import Header from '../../components/ListPage-Header';
import Footer from '../../components/ListPage-Footer';
import TopList from '../../components/ListPage-TopList';
import Navbar from '../../components/ListPage-Navbar';
import Tagbar from '../../components/ListPage-TagBar';
import SendDm from '../../components/ListPage-DM';

const MainPage = () => {
  return (
    <styled.Main>
      <Header />
      <Navbar />
      <Tagbar />
      <styled.MainContainer>
        <TopList />
      </styled.MainContainer>
      <SendDm />
      <Footer />
    </styled.Main>
  );
};

export default MainPage;

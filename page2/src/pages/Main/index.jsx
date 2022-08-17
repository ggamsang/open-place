import React from 'react';
import * as styled from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopList from '../../components/TopList';
import Navbar from '../../components/Navbar';
import Tagbar from '../../components/TagBar';
import SendDm from '../../components/DM';

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

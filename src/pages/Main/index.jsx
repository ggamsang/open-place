import React from "react";
import { Main, MainContainer } from "./styles";
import Banner from "../../components/Banner";
import TopList from "../../components/TopList";
import ClientTemplate from "../../components/ClientTemplate";

function MainPage() {
  return (
    <ClientTemplate>
      <Main>
        <Banner />
        <MainContainer>
          <TopList />
        </MainContainer>
      </Main>
    </ClientTemplate>
  );
}

export default MainPage;

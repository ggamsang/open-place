import React from "react";
import * as styled from "./styles";
import ClientTemplate from "../../components/ClientTemplate";
import TopList from "../../components/ListPage-TopList";
import Tagbar from "../../components/ListPage-TagBar";

const ListPage = () => {
  return (
    <ClientTemplate>
      <styled.Main>
        <Tagbar />
        <styled.MainContainer>
          <TopList />
        </styled.MainContainer>
      </styled.Main>
    </ClientTemplate>
  );
};

export default ListPage;

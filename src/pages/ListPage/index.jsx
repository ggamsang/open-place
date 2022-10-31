import React from "react";
import * as styled from "./styles";
import PageLayout from "../../components/PageLayout";
import TopList from "../../components/ListPage-TopList";
import Tagbar from "../../components/ListPage-TagBar";

const ListPage = () => {
  return (
    <PageLayout>
      <styled.Main>
        <Tagbar />
        <styled.MainContainer>
          <TopList />
        </styled.MainContainer>
      </styled.Main>
    </PageLayout>
  );
};

export default ListPage;

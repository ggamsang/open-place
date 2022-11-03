import React from "react";
import * as styled from "./styles";
import PageLayout from "../../components/desktop/PageLayout";
import TopList from "../../components/desktop/ListPage-TopList";
import Tagbar from "../../components/desktop/ListPage-TagBar";

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

import React from "react";
import { Main, MainContainer, Shortcut } from "./styles";
import Banner from "../../components/desktop/Banner";
import TopList from "../../components/desktop/TopList";
import ShortcutList from "../../components/desktop/ExpList";
import PageLayout from "../../components/desktop/PageLayout";
import { useState } from "react";

function MainPage() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <PageLayout>
      <Main>
        <Banner />
        {loggedIn && (
          <>
            <Shortcut>바로가기</Shortcut>
            <ShortcutList />
          </>
        )}

        <MainContainer>
          <TopList />
        </MainContainer>
      </Main>
    </PageLayout>
  );
}

export default MainPage;

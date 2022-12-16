import React, { useState, useEffect } from "react";
import * as styled from "./styles";
import Banner from "../../components/Banner";
import TopList from "../../components/TopList";
import PageLayout from "../../components/PageLayout";
import ShortcutList from "../../components/ExpList";

function Main(props) {
  // const [loggedIn, setLoggedIn] = useState(props?.loggedIn);
  // useEffect(() => {
  //   setLoggedIn(props?.loggedIn);
  // }, [props]);
  return (
    <styled.Main>
      <Banner />
      {/* {loggedIn && (
        <>
          <styled.Shortcut>바로가기</styled.Shortcut>
          <ShortcutList />
        </>
      )} */}
      <styled.MainContainer>
        <TopList />
      </styled.MainContainer>
    </styled.Main>
  );
}
function MainPage() {
  return (
    <PageLayout>
      <Main />
    </PageLayout>
  );
}

export default MainPage;

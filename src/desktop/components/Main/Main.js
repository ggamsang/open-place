import React from "react";
import TopItemList from "desktop/components/TopItemList";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Banner from "../Banner";
import ShortCutListContainer from "desktop/containers/ShortCutListContainer";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  min-width: 1300px;
`;

const MainContainer = styled.div`
  // width: 1300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
`;

const Shortcut = styled.div`
  text-align: center;
  font: normal normal 900 44px/52px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 20px;
`;

function Main({ userInfo }) {
  console.log(process.env.REACT_APP_AWS_URL)
  return (
    <MainWrapper>
      <Fade>
        <Banner />
      </Fade>
      {userInfo && (
        <React.Fragment>
          <Shortcut>바로가기</Shortcut>
          <ShortCutListContainer />
        </React.Fragment>
      )}
      <MainContainer>
        <TopItemList />
      </MainContainer>
    </MainWrapper>
  );
}

export default Main;

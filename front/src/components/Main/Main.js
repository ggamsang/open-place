import React, { Component } from "react";
import styled from "styled-components";
import Banner from "components/Banner";
import Fade from "react-reveal/Fade";
import TopExpItemListContainer from "containers/ExpItem/TopExpItemListContainer";
// import TopGroupListContainer from "containers/Groups/TopGroupListContainer";
// import MainMyDesignListContainer from "containers/ExpItem/MainMyDesignContainer";
// import MainMyGroupListContainer from "containers/Groups/MainMyGroupContainer";
// import opendesign_style from "opendesign_style";

const MainContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Fade>
          <Banner />
        </Fade>

        <MainContainer>
          <TopExpItemListContainer />
        </MainContainer>
      </React.Fragment>
    );
  }
}

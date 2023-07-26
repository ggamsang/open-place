import React, { Component } from "react";
import styled from "styled-components";
import Banner from "components/Banner";
import TopExpItemListContainer from "containers/ExpItem/TopExpItemListContainer";
// import TopGroupListContainer from "containers/Groups/TopGroupListContainer";
// import MainMyDesignListContainer from "containers/ExpItem/MainMyDesignContainer";
// import MainMyGroupListContainer from "containers/Groups/MainMyGroupContainer";
// import opendesign_style from "opendesign_style";
import Fade from "react-reveal/Fade";

const MainContainer = styled.div`
  // width: 1300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
`;

export default class Main extends Component {
  render() {
    // console.log(this.props);
    // const { userInfo } = this.props;
    return (
      <React.Fragment>
        <Fade>
          <Banner />
        </Fade>
        {/* {userInfo && <>바로가기</>} */}
        <MainContainer>
          <TopExpItemListContainer />
        </MainContainer>
      </React.Fragment>
    );
  }
}

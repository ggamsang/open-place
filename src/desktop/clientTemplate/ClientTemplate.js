import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "desktop/components/Menu/Header";
import Navbar from "desktop/components/Navbar";

const Wrapper = styled.div`
  width: ${1920}px;
  // min-height: 100%;
  // height: 100%;
  margin: auto;
  position: relative;
  border: 1px solid #eee;
  background-color: white;
`;
class ClientTemplate extends Component {
  render() {
    const { userInfo, isLoggedIn } = this.props;
    return (
      <Wrapper>
        <Header
          /*keyword={keyword}*/
          loggedIn={isLoggedIn}
          userInfo={userInfo}
        />
        <Navbar />
        {this.props.children &&
          React.cloneElement(this.props.children, {
            loggedIn: isLoggedIn,
            userInfo: userInfo,
          })}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ClientTemplate);

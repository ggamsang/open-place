import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "desktop/components/Menu/Header";
import Navbar from "desktop/components/Navbar";
import Footer from "desktop/components/Footer";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
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

        <Footer />
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

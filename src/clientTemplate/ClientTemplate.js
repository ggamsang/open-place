import React, { Component } from 'react'
import styled/*, { keyframes }*/ from "styled-components";
// import Footer from "components_mobile/Footer"
import BottomMenu from "components_mobile/Menu/Bottom";

const Wrapper = styled.div` `;

// dev
// let isLoggedIn = false;
class ClientTemplate extends Component {
  render() {
    return (<Wrapper>

      {this.props.children}


      {/* <Footer /> */}

      <BottomMenu />
    </Wrapper>);
  }
}

export default ClientTemplate;

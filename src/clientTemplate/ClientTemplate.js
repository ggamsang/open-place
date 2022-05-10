import React, { Component } from 'react'
import styled/*, { keyframes }*/ from "styled-components";
// import Footer from "components_mobile/Footer"
import BottomMenu from "components_mobile/Menu/Bottom";

const Client = styled.div`
  position:absolute;
  top: 0px;
  bottom: 0px;
  width:100%;
  overflow-y: overlay;
  overflow-x: overlay;
`;
const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
`;


class ClientTemplate extends Component {
  render() {
    return (<Wrapper>

      {this.props.children}

      {/* <BottomMenu /> */}

      {/* <Footer /> */}

    </Wrapper>);
  }
}

export default ClientTemplate;

import React, { Component } from 'react'
import styled/*, { keyframes }*/ from "styled-components";
import Footer from "components_mobile/Footer"
import BottomMenu from "components_mobile/Menu/Bottom";

const Wrapper = styled.div`
  z-index: 1;
  .nav {
    z-index: 10;
    position: fixed;
    bottom: 23px;
    &.up {
      position: relative;
      bottom: 100px;
    }
    width: 100%;
  }
  .main { }
  .bottom {
    .blanker {
      height: 117px;
    }
  }
  .damm {
    position: relative;
    z-index: 10;
    height: 80px;
  }
`;

class ClientTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { up: false }
  }
  componentDidMount() {
    window.addEventListener('scroll', e => this.handleScroll(e));
  }

  handleScroll = _ => {
    const nav = document.getElementById('main');
    if (nav && nav.getClientRects() && nav.getClientRects()[0]) {
      const rect = nav.getBoundingClientRect();
      if (!rect) {
        return;
      }
      console.log(rect.height + rect.y);
      if (rect.height + rect.y < 600) {
        this.setState({ up: true });
      } else {
        this.setState({ up: false });
      }
    }
  }

  render() {

    return (
      <Wrapper id="client-template">

        <div id="main" className='main'>
          {this.props.children}
        </div>

        <div id="nav" className={this.state.up ? 'nav up' : 'nav'}>
          <BottomMenu />
        </div>

        <div className='bottom'>
          <Footer />
          {/* <div className='blanker'>&nbsp;</div> */}
        </div>

      </Wrapper>);
  }
}

export default ClientTemplate;
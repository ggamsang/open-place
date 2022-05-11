import React, { Component } from 'react'
import styled/*, { keyframes }*/ from "styled-components";
import Footer from "components_mobile/Footer"
import BottomMenu from "components_mobile/Menu/Bottom";
import AlarmContainer from "containers/AlarmContainer"

const Wrapper = styled.div`
  z-index: 1;
  .nav {
    z-index: 999;
    position: fixed;
    bottom: 23px;
    &.up {
      position: relative;
      bottom: 100px;
    }
    width: 100%;
  }
  .main { }
  .disabled {
    pointer-events: none;
  }
  .bottom {
    .blanker {
      height: 117px;
    }
  }
  .dimmer {
    pointer-events: none;
    position: fixed;
    top: 0;
    background: linear-gradient(180deg, #707070, #383838);
    width: 100%;
    height: 100%;
    z-index: 99;
    opacity: 50%;
  }
`;

class ClientTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { up: false, }
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

    return (<>

      {/* alarm */}
      <AlarmContainer />

      {/*  */}
      <Wrapper id="client-template">

        <div id="main" className='main'>
          {this.props.children}
        </div>

        <div id="nav" className={this.state.up ? 'nav up' : 'nav'}>
          <BottomMenu />
        </div>

        <div className='bottom'>
          <Footer />
        </div>

        <div id='dimmer'> &nbsp; </div>

      </Wrapper>
    </>);
  }
}

export default ClientTemplate;
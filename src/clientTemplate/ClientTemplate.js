import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import Footer from "components_mobile/Footer"
import BottomMenu from "components_mobile/Menu/Bottom";
// import { debounce } from 'lodash';

const Wrapper = styled.div`
  z-index: 1;
  position: relative;

  .nav {
    z-index: 999;
    position: fixed;
    bottom: 23px;
    &.stick {
      // margin-top: 230px;
      position: relative;
    }
  }
  .main { 
    min-height: 100vh;
    margin-bottom: 25px;
  }
  .disabled {
    pointer-events: none;
  }
  .bottom {
    .blanker {
      height: 50px;
    }
  }
  .dimmer {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #707070, #383838);
    width: 100%;
    height: 100vh;
    z-index: 1;
    opacity: 50%;
  }
  @media only screen and (min-width: 320px) and (max-width:500px){
   .nav{
     width:${window.innerWidth}px;
   }
  }
`;

class ClientTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stick: false,
      prev_y: 0,
    };
    // this.scroll = debounce(e => {
    //   // get main height
    //   const main = document.getElementById('main');
    //   const rectMain = main.getBoundingClientRect();
    //   if (!rectMain) {
    //     return;
    //   }
    //   // get bottom menu position
    //   const nav = document.getElementById('nav');
    //   const rectNav = nav.getBoundingClientRect();
    //   if (!rectNav) {
    //     return;
    //   }
    //   // detect direction and store prev position
    //   const { prev_y } = this.state;
    //   let dir = "";
    //   if (rectMain.y - prev_y > 0) {
    //     dir = "UP";
    //   } else {
    //     dir = "DOWN";
    //   }
    //   this.setState({ prev_y: rectMain.y });
    //   console.log(new Date().getTime(), 0);

    //   const { stick, } = this.state;
    //   if (stick === false) {
    //     if (rectMain.height - (rectNav.y - rectMain.y) < 50) {
    //       console.log(new Date().getTime(), 1);
    //       this.setState({ stick: true });
    //     }
    //   } else {
    //     if (rectMain.height - (rectNav.y - rectMain.y) < 50) {
    //       console.log(new Date().getTime(), 3);
    //       setTimeout(this.setState({ stick: false }), 500);
    //     }
    //   }
    // }, 1000);
  }
  componentDidMount() {
    // window.addEventListener('scroll', e => this.handleScroll(e), true);
    window.addEventListener('scroll', this.scroll, true);
  }

  handleScroll = async (_) => {
    // get main height
    const main = document.getElementById('main');
    const rectMain = main.getBoundingClientRect();
    if (!rectMain) {
      return;
    }
    // get bottom menu position
    const nav = document.getElementById('nav');
    const rectNav = nav.getBoundingClientRect();
    if (!rectNav) {
      return;
    }
    // detect direction and store prev position
    // const { prev_y } = this.state;
    // let dir = "";
    // if (rectMain.y - prev_y > 0) {
    //   dir = "UP";
    // } else {
    //   dir = "DOWN";
    // }
    this.setState({ prev_y: rectMain.y });
    console.log(new Date().getTime(), 0);

    const { stick, } = this.state;
    if (stick === false) {
      if (rectMain.height - (rectNav.y - rectMain.y) < 50) {
        console.log(new Date().getTime(), 1);
        this.setState({ stick: true });
      }
    } else {
      if (rectMain.height - (rectNav.y - rectMain.y) < 50) {
        console.log(new Date().getTime(), 3);
        setTimeout(this.setState({ stick: false }), 500);
      }
    }
  }

  render() {

    return (<Wrapper id="client-template">

      <div id="main" className='main'>
        {this.props.children}
      </div>

      <div id="nav" className={`nav ${this.state.stick ? "stick" : ""}`}>
        <BottomMenu
          up={this.state.stick}
          login={this.props.isLoggedIn} />
      </div>

      <div className='bottom'>
        <Footer />
      </div>

    </Wrapper>);
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientTemplate);
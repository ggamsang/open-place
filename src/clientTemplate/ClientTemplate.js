import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import Footer from "components/Footer"
import TopMenu from "components/Menu/Top";

const Wrapper = styled.div`
  z-index: 1;
  position: relative;

  .top {
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .main {
    z-index: 5;
    margin-top: 103px; 
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
  // @media only screen and (min-width: 320px) and (max-width:500px){
  //  .nav{
  //    width:${window.innerWidth}px;
  //  }
  // }
`;

class ClientTemplate extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     stick: false,
  //     prev_y: 0,
  //   };
  // }
  // componentDidMount() {
  //   // window.addEventListener('scroll', e => this.handleScroll(e), true);
  //   window.addEventListener('scroll', this.scroll, true);
  // }

  // handleScroll = async (_) => {
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
  //   // const { prev_y } = this.state;
  //   // let dir = "";
  //   // if (rectMain.y - prev_y > 0) {
  //   //   dir = "UP";
  //   // } else {
  //   //   dir = "DOWN";
  //   // }
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
  // }

  render() {

    return (<Wrapper id="client-template">
      <div className='top'>
        <TopMenu login={this.props.isLoggedIn} userInfo={this.props.userInfo} />
      </div>

      <div id="main" className='main'>

        {this.props.children}
        <Footer />
      </div>

      {/* <div className='bottom'> */}
      {/* </div> */}

    </Wrapper>);
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(ClientTemplate);
import React, { Component } from 'react';
import { connect } from "react-redux";
import styled/*, { keyframes }*/ from "styled-components";
import Footer from "components_mobile/Footer"
import BottomMenu from "components_mobile/Menu/Bottom";
// import NotificationContainer from "containers/NotificationContainer"
// import { WIDTH } from 'constant';

const Wrapper = styled.div`
  z-index: 1;
  position: relative;

  .nav {
    z-index: 999;
    position: fixed;
    bottom: 23px;
    &.up {
      margin-top: 230px;
      position: relative;
    }
  }
  .main { }
  .disabled {
    pointer-events: none;
  }
  .bottom {
    .blanker {
      height: 120px;
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

// const GAP = window.innerHeight;
const GAP = 600;

class ClientTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { up: false, login: false }
  }
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.setState({ login: true });
    }
    window.addEventListener('scroll', e => this.handleScroll(e));
  }

  handleScroll = _ => {
    const nav = document.getElementById('main');
    if (nav && nav.getClientRects() && nav.getClientRects()[0]) {
      const rect = nav.getBoundingClientRect();
      if (!rect) {
        return;
      }
      // console.log(rect.height + rect.y);
      if (rect.height + rect.y < GAP) {
        this.setState({ up: true });
      } else {
        this.setState({ up: false });
      }
    }
  }

  render() {
    return (<Wrapper id="client-template">
      <div id="main" className='main'>
        {this.props.children}
      </div>

      <div id="nav" className={this.state.up ? 'nav up' : 'nav'}>
        <BottomMenu up={this.state.up} login={this.state.login} />
      </div>

      <div className='bottom'>
        <Footer />
      </div>

    </Wrapper>);
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ClientTemplate);
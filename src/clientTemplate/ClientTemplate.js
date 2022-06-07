import React, { Component } from 'react';
import { connect } from "react-redux";
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
      margin-top: 30px;
      position: relative;
      // bottom: 100px;
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
    height: 100vh;
    z-index: 1;
    opacity: 50%;
  }
`;

const GAP = 600;

class ClientTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { up: false, login: false }
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
      if (rect.height + rect.y < GAP) {
        this.setState({ up: true });
      } else {
        this.setState({ up: false });
      }
    }
  }

  render() {
    // console.log(this.props, this.state);
    
    return (<>
      {/* <button style={{ position: "absolute", zIndex: "998", left: "60px" }} onClick={() => this.setState({ login: !this.state.login })}>demo:{this.state.login ? "로그아웃" : "로그인"}</button> */}
      {/* alarm */}
      {/* <AlarmContainer /> */}

      {/*  */}
      <Wrapper id="client-template">
        <div id="main" className='main'>
          {this.props.children}
        </div>

        <div id="nav" className={this.state.up ? 'nav up' : 'nav'}>
          <BottomMenu up={this.state.up} login={this.state.login} />
        </div>

        <div className='bottom'>
          <div style={{ height: "10px" }}></div>
          {this.props.i_dont_need_footer
            ? <></>
            : <Footer />}
        </div>

        {/* <div id='dimmer'> &nbsp; </div> */}

      </Wrapper>
    </>);
  }
}

const mapStateToProps = state => {
  console.log("redux:", state);
  return {}
};
const mapDispatchToProps = dispatch => ({}); 
export default connect(mapStateToProps, mapDispatchToProps)(ClientTemplate);
import CheckAuth from "./../containers/Commons/CheckAuth";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import BottomMenu from "../components/Menu/Bottom";

const WrapperMobile = styled.div``;
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stick: false,
      prev_y: 0,
    };
  }
  componentDidMount() {
    // window.addEventListener("scroll", (e) => this.handleScroll(e), true);
    // window.addEventListener("scroll", this.scroll, true);
  }
  handleScroll = async (_) => {
    // get main height
    const main = document.getElementById("main");
    const rectMain = main.getBoundingClientRect();
    if (!rectMain) {
      return;
    }
    // get bottom menu position
    const nav = document.getElementById("nav");
    const rectNav = nav.getBoundingClientRect();
    if (!rectNav) {
      return;
    }
    // detect direction and store prev position
    const { prev_y } = this.state;
    let dir = "";
    if (rectMain.y - prev_y > 0) {
      dir = "UP";
    } else {
      dir = "DOWN";
    }
    this.setState({ prev_y: rectMain.y });
    console.log(new Date().getTime(), 0);

    const { stick } = this.state;
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
  };

  render() {
    return (
      <WrapperMobile id="client-template">
        <div id="main" className="main">
          {this.props.children}
        </div>

        <div id="nav" className={`nav ${this.state.stick ? "stick" : ""}`}>
          <BottomMenu up={this.state.stick} login={this.props.isLoggedIn} />
        </div>

        <div className="bottom">
          <Footer />
        </div>
      </WrapperMobile>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({});
export default CheckAuth(connect(mapStateToProps, mapDispatchToProps)(Layout));

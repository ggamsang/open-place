import Main from "desktop/components/Main";
import React, { Component } from "react";
import { connect } from "react-redux";

class MainContainer extends Component {
  render() {
    return <Main {...this.props} />;
  }
}
export default connect(
  (state) => ({
    isLoggedIn: state.Authentication.status.isLoggedIn,
    userInfo: state.Authentication.status.userInfo,
  }),
  () => {}
)(MainContainer);

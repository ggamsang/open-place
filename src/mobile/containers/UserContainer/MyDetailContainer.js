import React, { Component } from "react";
import MyDetail from "mobile/components_mobile/User/MyDetail";
import { connect } from "react-redux";
import { goto } from "navigator";
import { getSharerRequest } from "actions/Sharer/Sharer";

class MyDetailContainer extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
    } else {
      alert("로그인해주세요.");
      goto("LOGIN");
    }
  }
  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.userInfo) !== JSON.stringify(this.props.userInfo)
    ) {
      this.props.getSharerRequest(this.props.userInfo.uid);
    }
  }
  render() {
    return this.props.isLoggedIn ? (
      <MyDetail {...this.props} Outlet={this.props.Outlet} />
    ) : (
      <div>로그인이 필요한 페이지입니다.</div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  userInfo: state.Authentication.status.userInfo,
  sharer: state.User.status.sharer,
});
const mapDispatchToProps = (dispatch) => ({
  getSharerRequest: (user_id) => {
    dispatch(getSharerRequest(user_id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDetailContainer);

import React, { Component } from "react";
import { connect } from "react-redux";
import { goto } from "navigator";
import { getSharerRequest } from "actions/Sharer/Sharer";
import MyDetail from "desktop/components/User/MyDetail";
import { SignOutRequest, CheckNickNameRequest } from "actions/Authentication";
import { updateUserRequest } from "actions/User/User";

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
    return this.props.isLoggedIn && this.props.userInfo ? (
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

  token: state.Authentication.status.token,
  userInfo: state.Authentication.status.userInfo,
  user_detail: state.User.status.user_detail,
  checkNickName: state.Authentication.checkStatus.checkNickName,
});
const mapDispatchToProps = (dispatch) => ({
  getSharerRequest: (user_id) => {
    dispatch(getSharerRequest(user_id));
  },
  SignOutRequest: () => {
    dispatch(SignOutRequest());
  },
  updateUserRequest: (user_id, data, token) => {
    dispatch(updateUserRequest(user_id, data, token));
  },
  CheckNickNameRequest: (token, nickname) =>
    dispatch(CheckNickNameRequest(token, nickname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDetailContainer);

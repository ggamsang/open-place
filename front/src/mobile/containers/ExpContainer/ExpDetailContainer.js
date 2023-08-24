import React, { Component } from 'react';
import ExpDetail from 'mobile/components_mobile/Exp/ExpDetail';
import { getExpDetailRequest, likeExpRequest, BuyExpRequest } from "actions/Exp/ExpDetail"

import { connect } from "react-redux";

class ExpDetailContainer extends Component {
  async componentDidMount() {
    await this.props.getExpDetailRequest(this.props.item_id, null)
  }
  async componentDidUpdate(prevProps) {
    // if (JSON.stringify(prevProps.userInfo) !== JSON.stringify(this.props.userInfo)) {
    //   await this.props.getExpDetailRequest(this.props.item_id, this.props.userInfo === null ? null : this.props.userInfo.uid)
    // }
  }
  render() {
    return (<ExpDetail {...this.props} outlet={this.props.outlet} buy={BuyExpRequest} />);
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  userInfo: state.Authentication.status.userInfo,
  expDetail: state.ExpDetail.status.expDetail,
});
const mapDispatchToProps = (dispatch) => ({
  getExpDetailRequest: (item_id, user_id) =>
    dispatch(getExpDetailRequest(item_id, user_id)),
  likeExpRequest: (token, data) =>
    dispatch(likeExpRequest(token, data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpDetailContainer);
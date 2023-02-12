import React, { Component } from "react";
import ExpDetail from "desktop/components/Exp/ExpDetail";
import {
  getExpDetailRequest,
  likeExpRequest,
  BuyExpRequest,
} from "actions/Exp/ExpDetail";
import { connect } from "react-redux";

class ExpDetailContainer extends Component {
  async componentDidMount() {
    await this.props.getExpDetailRequest(this.props.item_id, null);
  }
  render() {
    return (
      <ExpDetail
        {...this.props}
        outlet={this.props.outlet}
        buy={BuyExpRequest}
      />
    );
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
  likeExpRequest: (token, data) => dispatch(likeExpRequest(token, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpDetailContainer);

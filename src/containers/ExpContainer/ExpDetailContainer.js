import React, { Component } from 'react';
import ExpDetail from 'components_mobile/Exp/ExpDetail';
import { getExpDetailRequest, BuyExpRequest } from "actions/Exp/ExpDetail"
import { connect } from "react-redux";

class ExpDetailContainer extends Component {
  componentDidMount() {
    this.props.getExpDetailRequest(this.props.item_id)
  }
  render() {
    return (<ExpDetail {...this.props} outlet={this.props.outlet} buy={BuyExpRequest}/>);
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  userInfo: state.Authentication.status.userInfo,
  expDetail: state.ExpDetail.status.expDetail,
  token: state.Authentication.status.token,
});
const mapDispatchToProps = (dispatch) => {
  return ({
    getExpDetailRequest: (item_id) => dispatch(getExpDetailRequest(item_id)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpDetailContainer);
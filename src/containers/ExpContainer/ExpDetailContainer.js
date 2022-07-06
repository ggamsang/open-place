import React, { Component } from 'react';
import ExpDetail from 'components_mobile/Exp/ExpDetail';
import { getExpDetailRequest } from "actions/Exp/ExpDetail"
import { connect } from "react-redux";

class ExpDetailContainer extends Component {
  componentDidMount() {
    this.props.getExpDetailRequest(this.props.item_id)
  }
  render() {
    return (<React.Fragment>
      <ExpDetail {...this.props} outlet={this.props.outlet} />
    </React.Fragment>);
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  userInfo: state.Authentication.status.userInfo,
  expDetail: state.ExpDetail.status.expDetail,
});
const mapDispatchToProps = (dispatch) => {
  return ({
    getExpDetailRequest: (item_id) => dispatch(getExpDetailRequest(item_id)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpDetailContainer);
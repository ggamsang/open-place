import React, { Component } from "react";
import CreateExp from "desktop/components/Exp/CreateExp";
import { connect } from "react-redux";
import {
  getCategoryListRequest,
  getExpTypeListReqeuest,
} from "actions/Commons/DefaultList";
import { createExpRequest } from "actions/Exp/UpdateExp";

class CreateExpContainer extends Component {
  async componentDidMount() {
    await this.props
      .getCategoryListRequest()
      .then(() => this.props.getExpTypeListReqeuest());
  }
  render() {
    return <CreateExp {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  category: state.DefaultList.status.category,
  exp_type: state.DefaultList.status.exp_type,
  token: state.Authentication.status.token,
  userInfo: state.Authentication.status.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryListRequest: () => {
    return dispatch(getCategoryListRequest());
  },
  getExpTypeListReqeuest: () => {
    return dispatch(getExpTypeListReqeuest());
  },
  createExpRequest: (data, token) => {
    return dispatch(createExpRequest(data, token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateExpContainer);

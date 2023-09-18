import React, { Component } from "react";
import CreateExp from "mobile/components_mobile/Exp/CreateExp";
import { connect } from "react-redux";
import { CreateDesignRequest } from "redux/modules/expitem";
// import {
//   getCategoryListRequest,
//   getExpTypeListReqeuest,
// } from "actions/Commons/DefaultList";

class CreateExpContainer extends Component {
  // async componentDidMount() {
  //   await this.props
  //     .getCategoryListRequest()
  //     .then(() => this.props.getExpTypeListReqeuest());
  // }
  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <CreateExp {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  // category: state.DefaultList.status.category,
  // exp_type: state.DefaultList.status.exp_type,
  // token: state.Authentication.status.token,
  // userInfo: state.Authentication.status.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  // getCategoryListRequest: () => {
  //   return dispatch(getCategoryListRequest());
  // },
  // getExpTypeListReqeuest: () => {
  //   return dispatch(getExpTypeListReqeuest());
  // },
  CreateDesignRequest: (data, token) => {
    return dispatch(CreateDesignRequest(data, token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateExpContainer);

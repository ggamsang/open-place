import React, { Component } from 'react';
import CreateExp from 'components_mobile/Exp/CreateExp';
import { connect } from "react-redux";
import { getCategoryListRequest, getExpTypeListReqeuest } from 'actions/Commons/DefaultList';
import { createExpRequest } from 'actions/Exp/UpdateExp'
class CreateExpContainer extends Component {
  async componentDidMount() {
    await this.props.getCategoryListRequest()
      .then(() => this.props.getExpTypeListReqeuest());
  }
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
  category: state.DefaultList.status.category,
  exptype: state.DefaultList.status.exptype,
  token: state.Authentication.status.token,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryListRequest: () => {
    return dispatch(getCategoryListRequest())
  },
  getExpTypeListReqeuest: () => {
    return dispatch(getExpTypeListReqeuest())
  },
  createExpRequest: (data,token) => {
    return dispatch(createExpRequest(data,token))
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateExpContainer);
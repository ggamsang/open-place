import React, { Component } from 'react';
import ModifyExp from 'components_mobile/Exp/ModifyExp';
import { connect } from "react-redux";
import { getCategoryListRequest, getExpTypeListReqeuest } from 'actions/Commons/DefaultList';
import { updateExpRequest } from 'actions/Exp/UpdateExp'

class ModifyExpContainer extends Component {
    render() {
      return (
          <React.Fragment>
            <ModifyExp {...this.props}/>
          </React.Fragment>
      );
    }
  }

  const mapStateToProps = (state) => ({
    category: state.DefaultList.status.category,
    exptype: state.DefaultList.status.exptype,
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
  });

const mapDispatchToProps = (dispatch) => ({
  getCategoryListRequest: () => {
    return dispatch(getCategoryListRequest())
  },
  getExpTypeListReqeuest: () => {
    return dispatch(getExpTypeListReqeuest())
  },
  updateExpRequest: (data,token) => {
    return dispatch(updateExpRequest(data,token))
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ModifyExpContainer);
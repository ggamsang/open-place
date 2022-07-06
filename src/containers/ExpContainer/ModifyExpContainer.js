import React, { Component } from 'react';
import ModifyExp from 'components_mobile/Exp/ModifyExp';
import { connect } from "react-redux";
import { getCategoryListRequest, getExpTypeListReqeuest } from 'actions/Commons/DefaultList';
import { updateExpRequest } from 'actions/Exp/UpdateExp'
import {getExpDetailRequest} from "actions/Exp/ExpDetail"

class ModifyExpContainer extends Component {
    componentDidMount(){
      this.props.getCategoryListRequest();
      this.props.getExpTypeListReqeuest();
      this.props.getExpDetailRequest(this.props.item_id)
    }
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
    expDetail: state.ExpDetail.status.expDetail,
  });

const mapDispatchToProps = (dispatch) => ({
  getCategoryListRequest: () => {
    return dispatch(getCategoryListRequest())
  },
  getExpTypeListReqeuest: () => {
    return dispatch(getExpTypeListReqeuest())
  },
  updateExpRequest: (id, data,token) => {
    return dispatch(updateExpRequest(id,data,token))
  },
  getExpDetailRequest:(item_id)=> {
    return dispatch(getExpDetailRequest(item_id))
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ModifyExpContainer);
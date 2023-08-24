import React from 'react';
import ModifySharer from 'mobile/components_mobile/Sharer/ModifySharer';
import { connect } from 'react-redux';
import { getBankCodeListReqeust, getLocationListRequest } from "actions/Commons/DefaultList"
import { updateSharerProfileRequest } from "actions/Sharer/UpdateSharer";
import { getSharerRequest, deleteSharerRequest } from 'actions/Sharer/Sharer';

class ModifySharerContainer extends React.Component {
  componentDidMount() {
    this.props.getBankCodeListReqeust();
    this.props.getLocationListRequest();

  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.userInfo) !== JSON.stringify(this.props.userInfo)) {
      this.props.getSharerRequest(this.props.userInfo.uid);
    }
  }
  render() {
    return (
      <React.Fragment>
        <ModifySharer {...this.props} />
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.Authentication.status.token,
    isLoggedIn: state.Authentication.status.isLoggedIn,
    userInfo: state.Authentication.status.userInfo,
    user_detail: state.User.status.user_detail,
    bank_code: state.DefaultList.status.bank_code,
    location: state.DefaultList.status.location,
    sharer: state.User.status.sharer,
  }
};
const mapDispatchToProps = (dispatch) => {
  return ({
    getBankCodeListReqeust: () => { dispatch(getBankCodeListReqeust()) },
    getLocationListRequest: () => { dispatch(getLocationListRequest()) },
    updateSharerProfileRequest: (user_id, data, token) => { dispatch(updateSharerProfileRequest(user_id, data, token)) },
    getSharerRequest: (user_id) => { dispatch(getSharerRequest(user_id)) },
    deleteSharerRequest: (token, user_id) => { dispatch(deleteSharerRequest(token, user_id)) }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifySharerContainer);
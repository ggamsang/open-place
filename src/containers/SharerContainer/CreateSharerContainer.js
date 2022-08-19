import React from 'react';
import CreateSharer from 'components/Sharer/CreateSharer';
import { connect } from 'react-redux';
import {getBankCodeListReqeust,getLocationListRequest} from "actions/Commons/DefaultList"
import {updateSharerProfileRequest} from "actions/Sharer/UpdateSharer";

class CreateSharerContainer extends React.Component {
  componentDidMount(){
    this.props.getBankCodeListReqeust();
    this.props.getLocationListRequest();
  }
  render() {
    return (
      <React.Fragment>
        <CreateSharer {...this.props}/>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  isLoggedIn: state.Authentication.status.isLoggedIn,
  user_detail: state.User.status.user_detail,
  bank_code : state.DefaultList.status.bank_code,
  location : state.DefaultList.status.location,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => {
  return ({
    getBankCodeListReqeust:()=>{dispatch(getBankCodeListReqeust())},
    getLocationListRequest:()=>{dispatch(getLocationListRequest())},
    updateSharerProfileRequest:(user_id,data,token)=>{dispatch(updateSharerProfileRequest(user_id,data,token))}
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSharerContainer);

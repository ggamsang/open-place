import React from 'react';
import { connect } from 'react-redux';
import { getSharerRequest } from 'actions/Sharer/Sharer';
import { getLocationListRequest } from "actions/Commons/DefaultList"
import SharerDetail from 'components_mobile/Sharer/SharerDetail';
import { likeSharerRequest } from 'actions/Sharer/Sharer';
class SharerDetailContainer extends React.Component {
  componentDidMount(){
    this.props.getSharerRequest(this.props.user_id);
    this.props.getLocationListRequest();
  }
  render() {
    console.log(this.props.location)
    return (
      <React.Fragment>
        <SharerDetail {...this.props}/>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  userInfo: state.Authentication.status.userInfo,
  sharer: state.User.status.sharer,
  location : state.DefaultList.status.location,
  token: state.Authentication.status.token,
});
const mapDispatchToProps = (dispatch) => {
  return ({
    getSharerRequest: (user_id) => { dispatch(getSharerRequest(user_id)) },
    getLocationListRequest: () => { dispatch(getLocationListRequest()) },
    likeSharerRequest:(token,data)=>dispatch(likeSharerRequest(token,data))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(SharerDetailContainer);

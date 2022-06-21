import React, { Component } from 'react';
import MyDetail from 'components_mobile/User/MyDetail';
import { connect } from 'react-redux';
import { goto } from 'navigator';
import {getUserDetailRequest} from "actions/User/User"

class MyDetailContainer extends Component {
  componentDidMount() {
    // this.props.getUserDetailRequest(1);
    // this.props.getUserPointRequest(1);
    
    if (this.props.isLoggedIn) {
      ;
    } else {
      alert('로그인해주세요.')
      goto("LOGIN")
    }
  }

  render() {
    return (
      this.props.isLoggedIn
        ? <MyDetail {...this.props} Outlet={this.props.Outlet} />
        : <div>로그인이 필요한 페이지입니다.</div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  user_detail: state.User.status.user_detail,
});
const mapDispatchToProps = (dispatch) => {
  return ({
    getUserDetailRequest:(user_id)=>{dispatch(getUserDetailRequest(user_id))},
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDetailContainer);
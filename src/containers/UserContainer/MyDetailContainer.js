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
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(this.props);
=======
>>>>>>> 54181c2ac20288273292ddfd0517f9cbdf8c67f7
    return (
      this.props.isLoggedIn
        ? <MyDetail {...this.props} Outlet={this.props.Outlet} />
        : <div>로그인이 필요한 페이지입니다.</div>
    );
<<<<<<< HEAD
=======
    return (this.props.isLoggedIn
      ? <MyDetail Outlet={this.props.Outlet} />
      : <div>로그인이 필요한 페이지입니다.</div>
    )
>>>>>>> 5aebadf953718e9a52bb6c5bf9d95721b01e763c
  }
=======

>>>>>>> 54181c2ac20288273292ddfd0517f9cbdf8c67f7
}
const mapStateToProps = (state) => {
  return ({
    isLoggedIn: state.Authentication.status.isLoggedIn,
    user_detail: state.User.status.user_detail,
  });
}
const mapDispatchToProps = (dispatch) => {
  return ({
    getUserDetailRequest:(user_id)=>{dispatch(getUserDetailRequest(user_id))},
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDetailContainer);
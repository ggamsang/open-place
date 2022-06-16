import React, { Component } from 'react';
import MyDetail from 'components_mobile/User/MyDetail';
import { connect } from 'react-redux';
import { goto } from 'navigator';

class MyDetailContainer extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      ;
    } else {
      alert('로그인해주세요.')
      goto("LOGIN")
    }
  }

  render() {
    return (this.props.isLoggedIn
      ? <MyDetail Outlet={this.props.Outlet} />
      : <div>로그인이 필요한 페이지입니다.</div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return ({});
}
const mapStateToProps = (state) => {
  return ({
    isLoggedIn: state.Authentication.status.isLoggedIn,
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(MyDetailContainer);
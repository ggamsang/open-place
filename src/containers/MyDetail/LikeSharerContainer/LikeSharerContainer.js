import React, { Component } from 'react';
import ScrollList from "components/Commons/ScrollList"
import { connect } from "react-redux";
import { getUserLikeSharerRequest } from "actions/User/MyDetail"
import Sharer from 'components/Commons/Sharer';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  box-sizing:border-box;
  // padding:0px 20px;
`

class LikeSharerContainer extends Component {
  componentWillMount() {
    this.getList(0);
  }
  getList = (page) => {
    return new Promise((resolve)=>resolve(this.props.getUserLikeSharerRequest&&this.props.getUserLikeSharerRequest(this.props.userInfo.uid, page)));
  }
  render() {
   return (<Wrapper>
            <ScrollList list={this.props.list} list_added={this.props.list_added} getList={(value)=>this.getList(value)} ListComponent={Sharer} />
    </Wrapper>)
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  list: state.MyDetail.status.like_sharer_list,
  list_added: state.MyDetail.status.like_sharer_list_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserLikeSharerRequest:(user_id,page)=>dispatch(getUserLikeSharerRequest(user_id,page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeSharerContainer);

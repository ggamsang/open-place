import React, { Component } from 'react';
import ScrollList from "desktop/components/Commons/ScrollList"
import { connect } from "react-redux";
import { getUserLikeExpRequest } from "actions/User/MyDetail"
import Item from 'desktop/components/Commons/Item';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:0px 20px;
`
class LikeExpContainer extends Component {
  componentWillMount() {
    this.getList(0);
  }
  getList = (page) => {
    return new Promise((resolve)=>resolve(this.props.getUserLikeExpRequest&&this.props.getUserLikeExpRequest(this.props.userInfo.uid, page)));
  }
  render() {
    console.log(this.props);
   return (<Wrapper>
      <ScrollList list={this.props.list} list_added={this.props.list_added} getList={(value)=>this.getList(value)} ListComponent={Item} />
    </Wrapper>)
  }
}


const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  list: state.MyDetail.status.like_exp_list,
  list_added: state.MyDetail.status.like_exp_list_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserLikeExpRequest:(user_id,page)=>dispatch(getUserLikeExpRequest(user_id,page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeExpContainer);
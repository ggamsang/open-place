import React, { Component } from 'react';
import ScrollList from "components_mobile/Commons/ScrollList"
import { connect } from "react-redux";
import { getUserRegisterExpRequest } from "actions/User/MyDetail"
import Item from 'components_mobile/Commons/Item';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
`;

class SellItemListContainer extends Component {
  // constructor(props){
  //   super(props);
  //   // this.getList = this.getList.bind(this);
  // }
  componentWillMount() {
    console.log(this.props.userInfo)
    this.getList(0);
  }
  getList = (page) => {
    return new Promise((resolve)=>resolve(this.props.getUserRegisterExpRequest&&this.props.getUserRegisterExpRequest(this.props.user_id, page)));
  }
  render() {
    console.log(this.props)
    return (
    <Wrapper>
      <ScrollList list={this.props.list} list_added={this.props.list_added} getList={(value)=>this.getList(value)} ListComponent={Item} />
    </Wrapper>)
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  list: state.MyDetail.status.register_list,
  list_added: state.MyDetail.status.register_list_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserRegisterExpRequest: (user_id, page) => { dispatch(getUserRegisterExpRequest(user_id, page)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(SellItemListContainer);

import React, { Component } from 'react';
import ScrollList from "components_mobile/Commons/ScrollList"
import { connect } from "react-redux";
import { getUserSellExpRequest } from "actions/User/MyDetail"
import Item from 'components_mobile/Commons/Item';

class SellExpContainer extends Component {
  componentWillMount() {
    this.getList(0);
  }
  getList = (page) => {
    return new Promise((resolve)=>resolve(this.props.getUserSellExpRequest&&this.props.getUserSellExpRequest(this.props.userInfo.uid, page)));
  }
  render() {
   return (<React.Fragment>
      <ScrollList list={this.props.list} list_added={this.props.list_added} getList={(value)=>this.getList(value)} ListComponent={Item} />
    </React.Fragment>)
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  list: state.MyDetail.status.sell_list,
  list_added: state.MyDetail.status.sell_list_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserSellExpRequest: (user_id, page) => (dispatch(getUserSellExpRequest(user_id, page))),
});

export default connect(mapStateToProps, mapDispatchToProps)(SellExpContainer);

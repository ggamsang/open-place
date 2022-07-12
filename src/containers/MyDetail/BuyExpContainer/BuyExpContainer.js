import React from 'react';
import { connect } from "react-redux";
import { goto } from 'navigator';
import ScrollList from "components_mobile/Commons/ScrollList"
import { getUserBoughtExpRequest } from 'actions/User/MyDetail';

const dummy = [{
  type: "item", title: "데이터가 없습니다.", score: 4.3,
  tags: ["tag1", "tag2", "tag3"],
  url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
},]

class BuyExpContainer extends React.Component {
  componentDidMount() {
    this.props.token && this.props.getUserBoughtExpRequest(this.props.token, 0);
  }
  getList = (page) =>
    this.props.token && this.props.getUserBoughtExpRequest(this.props.token, page)
  onClick = (offset) => goto("MY-ITEM-BOUGHT", offset);

  render() {
    return (<ScrollList
      getList={this.getList}
      list_added={this.props.bought || dummy}
      onClick={this.onClick} />);
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  bought: state.ExpBought.status.bought_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserBoughtExpRequest: (token, page) =>
    dispatch(getUserBoughtExpRequest(token, page)),
});

export default
  connect(mapStateToProps, mapDispatchToProps)
    (BuyExpContainer);

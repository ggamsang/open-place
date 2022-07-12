import React from 'react';
import { connect } from "react-redux";
import { goto } from 'navigator';
import ScrollList from "components_mobile/Commons/ScrollList"
import { getUserBoughtExpRequest } from 'actions/User/MyDetail';
import Item from 'components_mobile/Commons/Item';
const dummy = [{
  type: "item", title: "데이터가 없습니다.", score: 4.3,
  tags: ["tag1", "tag2", "tag3"],
  url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
},]

class BuyExpContainer extends React.Component {
  componentDidMount() {
    this.props.token && this.props.getUserBoughtExpRequest(this.props.userInfo.uid,0)
  }
  getList = (page) => {
    return new Promise((resolve)=>resolve(this.props.getUserBoughtExpRequest&&this.props.getUserBoughtExpRequest(this.props.userInfo.uid, page)));
  }
  onClick = (offset) => goto("MY-ITEM-BOUGHT", offset);

  render() {
    return (     
      <React.Fragment>
        <ScrollList list={this.props.list} list_added={this.props.list_added} getList={(value)=>this.getList(value)} ListComponent={Item} />
      </React.Fragment> 
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  list: state.ExpBought.status.bought,
  list_added: state.ExpBought.status.bought_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserBoughtExpRequest: (user_id,page) => dispatch(getUserBoughtExpRequest(user_id,page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyExpContainer);

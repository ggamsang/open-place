import React from 'react';
import { connect } from "react-redux";
import { goto } from 'navigator';
import ScrollList from "components_mobile/Commons/ScrollList"
import { getUserBoughtExpRequest } from 'actions/User/MyDetail';
import Item from 'components_mobile/Commons/Item';

class BuyExpContainer extends React.Component {
  componentDidMount() {
    this.props.token &&
      this.props.getUserBoughtExpRequest(this.props.token, 0);
  }
  getList = (page) =>
    new Promise((resolve) =>
      resolve(this.props.getUserBoughtExpRequest(this.props.token, page)));
  onClick = (offset) =>
    goto("MY-ITEM-BOUGHT", offset);

  render() {
    return (
      <React.Fragment>
        <ScrollList
          list={this.props.list}
          list_added={this.props.list_added}
          getList={(value) => this.getList(value)}
          ListComponent={Item} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.Authentication.status.userInfo,
  token: state.Authentication.status.token,
  list: state.ExpBought.status.bought,
  list_added: state.ExpBought.status.bought_added,
});

const mapDispatchToProps = (dispatch) => ({
  getUserBoughtExpRequest: (token, page) => dispatch(getUserBoughtExpRequest(token, page)),
});

export default
  connect(mapStateToProps, mapDispatchToProps)
    (BuyExpContainer);

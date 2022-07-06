import React, { Component } from 'react';
import ScrollList from "components_mobile/Commons/ScrollList"
import { connect } from "react-redux";
import { getUserBoughtExpRequest } from 'actions/User/MyDetail';

const dummy = [
  {
    type: "item", title: "데이터가 없습니다.", score: 4.3,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
  },
]
class BuyExpContainer extends Component {
  componentDidMount() {
    this.props.token && this.props.getUserBoughtExpRequest(this.props.token)
  }
  render() {
    const { bought } = this.props;

    return (<React.Fragment>
      <ScrollList list_added={bought || dummy} />
    </React.Fragment>)
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  bought: state.ExpBought.status.bought,
});

const mapDispatchToProps = (dispatch) => ({
  getUserBoughtExpRequest: (token) => dispatch(getUserBoughtExpRequest(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyExpContainer);

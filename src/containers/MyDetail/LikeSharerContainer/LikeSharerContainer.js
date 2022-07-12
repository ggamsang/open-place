import React, { Component } from 'react';
import ScrollList from "components_mobile/Commons/ScrollList"
import { connect } from "react-redux";
import { getUserLikeSharerRequest } from "actions/User/MyDetail"
import Sharer from 'components_mobile/Commons/Sharer';
class LikeSharerContainer extends Component {
  componentWillMount() {
    this.getList(0);
  }
  getList = (page) => {
    return new Promise((resolve)=>resolve(this.props.getUserLikeSharerRequest&&this.props.getUserLikeSharerRequest(this.props.userInfo.uid, page)));
  }
  render() {
   return (<React.Fragment>
            <ScrollList list={this.props.list} list_added={this.props.list_added} getList={(value)=>this.getList(value)} ListComponent={Sharer} />
    </React.Fragment>)
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

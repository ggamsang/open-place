import React from 'react';
import { connect } from 'react-redux';
import { GetArticleDetailRequest, } from 'actions/Community';
import Detail from "components_mobile/Community/Detail";

class CommunityDetailContainer extends React.Component {
  componentDidMount() {
    this.GetDetail(this.props.id);
  }
  // GetArticleComment = (id) =>
  // this.props.GetArticleCommentRequest(id);
  GetDetail = (id) =>
    this.props.GetArticleDetailRequest(id);

  render() {
    return (<React.Fragment>
      <Detail {...this.props.detail} {...this.props} />
    </React.Fragment>);
  }
}

const mapStateToProps = state => ({
  token: state.Authentication.status.token,
  detail: state.Community.status.detail,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = dispatch => ({
  GetArticleDetailRequest: (id) => dispatch(GetArticleDetailRequest(id)),
  // GetArticleCommentRequest: (id) => dispatch(GetArticleCommentRequest(id)),
});

export default
  connect(mapStateToProps, mapDispatchToProps)(CommunityDetailContainer);

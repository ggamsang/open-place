import React from "react";
import { connect } from "react-redux";
import CommentList from "../../components/CommentList";
import {
  GetArticleCommentRequest,
  CreateArticleCommentRequest,
} from "../../actions/Comment";

class CommentListContainer extends React.Component {
  componentDidMount() {
    this.props.GetArticleCommentRequest(this.props.id);
  }
  render() {
    return <CommentList {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  comment: state.Comment.status.comment,
  userInfo: state.Authentication.status.userInfo,
  token: state.Authentication.status.token,
});
const mapDispatchToProps = (dispatch) => ({
  GetArticleCommentRequest: (id) => dispatch(GetArticleCommentRequest(id)),
  CreateArticleCommentRequest: (token, form) =>
    dispatch(CreateArticleCommentRequest(token, form)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);

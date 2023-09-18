import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DesignDetail from "components/Designs/DesignDetail";
import DesignDetailMobile from "components/Designs/DesignDetailMobile";
import {
  ForkDesignRequest,
  ForkDesignListRequest,
  JoinDesignRequest,
  GetoutDesignRequest,
  DesignWaitingListRequest,
  GetCountDesignCommentRequest,
  GetDesignDetailRequest,
  DesignDetailResetRequest,
  UpdateDesignViewRequest,
  GetDesignCountRequest,
  GetLikeDesignRequest,
  LikeDesignRequest,
  UnlikeDesignRequest,
  //
} from "redux/modules/expitem";
import { isMobile } from "constant";

class DesignDetailContainer extends Component {
  render() {
    return isMobile() ? (
      <DesignDetailMobile {...this.props} />
    ) : (
      <DesignDetail {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
  DesignForked: state.Design.status.DesignForked,
  status: state.Design.DesignDetail.status,
  new_design_id: state.Design.status.new_design_id,
  forkDesignList: state.Design.status.list,
  DesignDetail: state.Design.status.DesignDetail,
  Count: state.Design.status.Count,
  userInfo: state.Authentication.status.userInfo,
  valid: state.Authentication.status.valid,
  token: state.Authentication.status.token,
  like: state.Design.status.like,
  WaitingList: state.Design.status.WaitingList,
  CountDesignComment: state.DesignComment.status.CountDesignComment,
});

const mapDispatchToProps = (dispatch) => ({
  GetDesignDetailRequest: (id, token) =>
    dispatch(GetDesignDetailRequest(id, token)),
  GetCountDesignCommentRequest: (id) =>
    dispatch(GetCountDesignCommentRequest(id)),
  DesignWaitingListRequest: (id, token) =>
    dispatch(DesignWaitingListRequest(id, token)),
  DesignDetailResetRequest: () => dispatch(DesignDetailResetRequest()),
  GetLikeDesignRequest: (id, token) =>
    dispatch(GetLikeDesignRequest(id, token)),
  LikeDesignRequest: (id, token) => dispatch(LikeDesignRequest(id, token)),
  UnlikeDesignRequest: (id, token) => dispatch(UnlikeDesignRequest(id, token)),
  GetDesignCountRequest: (id) => dispatch(GetDesignCountRequest(id)),
  UpdateDesignViewRequest: (id) => dispatch(UpdateDesignViewRequest(id)),
  JoinDesignRequest: (id, data, flag, token) =>
    dispatch(JoinDesignRequest(id, data, flag, token)),
  GetoutDesignRequest: (id, token) => dispatch(GetoutDesignRequest(id, token)),
  ForkDesignRequest: (designId, userId, token) =>
    dispatch(ForkDesignRequest(designId, userId, token)),
  ForkDesignListRequest: (id, token) =>
    dispatch(ForkDesignListRequest(id, token)),
  // DenyForkDesignRequest: (id, token) =>
  //   dispatch(DenyForkDesignRequest(id, token)),
  // AcceptForkDesignRequest: (id, token) =>
  //   dispatch(AcceptForkDesignRequest(id, token)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DesignDetailContainer)
);

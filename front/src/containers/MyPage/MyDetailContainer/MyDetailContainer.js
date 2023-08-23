import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UpdateUserDetailRequest,
  GetMyDetailRequest,
} from "redux/modules/personal";
import {
  GetDesignerCountRequest,
  GetGroupInDesignerRequest,
  GetRelatedGroupInDesignerRequest,
  GetLikeInDesignerRequest,
  GetMyDesignInDesignerRequest,
  GetLikeGroupInDesignerRequest,
  GetLikeDesignerInDesignerRequest,
  GetTheBestDesignDesignerRequest,
} from "redux/modules/designer";
import { SignOutRequest, CheckNickNameRequest } from "redux/modules/auth";
import MyDetail from "components/Users/MyDetail/NewMyDetail";

class MyDetailContainer extends Component {
  componentWillMount() {
    this.props.GetMyDetailRequest(this.props.token).then(console.log)
  }

  render() {
    return <MyDetail {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    MyDetail: state.Personal.status.MyDetail,
    userInfo: state.Authentication.status.userInfo,
    token: state.Authentication.status.token,
    Count: state.Designer.status.Count,
    TheBestDesign: state.Designer.status.TheBestDesign,
    MyDesign: state.Designer.status.MyDesignInDesigner,
    MyDesignAdded: state.Designer.status.MyDesignInDesignerAdded,
    MyLikeDesign: state.Designer.status.LikeInDesigner,
    MyLikeDesignAdded: state.Designer.status.LikeInDesignerAdded,
    MyLikeGroup: state.Designer.status.LikeGroupInDesigner,
    MyLikeGroupAdded: state.Designer.status.LikeGroupInDesignerAdded,
    MyLikeDesigner: state.Designer.status.LikeDesignerInDesigner,
    MyLikeDesignerAdded: state.Designer.status.LikeDesignerInDesignerAdded,
    MyGroup: state.Designer.status.GroupInDesigner,
    MyGroupAdded: state.Designer.status.GroupInDesignerAdded,
    RelatedGroup: state.Designer.status.RelatedGroupInDesigner,
    RelatedGroupAdded: state.Designer.status.RelatedGroupInDesignerAdded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  GetDesignerCountRequest: (id) => dispatch(GetDesignerCountRequest(id)),
  GetMyDetailRequest: (token) => dispatch(GetMyDetailRequest(token)),

  GetGroupInDesignerRequest: (id, page, sort) =>
    dispatch(GetGroupInDesignerRequest(id, page, sort)),
  GetRelatedGroupInDesignerRequest: (id, page, sort) =>
    dispatch(GetRelatedGroupInDesignerRequest(id, page, sort)),
  GetLikeInDesignerRequest: (id, page, sort) =>
    dispatch(GetLikeInDesignerRequest(id, page, sort)),
  GetMyDesignInDesignerRequest: (id, page, sort) =>
    dispatch(GetMyDesignInDesignerRequest(id, page, sort)),
  GetLikeGroupInDesignerRequest: (id, page, sort) =>
    dispatch(GetLikeGroupInDesignerRequest(id, page, sort)),
  GetLikeDesignerInDesignerRequest: (id, page, sort) =>
    dispatch(GetLikeDesignerInDesignerRequest(id, page, sort)),

  GetTheBestDesignDesignerRequest: (id) =>
    dispatch(GetTheBestDesignDesignerRequest(id)),
  SignOutRequest: () => dispatch(SignOutRequest()),
  CheckNickNameRequest: (nick) => dispatch(CheckNickNameRequest(nick)),
  UpdateUserDetailRequest: (data, token) =>
    dispatch(UpdateUserDetailRequest(data, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyDetailContainer);

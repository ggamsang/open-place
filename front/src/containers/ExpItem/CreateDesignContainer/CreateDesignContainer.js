import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateDesign from "components/Designs/CreateDesign";
import CreateDesignMobile from "components/Designs/CreateDesign/CreateDesignMobile";
import {
  CreateDesignBoardRequest,
  UpdateDesignTime,
  UpdateCardTitleRequest,
  GetDesignCardRequest,
  UpdateDesignBoardRequest,
  DeleteDesignBoardRequest,
  CreateDesignRequest,
  GetDesignDetailRequest,
  GetDesignBoardRequest,
} from "redux/modules/expitem";
import { SearchMemberRequest } from "redux/modules/search";
import { GetCategoryAllRequest } from "redux/modules/category";
// import opendesigncss from "opendesign_style";
import { isMobile } from "constant";

class CreateDesignFormContainer extends Component {
  constructor(props) {
    super(props);
    this.gotoMyModify = this.gotoMyModify.bind(this);
    this.searchMember = this.searchMember.bind(this);
  }
  componentDidMount() {
    // if (this.props.userInfo.is_designer === 0) {
    // alert("디자이너가 아닙니다. 개인정보 페이지에 가셔서 디자이너로 등록하여주세요.")
    // this.props.history.push("/myModify")
    // }
    // this.props.GetCategoryAllRequest();
    this.props.id && this.props.GetDesignDetailRequest(this.props.id);
  }
  gotoMyModify() {
    // alert("디자이너가 아닙니다. 개인정보 페이지에 가셔서 디자이너로 등록하여주세요.")
    // this.props.history.push("/myModify")
  }
  searchMember(value) {
    this.props.SearchMemberRequest(null, { key: value }, this.props.token);
  }
  render() {
    return isMobile() ? (
      <CreateDesignMobile searchMember={this.searchMember} {...this.props} />
    ) : (
      <CreateDesign {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  DesignDetail: state.Design.status.DesignDetail,
  token: state.Authentication.status.token,
  members: state.Search.status.members,
  userInfo: state.Authentication.status.userInfo,
  category1: state.Category.status.category1,
  category2: state.Category.status.category2,
  category3: state.Category.status.category3,
  DesignDetailStep: state.DesignCard.status.DesignDetailStep,
});

const mapDispatchToProps = (dispatch) => ({
  CreateDesignBoardRequest: (data, design_id, token) =>
    CreateDesignBoardRequest(data, design_id, token),
  GetDesignDetailRequest: (id, token) =>
    dispatch(GetDesignDetailRequest(id, token)),
  GetDesignBoardRequest: (id) => dispatch(GetDesignBoardRequest(id)),
  UpdateDesignTime: (design_id, token) =>
    dispatch(UpdateDesignTime(design_id, token)),
  UpdateCardTitleRequest: (data, token, id) =>
    dispatch(UpdateCardTitleRequest(data, token, id)),
  GetDesignCardRequest: (id, board_id) =>
    dispatch(GetDesignCardRequest(id, board_id)),
  UpdateDesignBoardRequest: (id, token, data) =>
    dispatch(UpdateDesignBoardRequest(id, token, data)),
  DeleteDesignBoardRequest: (id, board_id, token) =>
    dispatch(DeleteDesignBoardRequest(id, board_id, token)),
  GetCategoryAllRequest: () => dispatch(GetCategoryAllRequest()),
  CreateDesignRequest: (data, token) =>
    dispatch(CreateDesignRequest(data, token)),
  SearchMemberRequest: (id, data, token) =>
    dispatch(SearchMemberRequest(id, data, token)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateDesignFormContainer)
);

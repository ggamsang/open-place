import React from "react";
import NoticeDetail from "../../../components/Notice/Detail";
import { GetNoticeDetailRequest } from "../../../actions/Notice";
import { connect } from "react-redux";
import { goto } from "../../../../utils/navigator";

class NoticeDetailContainer extends React.Component {
  componentDidMount() {
    this.GetDetail(this.props.id);
  }
  Redirecting = () => {
    alert("페이지를 찾을 수 없습니다.");
    goto("BACK");
  };
  GetDetail = (id) =>
    this.props
      .GetNoticeDetailRequest(id)
      .then((rst) => !rst && this.Redirecting());

  render() {
    return (
      <React.Fragment>
        <NoticeDetail {...this.props.detail} {...this.props} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  detail: state.Notice.status.detail,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
  GetNoticeDetailRequest: (id) => dispatch(GetNoticeDetailRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoticeDetailContainer);

import React from "react";
import { connect } from "react-redux";
import { getSharerRequest } from "../../actions/Sharer/Sharer";
import { getLocationListRequest } from "../../actions/Commons/DefaultList";
import SharerDetail from "../../components/Sharer/SharerDetail";
import { likeSharerRequest } from "../../actions/Sharer/Sharer";
import { getIsMyLikeRequest } from "../../actions/User/User";
class SharerDetailContainer extends React.Component {
  async componentDidMount() {
    console.log(this.props);
    await this.props.getSharerRequest(this.props.user_id);
    this.props.getLocationListRequest();
  }
  async componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.userInfo) !== JSON.stringify(this.props.userInfo)
    ) {
      console.log(this.props.userInfo.uid, this.props.user_id, "sharer");
      this.props.getIsMyLikeRequest(
        this.props.userInfo.uid,
        this.props.user_id,
        "sharer"
      );
    }
  }
  render() {
    console.log("=====", this.props);
    return (
      <React.Fragment>
        <SharerDetail {...this.props} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  userInfo: state.Authentication.status.userInfo,
  sharer: state.User.status.sharer,
  location: state.DefaultList.status.location,
  token: state.Authentication.status.token,
  isLike: state.User.status.isLike,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getSharerRequest: (user_id) => {
      dispatch(getSharerRequest(user_id));
    },
    getLocationListRequest: () => {
      dispatch(getLocationListRequest());
    },
    likeSharerRequest: (token, data) =>
      dispatch(likeSharerRequest(token, data)),
    getIsMyLikeRequest: (user_id, like_id, type) =>
      dispatch(getIsMyLikeRequest(user_id, like_id, type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharerDetailContainer);

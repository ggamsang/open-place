import React from "react";
import { connect } from "react-redux";
import PlayGame from "components/PlayGame";


class PlayGameContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PlayGame {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
  // GameOpenRequest: (token, id) => dispatch(GameOpenRequest(token, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayGameContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     SignOutRequest: () => dispatch(SignOutRequest()),
//     getUserPointRequest: (user_id) => { dispatch(getUserPointRequest(user_id)) },
//     setUserPointRequest: (user_id, point, token) => { dispatch(setUserPointRequest(user_id, point, token)) },
//     getUserPointHistoryReqeust: (user_id, page) => { dispatch(getUserPointHistoryReqeust(user_id, page)) },
//     getUserRegisterExpRequest: (user_id, page) => { dispatch(getUserRegisterExpRequest(user_id, page)) },
//     getUserSellExpRequest: (user_id, page) => (dispatch(getUserSellExpRequest(user_id, page))),
//     getUserLikeSharerRequest: (user_id, page) => { dispatch(getUserLikeSharerRequest(user_id, page)) },
//     getUserLikeExpRequest: (user_id, page) => { dispatch(getUserLikeExpRequest(user_id, page)) },
//     getUserBoughtExpRequest: (user_id, page) => dispatch(getUserBoughtExpRequest(user_id, page)),
//   }
// };
// const mapStateToProps = (state) => {
//   return {
//     token: state.Authentication.status.token,
//     userInfo: state.Authentication.status.userInfo,
//     isLoggedIn: state.Authentication.status.isLoggedIn,
//     user_point: state.MyDetail.status.user_point,
//     point_history: state.MyDetail.status.point_history,
//     register_exp: state.MyDetail.status.register_exp,
//     sell_exp: state.MyDetail.status.sell_exp,
//     like_sharer: state.MyDetail.status.like_sharer,
//     like_exp: state.MyDetail.status.like_exp,
//   }
// };

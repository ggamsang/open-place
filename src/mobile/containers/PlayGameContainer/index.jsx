import React from "react";
import { connect } from "react-redux";
import PlayGame from "../../components/PlayGame";

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

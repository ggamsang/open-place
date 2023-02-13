import React from "react";
import Community from "desktop/components/Community";
import { connect } from "react-redux";

class CommunityContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Community {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Authentication.status.isLoggedIn,
    token: state.Authentication.status.token,
  };
};

export default connect(mapStateToProps, null)(CommunityContainer);

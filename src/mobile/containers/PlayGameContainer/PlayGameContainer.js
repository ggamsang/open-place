import React from 'react';
import { connect } from "react-redux";
import PlayGame from 'mobile/components_mobile/PlayGame';

class PlayGameContainer extends React.Component {
  render() {
    return (<React.Fragment>
      <PlayGame {...this.props} />
    </React.Fragment>);
  }
};

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  // detail: state.ExpDetail.
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayGameContainer);
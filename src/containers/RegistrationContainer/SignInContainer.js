import React from 'react';
import { connect } from "react-redux";
import { SignInRequest } from 'actions/Authentication';
import SignIn from 'components_mobile/Registration/SignIn';

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isLoggedIn) {
      window.history.back();
    }
  }
  render() {
    return (<SignIn {...this.props} //  SignInRequest={this.props.SignInRequest} />);
    />);
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  token: state.Authentication.status.token,
  valid: state.Authentication.status.valid,
});
const mapDispatchToProps = (dispatch) => ({
  SignInRequest: (data) => dispatch(SignInRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
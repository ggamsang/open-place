import React from "react";
import { connect } from "react-redux";
import { SignInRequest } from "../../actions/Authentication";
import SignIn from "../../components/Registration/SignIn";

class SignInContainer extends React.Component {
  render() {
    return <SignIn {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  SignInRequest: (data) => dispatch(SignInRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);

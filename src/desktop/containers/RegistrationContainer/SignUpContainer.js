import React from 'react';
import { connect } from "react-redux";
import { SignUpRequest } from 'actions/Registration';
import SignUp from 'desktop/components/Registration/SignUp';

class SignUpContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SignUp {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  SignUpRequest: (data) => dispatch(SignUpRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
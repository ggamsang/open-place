import React from 'react';
import { connect } from 'react-redux';
import { WriteArticleRequest, } from "actions/Community";
import { CommunityWrite, } from 'components_mobile/Community';

class CommunityWriteContainer extends React.Component {
  Write = (form) => {
    this.props.WriteArticleRequest({ token: this.props.token, form: form });
  }
  render() {
    return (<React.Fragment>
      <CommunityWrite Write={this.Write} />
    </React.Fragment>);
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
});
const mapDispatchToProps = (dispatch) => ({
  WriteArticleRequest: (obj) => dispatch(WriteArticleRequest(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityWriteContainer);
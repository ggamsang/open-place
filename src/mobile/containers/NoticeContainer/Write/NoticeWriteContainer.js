import React from 'react';
import { connect } from 'react-redux';
import { WriteArticleRequest, } from "actions/Community";
import NoticeWrite from 'components/Notice/Write';

class NoticeWriteContainer extends React.Component {
  Write = (form) => {
    this.props.WriteArticleRequest({ token: this.props.token, form: form });
  }
  render() {
    return (<React.Fragment>
      <NoticeWrite Write={this.Write} />
    </React.Fragment>);
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
});
const mapDispatchToProps = (dispatch) => ({
  WriteArticleRequest: (obj) => dispatch(WriteArticleRequest(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoticeWriteContainer);
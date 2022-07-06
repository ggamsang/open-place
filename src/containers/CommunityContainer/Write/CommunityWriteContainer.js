import React from 'react';
import { connect } from 'react-redux';
import { WriteArticleRequest, } from "actions/Community";
import CommunityWrite from 'components_mobile/Community/Write';

class CommunityWriteContainer extends React.Component {
  Write = async(form) =>
    await this.props.WriteArticleRequest({ token: this.props.token, form: form })
      .then(result =>
        {
          return result
          ? alert("게시글이 작성되었습니다.")
          : alert('게시글 작성에 실패하였습니다.')
        }
        );

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
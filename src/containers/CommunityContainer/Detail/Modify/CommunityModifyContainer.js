import React from 'react';
import { connect } from 'react-redux';
import { ModifyArticleRequest } from "actions/Community";
import CommunityWrite from 'components_mobile/Community/Write';
import CommunityModify from 'components_mobile/Community/Modify/Modify';
import { GetArticleDetailRequest } from 'actions/Community';

class CommunityWriteContainer extends React.Component {
  componentDidMount() {
    this.props.GetArticleDetailRequest(this.props.id);
  }
  Modify = async (form) =>
  {
    console.log("=====",form);
    return await this.props.ModifyArticleRequest(this.props.id,form ,this.props.token )
      .then(result => {
        return result
          ? alert("게시글이 작성되었습니다.")
          : alert('게시글 작성에 실패하였습니다.')
      }
      );
    
  }
  render() {
    return (<React.Fragment>
      <CommunityModify {...this.props} Modify={this.Modify} />
    </React.Fragment>);
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  detail: state.Community.status.detail,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
  GetArticleDetailRequest:(id)=>dispatch(GetArticleDetailRequest(id)),
  ModifyArticleRequest: (article_id,data,token) => dispatch(ModifyArticleRequest(article_id,data,token) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityWriteContainer);
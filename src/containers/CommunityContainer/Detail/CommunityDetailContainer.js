import React from 'react';
import { connect } from 'react-redux';
import Detail from "components_mobile/Community/Detail";
import { GetArticleDetailRequest } from 'actions/Community';

class CommunityDetailContainer extends React.Component {
  componentDidMount() {
    this.GetDetail(this.props.id);
  }

  GetDetail = (id) =>
    this.props.GetArticleDetailRequest(id);

  render() {
    return (<React.Fragment>
      <Detail {...this.props.detail} {...this.props} />
    </React.Fragment>);
  }
}

const mapStateToProps = state => ({
  token: state.Authentication.status.token,
  detail: state.Community.status.detail,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = dispatch => ({
  GetArticleDetailRequest: (id) => dispatch(GetArticleDetailRequest(id)),
});

export default
  connect(mapStateToProps, mapDispatchToProps)(CommunityDetailContainer);

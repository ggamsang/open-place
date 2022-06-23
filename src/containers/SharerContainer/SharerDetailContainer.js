import React from 'react';
import { connect } from 'react-redux';

import SharerDetail from 'components_mobile/Sharer/SharerDetail';

class SharerDetailContainer extends React.Component {
  componentDidMount(){
  }
  render() {
    return (
      <React.Fragment>
        <SharerDetail {...this.prps}/>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  active: state.Authentication.status.active,
  userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => {
  return ({
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(SharerDetailContainer);

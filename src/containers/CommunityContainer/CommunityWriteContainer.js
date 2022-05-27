import React from 'react';
import { CommunityWrite } from 'components_mobile/Community';

export class CommunityWriteContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CommunityWrite Outlet={this.props.Outlet} />
      </React.Fragment>
    )
  }
}

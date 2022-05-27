import React from 'react';
import { CommunityDetail } from 'components_mobile/Community';
import { Outlet } from 'react-router';

export class CommunityDetailContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CommunityDetail Outlet={Outlet} />
      </React.Fragment>
    )
  }
}

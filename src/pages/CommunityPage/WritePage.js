import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { CommunityWriteContainer } from 'containers/CommunityContainer';
import { Outlet } from 'react-router';

export class CommunityWritePage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <CommunityWriteContainer Outlet={Outlet} />
      </ClientTemplate>
    )
  }
}
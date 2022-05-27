import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { CommunityDetailContainer } from 'containers/CommunityContainer';
import { Outlet } from "react-router-dom";

export class CommunityDetailPage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <CommunityDetailContainer Outlet={Outlet} />
      </ClientTemplate>
    )
  }
}
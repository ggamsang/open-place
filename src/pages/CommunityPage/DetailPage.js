import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { CommunityDetailContainer } from 'containers/CommunityContainer';

export class CommunityDetailPage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <CommunityDetailContainer />
      </ClientTemplate>
    )
  }
}
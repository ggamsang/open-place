import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { CommunityWriteContainer } from 'containers/CommunityContainer';

export class CommunityWritePage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <CommunityWriteContainer />
      </ClientTemplate>
    )
  }
}
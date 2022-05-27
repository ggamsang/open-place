import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import CommunityContainer from 'containers/CommunityContainer';

class CommunityPage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <CommunityContainer/>
      </ClientTemplate>
    )
  }
}

export default CommunityPage;

import React from 'react';
import ClientTemplate from 'desktop/clientTemplate'
import CommunityContainer from 'desktop/containers/CommunityContainer';

class CommunityPage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <CommunityContainer />
      </ClientTemplate>
    )
  }
}

export default CommunityPage;

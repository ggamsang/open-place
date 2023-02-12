import React from 'react';
import ClientTemplate from 'mobile/clientTemplate'
import CommunityContainer from 'mobile/containers/CommunityContainer';

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

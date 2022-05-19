import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import CommunityContainer from 'containers/CommunityContainer';

class CommunityPage extends React.Component {
  render() {
    return (
      <ClientTemplate i_dont_need_footer={true}>
        <CommunityContainer />
      </ClientTemplate>
    )
  }
}

export default CommunityPage;

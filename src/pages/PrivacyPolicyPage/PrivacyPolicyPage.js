import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import PrivacyPolicyContainer from 'containers/PrivacyPolicyContainer';

class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <ClientTemplate dont_need_footer={true}>
        <PrivacyPolicyContainer />
      </ClientTemplate>
    )
  }
}

export default PrivacyPolicyPage;

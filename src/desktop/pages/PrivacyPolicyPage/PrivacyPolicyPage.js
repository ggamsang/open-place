import React from 'react';
import ClientTemplate from 'desktop/clientTemplate';

import PrivacyPolicyContainer from 'desktop/containers/PrivacyPolicyContainer';

class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <ClientTemplate  >
        <PrivacyPolicyContainer />
      </ClientTemplate>
    )
  }
}

export default PrivacyPolicyPage;

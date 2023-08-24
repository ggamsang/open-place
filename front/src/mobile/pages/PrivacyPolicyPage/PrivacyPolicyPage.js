import React from 'react';
import ClientTemplate from 'mobile/clientTemplate';

import PrivacyPolicyContainer from 'mobile/containers/PrivacyPolicyContainer';

class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <ClientTemplate i_dont_need_footer={true}>
        <PrivacyPolicyContainer />
      </ClientTemplate>
    )
  }
}

export default PrivacyPolicyPage;

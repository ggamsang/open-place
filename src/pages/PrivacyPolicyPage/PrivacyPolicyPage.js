import React from 'react';
import ClientTemplate from 'clientTemplate';

import PrivacyPolicyContainer from 'containers/PrivacyPolicyContainer';

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

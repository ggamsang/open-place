import React from 'react';
import ClientTemplate from 'mobile/clientTemplate';

import TermsOfServiceContainer from 'mobile/containers/TermsOfServiceContainer/TermsOfServiceContainer';

class TermsOfServicePage extends React.Component {
  render() {
    return (
      <ClientTemplate i_dont_need_footer={true}>
        <TermsOfServiceContainer />
      </ClientTemplate>
    )
  }
}

export default TermsOfServicePage;

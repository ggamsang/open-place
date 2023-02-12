import React from 'react';
import ClientTemplate from 'desktop/clientTemplate';

import TermsOfServiceContainer from 'desktop/containers/TermsOfServiceContainer/TermsOfServiceContainer';

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

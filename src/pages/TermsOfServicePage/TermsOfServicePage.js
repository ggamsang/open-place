import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import TermsOfServiceContainer from 'containers/TermsOfServiceContainer/TermsOfServiceContainer';

class TermsOfServicePage extends React.Component {
  render() {
    return (
      <ClientTemplate dont_need_footer={true}>
        <TermsOfServiceContainer />
      </ClientTemplate>
    )
  }
}

export default TermsOfServicePage;

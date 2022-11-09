import React from "react";
import TermsOfServiceContainer from "../../containers/TermsOfServiceContainer";
import MobilePageLayout from "../../MobilePageLayout";

class TermsOfServicePage extends React.Component {
  render() {
    return (
      <MobilePageLayout i_dont_need_footer={true}>
        <TermsOfServiceContainer />
      </MobilePageLayout>
    );
  }
}

export default TermsOfServicePage;

import React from "react";
import PrivacyPolicyContainer from "../../containers/PrivacyPolicyContainer";
import MobilePageLayout from "../../MobilePageLayout";

class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <MobilePageLayout i_dont_need_footer={true}>
        <PrivacyPolicyContainer />
      </MobilePageLayout>
    );
  }
}

export default PrivacyPolicyPage;

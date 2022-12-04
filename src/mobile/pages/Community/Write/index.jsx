import React from "react";
import CommunityWriteContainer from "../../../containers/CommunityContainer/Write";
import NeedToLogin from "../../../verify";
import MobilePageLayout from "../../../MobilePageLayout";

function CommunityWritePage() {
  return NeedToLogin(
    <MobilePageLayout>
      <CommunityWriteContainer />
    </MobilePageLayout>
  );
}
export default CommunityWritePage;

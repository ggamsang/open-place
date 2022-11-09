import ModifySharerContainer from "../../../containers/SharerContainer/ModifySharerContainer";
import NeedToLogin from "../../../verify";
import React from "react";
import MobilePageLayout from "../../../MobilePageLayout";

function CreateSharerPage() {
  return NeedToLogin(
    <MobilePageLayout>
      <ModifySharerContainer />
    </MobilePageLayout>
  );
}

export default CreateSharerPage;

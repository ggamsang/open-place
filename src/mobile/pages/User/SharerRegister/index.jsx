import CreateSharerContainer from "../../../containers/SharerContainer/CreateSharerContainer";
import NeedToLogin from "../../../verify";
import React from "react";
import MobilePageLayout from "../../../MobilePageLayout";

function CreateSharerPage() {
  return NeedToLogin(
    <MobilePageLayout>
      <CreateSharerContainer />
    </MobilePageLayout>
  );
}

export default CreateSharerPage;

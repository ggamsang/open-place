import NeedToLogin from "../../../verify";
import React from "react";
import MobilePageLayout from "../../../MobilePageLayout";
import ModifyUserContainer from "../../../containers/UserContainer/ModifyUserContainer";

function CreateSharerPage() {
  return NeedToLogin(
    <MobilePageLayout>
      <ModifyUserContainer />
    </MobilePageLayout>
  );
}

export default CreateSharerPage;

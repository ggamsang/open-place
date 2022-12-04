import { Outlet } from "react-router-dom";
import NeedToLogin from "../../../verify";
import CreateExpContainer from "../../../containers/ExpContainer/CreateExpContainer";
import MobilePageLayout from "../../../MobilePageLayout";
import React from "react";

function CreateExpPage() {
  return NeedToLogin(
    <MobilePageLayout>
      <CreateExpContainer outlet={Outlet} />
    </MobilePageLayout>
  );
}

export default CreateExpPage;

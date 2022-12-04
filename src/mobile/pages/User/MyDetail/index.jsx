import React from "react";
import MyDetailContainer from "../../../containers/UserContainer/MyDetailContainer";
import { Outlet } from "react-router-dom";
import NeedToLogin from "../../../verify";
import MobilePageLayout from "../../../MobilePageLayout";

function MyDetailPage() {
  return NeedToLogin(
    <MobilePageLayout>
      <MyDetailContainer Outlet={Outlet} />
    </MobilePageLayout>
  );
}

export default MyDetailPage;

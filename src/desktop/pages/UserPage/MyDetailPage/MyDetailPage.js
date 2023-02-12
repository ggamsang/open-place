import React from "react";
import ClientTemplate from "desktop/clientTemplate";
import MyDetailContainer from "desktop/containers/UserContainer/MyDetailContainer";
import { Outlet } from "react-router-dom";
import NeedToLogin from "Verification/NeedToLogin";

function MyDetailPage() {
  return NeedToLogin(
    <ClientTemplate>
      <MyDetailContainer Outlet={Outlet} />
    </ClientTemplate>
  );
}

export default MyDetailPage;

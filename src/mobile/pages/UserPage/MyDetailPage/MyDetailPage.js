import React from 'react';
import ClientTemplate from 'mobile/clientTemplate';
import MyDetailContainer from 'mobile/containers/UserContainer/MyDetailContainer';
import { Outlet } from "react-router-dom";
import NeedToLogin from 'Verification/NeedToLogin';

function MyDetailPage() {
  return (
    NeedToLogin(<ClientTemplate>
      <MyDetailContainer Outlet={Outlet} />
    </ClientTemplate>));
}

export default MyDetailPage;
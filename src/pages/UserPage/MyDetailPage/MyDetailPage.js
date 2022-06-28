import React from 'react';
import ClientTemplate from 'clientTemplate';
import MyDetailContainer from 'containers/UserContainer/MyDetailContainer';
import { Outlet } from "react-router-dom";
import NeedToLogin from 'Verification/NeedToLogin';

function MyDetailPage() {
  return (
    NeedToLogin(<ClientTemplate>
      <MyDetailContainer Outlet={Outlet} />
    </ClientTemplate>));
}

export default MyDetailPage;
import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate';
import { Outlet } from "react-router-dom";

import ModifyUserContainer from 'containers/UserContainer/ModifyUserContainer';
import NeedToLogin from 'Verification/NeedToLogin';

class ModifyUserPage extends Component {
  render() {
    return (NeedToLogin(
      <ClientTemplate>
        <ModifyUserContainer />
      </ClientTemplate>)
    );
  }
}

export default ModifyUserPage;
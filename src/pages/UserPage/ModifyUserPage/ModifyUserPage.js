import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate';
import { Outlet } from "react-router-dom";

import ModifyUserContainer from 'containers/UserContainer/ModifyUserContainer';

class ModifyUserPage extends Component {
  render() {
    return (
      <ClientTemplate>
        <ModifyUserContainer />
      </ClientTemplate>
    );
  }
}

export default ModifyUserPage;
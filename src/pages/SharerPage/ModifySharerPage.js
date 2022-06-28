import React, { Component } from 'react';
import ModifySharerContainer from 'containers/SharerContainer/ModifySharerContainer';
import ClientTemplate from 'clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';


class ModifySharerPage extends Component {
  render() {
    return (
      NeedToLogin(<ClientTemplate>
        <ModifySharerContainer />
      </ClientTemplate>
      ));
  }
}

export default ModifySharerPage;
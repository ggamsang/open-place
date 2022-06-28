import React, { Component } from 'react';
import CreateSharerContainer from 'containers/SharerContainer/\bCreateSharerContainer';
import ClientTemplate from 'clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';


class CreateSharerPage extends Component {
  render() {
    return (
      NeedToLogin(<ClientTemplate>
        <CreateSharerContainer />
      </ClientTemplate>
      ));
  }
}

export default CreateSharerPage;
import React, { Component } from 'react';
import ModifySharerContainer from 'containers/SharerContainer/ModifySharerContainer';
import ClientTemplate from 'clientTemplate/ClientTemplate';

class ModifySharerPage extends Component {
    render() {
      return (
          <ClientTemplate>
            <ModifySharerContainer/>
          </ClientTemplate>
      );
    }
  }
  
  export default ModifySharerPage;
import React, { Component } from 'react';
import CreateSharerContainer from 'containers/SharerContainer/\bCreateSharerContainer';
import ClientTemplate from 'clientTemplate/ClientTemplate';

class CreateSharerPage extends Component {
    render() {
      return (
          <ClientTemplate>
            <CreateSharerContainer/>
          </ClientTemplate>
      );
    }
  }
  
  export default CreateSharerPage;
import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { Outlet } from "react-router-dom";
import CreateExpContainer from 'containers/ExpContainer/CreateExpContainer';

class CreateExpPage extends Component {
    render() {
      return (
          <ClientTemplate>
            <CreateExpContainer outlet={Outlet}/>
          </ClientTemplate>
      );
    }
  }
  
  export default CreateExpPage;
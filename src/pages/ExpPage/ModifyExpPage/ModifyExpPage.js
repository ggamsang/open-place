import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { Outlet } from "react-router-dom";
import ModifyExpContainer from 'containers/ExpContainer/ModifyExpContainer';

class ModifyExpPage extends Component {
    render() {
      return (
          <ClientTemplate>
            <ModifyExpContainer/>
          </ClientTemplate>
      );
    }
  }
  
  export default ModifyExpPage;
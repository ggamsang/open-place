import React, { Component } from 'react';
import ExpDetailContainer from 'containers/ExpContainer/ExpDetailContainer';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { Outlet } from "react-router-dom";

class ExpDetailPage extends Component {
    render() {
      return (
          <ClientTemplate>
            <ExpDetailContainer outlet={Outlet}/>
          </ClientTemplate>
      );
    }
  }
  
  export default ExpDetailPage;
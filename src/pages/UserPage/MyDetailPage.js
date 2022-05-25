import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate'
import MyDetailContainer from 'containers/UserContainer/MyDetailContainer';
import { Outlet } from "react-router-dom";

class MyDetailPage extends Component {
  render() {
    return (
      <ClientTemplate>
        <MyDetailContainer Outlet={Outlet}/>
      </ClientTemplate>
    );
  }
}

export default MyDetailPage;
import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate'
import MyDetailContainer from 'containers/UserContainer/MyDetailContainer';

class MyDetailPage extends Component {
  render() {
    return (
      <ClientTemplate>
        <MyDetailContainer />
      </ClientTemplate>
    );
  }
}

export default MyDetailPage;
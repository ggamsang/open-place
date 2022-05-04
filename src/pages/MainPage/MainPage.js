import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate'
import MainContainer from 'containers/MainContainer/MainContainer'

class MainPage extends Component {
  render() {
    return (<ClientTemplate>
      <MainContainer {...this.props} />
    </ClientTemplate>)
  }
}

export default MainPage;

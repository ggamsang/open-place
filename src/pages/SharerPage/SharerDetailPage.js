import React, { Component } from 'react';
import SharerDetailContainer from 'containers/SharerContainer/SharerDetailContainer';
import ClientTemplate from 'clientTemplate';


class SharerDetailPage extends Component {
    render() {
      return (
          <ClientTemplate>
            <SharerDetailContainer/>
          </ClientTemplate>
      );
    }
  }
  
  export default SharerDetailPage;
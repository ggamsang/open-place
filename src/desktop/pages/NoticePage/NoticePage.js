import React from 'react';
import ClientTemplate from 'desktop/clientTemplate'
import NoticeContainer from 'desktop/containers/NoticeContainer';

class NoticePage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <NoticeContainer />
      </ClientTemplate>
    )
  }
}

export default NoticePage;

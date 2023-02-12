import React from 'react';
import ClientTemplate from 'mobile/clientTemplate'
import NoticeContainer from 'mobile/containers/NoticeContainer';

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

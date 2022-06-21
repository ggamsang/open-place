import React from 'react';
import ClientTemplate from 'clientTemplate'
import NoticeContainer from 'containers/NoticeContainer';

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

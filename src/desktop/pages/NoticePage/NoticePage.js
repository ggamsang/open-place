import React from "react";
import ClientTemplate from "desktop/clientTemplate";
import NoticeListContainer from "desktop/containers/NoticeListContainer";

class NoticePage extends React.Component {
  render() {
    return (
      <ClientTemplate>
        <NoticeListContainer />
      </ClientTemplate>
    );
  }
}

export default NoticePage;

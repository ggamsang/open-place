import React, { Component } from "react";
import DesignListContainer from "containers/ExpItem/DesignListContainer";
import DesignListContainer_mobile from "containers/ExpItem/DesignListContainer_mobile";
import ClientTemplate from "templates/ClientTemplate";
import { isMobile } from "constant";

class MakeExpListPage extends Component {
  render() {
    return (
      <ClientTemplate>
        {isMobile() ? (
          <DesignListContainer_mobile
          // history={this.props.history}
          />
        ) : (
          <DesignListContainer
            cate1={3}
            // history={this.props.history}
          />
        )}
      </ClientTemplate>
    );
  }
}

export default MakeExpListPage;

import React, { Component } from "react";
import CreateDesignContainer from "containers/ExpItem/CreateDesignContainer";
import ClientTemplate from "templates/ClientTemplate";

class CreateDesignPage extends Component {
  render() {
    return (
      <ClientTemplate>
        <CreateDesignContainer id={this.props.match.params.id} />
      </ClientTemplate>
    );
  }
}

export default CreateDesignPage;

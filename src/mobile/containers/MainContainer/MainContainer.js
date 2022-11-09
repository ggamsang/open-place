import React, { Component } from 'react';
import Main from 'components/Main/Main'
import MainMobile from "components_mobile/Main/Main";

class MainContainer extends Component {
  render() {
    return (<React.Fragment>
      {window.innerWidth > 500
        ? <Main />
        : <MainMobile />}
    </React.Fragment>)
  }
}

export default MainContainer;

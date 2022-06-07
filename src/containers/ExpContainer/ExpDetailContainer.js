import React, { Component } from 'react';
import ExpDetail from 'components_mobile/Exp/ExpDetail';

class ExpDetailContainer extends Component {
    render() {
      return (
          <React.Fragment>
            <ExpDetail outlet={this.props.outlet}/>
          </React.Fragment>
      );
    }
  }
  
  export default ExpDetailContainer;
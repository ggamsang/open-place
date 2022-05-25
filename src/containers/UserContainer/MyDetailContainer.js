import React, { Component } from 'react';
import MyDetail from 'components_mobile/User/MyDetail';
class MyDetailContainer extends Component {
    render() {
      return (
          <React.Fragment>
            <MyDetail Outlet={this.props.Outlet}/>
          </React.Fragment>
      );
    }
  }
  
  export default MyDetailContainer;
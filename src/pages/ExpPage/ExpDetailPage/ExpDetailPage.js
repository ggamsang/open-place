import React, { Component } from 'react';
import ExpDetailContainer from 'containers/ExpContainer/ExpDetailContainer';
import ClientTemplate from 'clientTemplate';

import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const WrapperFunc = () =>{
  let params = useParams();
  return(
    <ClientTemplate>
      <ExpDetailContainer item_id={params.id} outlet={Outlet}/>
    </ClientTemplate>
  )
} 
class ExpDetailPage extends Component {
    render() {
      return (
          <WrapperFunc/>
      );
    }
  }
  
  export default ExpDetailPage;
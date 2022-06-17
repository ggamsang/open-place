import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate';

import { Outlet } from "react-router-dom";
import ModifyExpContainer from 'containers/ExpContainer/ModifyExpContainer';

import { useParams } from "react-router-dom";

const WrapperFunc = ()=>{
    let params = useParams();
    return(
      <ClientTemplate>
        <ModifyExpContainer item_id={params.id}/>
      </ClientTemplate>
    )
}
class ModifyExpPage extends Component {
    render() {
      return (
        <WrapperFunc/>
      );
    }
  }
  
  export default ModifyExpPage;
import React, { Component } from 'react';
import ClientTemplate from 'clientTemplate';
import ModifyExpContainer from 'containers/ExpContainer/ModifyExpContainer';
import { useParams } from "react-router-dom";
import NeedToLogin from 'Verification/NeedToLogin';

const WrapperFunc = () => {
  let params = useParams();
  return (
    NeedToLogin(<ClientTemplate>
      <ModifyExpContainer item_id={params.id} />
    </ClientTemplate>)
  )
}
class ModifyExpPage extends Component {
  render() {
    return (
      <WrapperFunc />
    );
  }
}

export default ModifyExpPage;
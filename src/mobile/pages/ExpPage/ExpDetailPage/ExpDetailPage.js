import React from 'react';
import ExpDetailContainer from 'mobile/containers/ExpContainer/ExpDetailContainer';
import ClientTemplate from 'mobile/clientTemplate';
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function ExpDetailPage() {
  let params = useParams();
  return (<ClientTemplate>
    <ExpDetailContainer item_id={params.id} outlet={Outlet} />
  </ClientTemplate>)
}

export default ExpDetailPage;

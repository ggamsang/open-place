import React from 'react';
import SharerDetailContainer from 'desktop/containers/SharerContainer/SharerDetailContainer';
import ClientTemplate from 'desktop/clientTemplate';
import { useParams } from "react-router-dom";

function SharerDetailPage() {
  let params = useParams();
  return (
    <ClientTemplate>
      <SharerDetailContainer user_id={params.id}/>
    </ClientTemplate>
  );

}

export default SharerDetailPage;
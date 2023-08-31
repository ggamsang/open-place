import React from "react";
import ExpDetailContainer from "mobile/containers/ExpContainer/ExpDetailContainer";
import ClientTemplate from "mobile/clientTemplate";
import { useParams } from "react-router-dom";

function ExpDetailPage() {
  let params = useParams();

  return (
    <ClientTemplate>
      <ExpDetailContainer item_id={params.id} />
    </ClientTemplate>
  );
}

export default ExpDetailPage;

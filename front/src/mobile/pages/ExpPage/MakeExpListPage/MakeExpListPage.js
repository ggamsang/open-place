import React from "react";
import ClientTemplate from "mobile/clientTemplate";
import MakeExpListContainer from "mobile/containers/ListContainer/ExpListContainer/MakeExpListContainer";

function MakeExpListPage() {
  return (
    <ClientTemplate i_dont_need_footer={true}>
      <MakeExpListContainer />
    </ClientTemplate>
  );
}
export default MakeExpListPage;

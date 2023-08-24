import React from "react";
import ClientTemplate from "mobile/clientTemplate";
import PlayExpListContainer from "mobile/containers/ListContainer/ExpListContainer/PlayExpListContainer";

function ExpListPage() {
  return (
    <ClientTemplate i_dont_need_footer={true}>
      <PlayExpListContainer />
    </ClientTemplate>
  );
}
export default ExpListPage;

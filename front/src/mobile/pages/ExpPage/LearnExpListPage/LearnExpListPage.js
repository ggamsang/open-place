import React from "react";
import ClientTemplate from "mobile/clientTemplate";
import LearnExpListContainer from "mobile/containers/ListContainer/ExpListContainer/LearnExpListContainer";

function LearnExpListPage() {
  return (
    <ClientTemplate i_dont_need_footer={true}>
      <LearnExpListContainer />
    </ClientTemplate>
  );
}
export default LearnExpListPage;

import React from "react";
import { useParams } from "react-router";

import PlayExpListContainer from "../../../containers/ListContainer/ExpListContainer/PlayExpListContainer";
import MobilePageLayout from "../../../MobilePageLayout";

function PlayExpListPage() {
  let params = useParams();

  return (
    <MobilePageLayout i_dont_need_footer={true}>
      <PlayExpListContainer sort={params.sort} keyword={params.keyword} />
    </MobilePageLayout>
  );
}
export default PlayExpListPage;

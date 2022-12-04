import React from "react";
import { useParams } from "react-router";
import LearnExpListContainer from "../../../containers/ListContainer/ExpListContainer/LearnExpListContainer";
import MobilePageLayout from "../../../MobilePageLayout";

function LearnExpListPage() {
  let params = useParams();

  return (
    <MobilePageLayout i_dont_need_footer={true}>
      <LearnExpListContainer sort={params.sort} keyword={params.keyword} />
    </MobilePageLayout>
  );
}
export default LearnExpListPage;

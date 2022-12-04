import React from "react";
import ExpDetailContainer from "../../../containers/ExpContainer/ExpDetailContainer";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import MobilePageLayout from "../../../MobilePageLayout";

function ExpDetailPage() {
  let params = useParams();
  return (
    <MobilePageLayout>
      <ExpDetailContainer item_id={params.id} outlet={Outlet} />
    </MobilePageLayout>
  );
}

export default ExpDetailPage;

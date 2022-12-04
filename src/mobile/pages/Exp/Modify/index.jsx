import NeedToLogin from "../../../verify";
import ModifyExpContainer from "../../../containers/ExpContainer/ModifyExpContainer";
import MobilePageLayout from "../../../MobilePageLayout";
import { useParams } from "react-router-dom";
import React from "react";

function ModifyExpPage() {
  let params = useParams();

  return NeedToLogin(
    <MobilePageLayout>
      <ModifyExpContainer item_id={params.id} />
    </MobilePageLayout>
  );
}

export default ModifyExpPage;

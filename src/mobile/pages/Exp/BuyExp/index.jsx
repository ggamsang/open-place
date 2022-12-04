import BuyContainer from "../../../containers/BuyContainer";
import { useParams } from "react-router";
import NeedToLogin from "../../../verify";
import MobilePageLayout from "../../../MobilePageLayout";
import React from "react";

function BuyExpPage() {
  const params = useParams();
  return NeedToLogin(
    <MobilePageLayout>
      <BuyContainer item_id={params.id} />
    </MobilePageLayout>
  );
}

export default BuyExpPage;

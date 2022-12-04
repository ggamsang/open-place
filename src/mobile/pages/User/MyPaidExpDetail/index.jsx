import BuyExpDetailContainer from "../../../containers/MyDetail/BuyExpDetailContainer";
import { useParams } from "react-router";
// import NeedToLogin from "../../../verify";
import MobilePageLayout from "../../../MobilePageLayout";
import React from "react";

function MyPaidExpDetailPage() {
  const params = useParams();
  return (
    // NeedToLogin()
    <MobilePageLayout>
      <BuyExpDetailContainer payment_id={params.id} />
    </MobilePageLayout>
  );
}

export default MyPaidExpDetailPage;

import React from "react";
import PageLayout from "../../../components/PageLayout";
import NeedToLogin from "../../../mobile/verify";
import BuyExp from "../../../components/Exp/Buy";
import { useParams } from "react-router-dom";

export default function BuyExpPage() {
  return NeedToLogin(
    <PageLayout>
      <BuyExp item_id={useParams().id} />
    </PageLayout>
  );
}

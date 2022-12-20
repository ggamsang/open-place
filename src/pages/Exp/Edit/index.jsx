import React from "react";
import { useParams } from "react-router-dom";
import ExpEdit from "../../../components/Exp/Edit";
import PageLayout from "../../../components/PageLayout";
import NeedToLogin from "../../../mobile/verify";

const ExpEditPage = () => {
  return NeedToLogin(
    <PageLayout>
      <ExpEdit item_id={useParams().id} />
    </PageLayout>
  );
};

export default ExpEditPage;

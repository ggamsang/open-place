import React from "react";
import { useParams } from "react-router-dom";
import ExpDetail from "../../../components/Exp/Detail";
import PageLayout from "../../../components/PageLayout";

const ExpDetailPage = () => {
  return (
    <PageLayout>
      <ExpDetail item_id={useParams().id} />
    </PageLayout>
  );
};

export default ExpDetailPage;

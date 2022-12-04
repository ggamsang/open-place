import React from "react";
import { useParams } from "react-router-dom";
import NoticeDetailContainer from "../../../containers/NoticeContainer/Detail";
import MobilePageLayout from "../../../MobilePageLayout";

export default function NoticeDetailPage() {
  const params = useParams();
  const { id } = params;

  return (
    <MobilePageLayout>
      <NoticeDetailContainer id={id} />
    </MobilePageLayout>
  );
}

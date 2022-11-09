import React from "react";
import { useParams } from "react-router-dom";
import MobilePageLayout from "../../../MobilePageLayout";
import CommunityDetailContainer from "../../../containers/CommunityContainer/Detail";

export function CommunityDetailPage() {
  const params = useParams();
  const { id } = params;

  return (
    <MobilePageLayout>
      <CommunityDetailContainer id={id} />
    </MobilePageLayout>
  );
}
export default CommunityDetailPage;

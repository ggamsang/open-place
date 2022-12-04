import React from "react";
import { useParams } from "react-router-dom";
import CommunityModifyContainer from "../../../containers/CommunityContainer/Detail/Modify";
import NeedToLogin from "../../../verify";
import MobilePageLayout from "../../../MobilePageLayout";

export default function CommunityModifyPage() {
  const params = useParams();
  const { id } = params;
  return NeedToLogin(
    <MobilePageLayout>
      <CommunityModifyContainer id={id} />
    </MobilePageLayout>
  );
}

import SharerDetailContainer from "../../../containers/SharerContainer/SharerDetailContainer";
import NeedToLogin from "../../../verify";
import React from "react";
import MobilePageLayout from "../../../MobilePageLayout";
import { useParams } from "react-router-dom";

function CreateSharerPage() {
  let params = useParams();

  return NeedToLogin(
    <MobilePageLayout>
      <SharerDetailContainer user_id={params.id} />
    </MobilePageLayout>
  );
}

export default CreateSharerPage;

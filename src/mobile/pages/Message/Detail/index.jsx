import { useParams } from "react-router";
import MessageDetailContainer from "../../../containers/MessageDetailContainer";
import NeedToLogin from "../../../verify";
import MobilePageLayout from "../../../MobilePageLayout";
import React from "react";

function MessageDetailPage() {
  const params = useParams();
  return NeedToLogin(
    <MobilePageLayout>
      <MessageDetailContainer group_id={params.id} />
    </MobilePageLayout>
  );
}
export default MessageDetailPage;

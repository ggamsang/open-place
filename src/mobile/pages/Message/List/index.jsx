import MessageGroupContainer from "../../../containers/MessageGroupContainer";
import NeedToLogin from "../../../verify";
import MobilePageLayout from "../../../MobilePageLayout";
import React from "react";

export default function MessageListPage() {
  return NeedToLogin(
    <MobilePageLayout>
      <MessageGroupContainer />
    </MobilePageLayout>
  );
}

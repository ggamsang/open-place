import React from "react";
import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import * as styled from "./styles";
import NeedToLogin from "../../../mobile/verify";

const CommunityWriteComponent = () => {
  const [signed, setSigned] = useState(true);
  const write = () => {};

  return (
    <styled.Container>
      <styled.ButtonWrapper>
        <styled.UploadPostButton
          disabled={!signed}
          active={signed}
          onClick={() => write()}
        >
          <span>게시글 작성</span>
        </styled.UploadPostButton>
      </styled.ButtonWrapper>
    </styled.Container>
  );
};

const CommunityWritePage = () => {
  return NeedToLogin(
    <PageLayout>
      <CommunityWriteComponent />
    </PageLayout>
  );
};

export default CommunityWritePage;

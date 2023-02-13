import React from "react";
import * as styled from "./styles";
import ArticleListContainer from "desktop/containers/ArticleListContainer";
import { goto } from "navigator";

class Community extends React.Component {
  render() {
    const { isLoggedIn: signed } = this.props;
    return (
      <styled.Container>
        <styled.BoardTitleDiv>
          <styled.FreeBoard>자유게시판</styled.FreeBoard>
        </styled.BoardTitleDiv>

        <ArticleListContainer />

        <styled.ButtonWrapper>
          <styled.UploadPostButton
            disabled={!signed}
            active={signed}
            onClick={() => goto("WRITE")}
          >
            <span>게시글 작성</span>
          </styled.UploadPostButton>
        </styled.ButtonWrapper>
      </styled.Container>
    );
  }
}

export default Community;

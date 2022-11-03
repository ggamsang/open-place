import React from 'react';
import * as styled from './styles';
import Header from '../../../components/desktop/ListPage-Header';
// import Header from '../../../components/Header';
// import Navbar from '../../../components/ListPage-Navbar';
// import Footer from '../../../components/Footer';

const OtherPost = () => {
  return(
    <styled.OtherPost>
      <div>제목예시</div>
      <div></div>
      <div>국민대 CRC</div>
      <div>1달 전</div>
    </styled.OtherPost>
  )
}

const File = () => {
  return(
    <styled.FileBox>
      <styled.FileIconDiv>
        <styled.FileIcon />
      </styled.FileIconDiv>
      <styled.FileName>
        <div>design.psd</div>
        <styled.PercentBar>
          <div></div>
          <div></div>
          <span>50%</span>
        </styled.PercentBar>
      </styled.FileName>
    </styled.FileBox>
  )
}

const CommunityPage = () => {
  return (
    <styled.Container>
      <Header />
      <Navbar />
      <styled.CategoryBox>
        <div>자유게시판</div>
        <div>공지사항</div>
      </styled.CategoryBox>
      <styled.BoardTitleDiv>
        <styled.FreeBoard>자유게시판</styled.FreeBoard>
        <styled.SortAs>
          <span>최신순</span>
          <span>등록순</span>
        </styled.SortAs>
      </styled.BoardTitleDiv>
      <styled.TitleUserDate>
        <span>제목</span>
        <span>글쓴이</span>
        <span>작성일</span>
      </styled.TitleUserDate>
      <styled.HotBoard>
        <styled.Wrapper1>
          <div>제목예시</div>
          <div>인기글</div>
          <div></div>
          <div>국민대 CRC</div>
          <div>1달 전</div>
        </styled.Wrapper1>
        <styled.Wrapper2>
          <styled.Article>
            <styled.ArticleBox1>
              <div>머릿말</div>
              <div />
              <div>질문</div>
            </styled.ArticleBox1>
            <styled.ArticleBox2>
              <div>작성자</div>
              <div />
              <div>작성자 닉네임</div>
            </styled.ArticleBox2>
            <styled.ArticleBox3>
              <div>내용</div>
              <div />
              <div>내용 예시</div>
            </styled.ArticleBox3>
            <styled.AddCommentButton>댓글달기</styled.AddCommentButton>
          </styled.Article>
          <styled.AddedFiles>
            <styled.FolderIcon />
            <div style={{marginBottom: "13px"}}>첨부파일</div>
            <File />
            <File />
            <File />
          </styled.AddedFiles>
        </styled.Wrapper2>
      </styled.HotBoard>

      <styled.AnswerBoard>
        <styled.Wrapper3>
          <div>답변</div>
          <div></div>
          <div>국민대 CRC</div>
          <div>1달 전</div>
        </styled.Wrapper3>
        <styled.AnswerBox>
          <styled.ArticleBox1>
            <div>머릿말</div>
            <div />
            <div>답변</div>
          </styled.ArticleBox1>
          <styled.ArticleBox2>
            <div>작성자</div>
            <div />
            <div>작성자 닉네임</div>
          </styled.ArticleBox2>
          <styled.ArticleBox4>
            <div>내용</div>
            <div />
            <div>내용을 입력하세요</div>
          </styled.ArticleBox4>
          <styled.AddCommentButton2>댓글 등록</styled.AddCommentButton2>
        </styled.AnswerBox>
      </styled.AnswerBoard>
      <OtherPost />
      <OtherPost />
      <OtherPost />
      <styled.UploadPostButton>
        <div>게시글 작성</div>
      </styled.UploadPostButton>
      <Footer />
    </styled.Container>
  );
};

export default CommunityPage;

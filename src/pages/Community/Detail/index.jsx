import React, { useState, useEffect } from "react";
import PageLayout from "../../../components/PageLayout";
import { goto } from "../../../utils/navigator";
import { GetSession } from "../../../mobile/modules";
import { TokenName, GET } from "../../../constants";
import * as styled from "./styles";
import host from "../../../config";
import DateFormat from "../../../mobile/modules/DateFormat";
import { useParams } from "react-router-dom";

const GetArticleDetailRequest = (id) => {
  const url = `${host}/community/${id}`;
  return fetch(url, GET)
    .then((res) => res.json())
    .then((data) => data?.detail)
    .catch((err) => null);
};
const OtherPost = ({ key, title, nickname, create_time, url }) => {
  return (
    <styled.OtherPost key={key} url={url}>
      <div>{title}</div>
      <div></div>
      <div>{nickname}</div>
      <div>{DateFormat(create_time)}</div>
    </styled.OtherPost>
  );
};
const File = () => {
  return (
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
  );
};
const CommunityDetailPage = () => {
  const [signed, setSigned] = useState(false);
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    // verification
    GetSession(TokenName)
      .then((token) => {
        if (token) setSigned(true);
        else setSigned(false);
      })
      .catch((e) => {
        setSigned(false);
      });

    // get article detail
    GetArticleDetailRequest(id).then((data) => setDetail(data));
  }, []);

  // addfile : null
  // create_time : "2022-11-04T13:22:33.000Z"
  // files : "[null]"
  // head : ""
  // nickname : "aaa"
  // text : "<p>ㄴㄴㄴㄴ</p>"
  // title :"ㄴㄴㄴㄴㄴ"
  // uid : 57
  // update_time : "2022-11-04T13:22:33.000Z"
  // user_id: 24

  console.log(detail);

  return (
    <PageLayout>
      {detail ? (
        <styled.Container>
          <styled.CategoryBox>
            <button className="active">자유게시판</button>
            <button onClick={() => goto("NOTICE")}>공지사항</button>
          </styled.CategoryBox>
          <styled.BoardTitleDiv>
            <styled.FreeBoard>자유게시판</styled.FreeBoard>
          </styled.BoardTitleDiv>

          <styled.HotBoard>
            <styled.Wrapper1>
              <div>{detail.title}</div>
              <div>인기글</div>
              <div></div>
              <div>{detail.nickname}</div>
              <div>{DateFormat(detail.create_time)}</div>
            </styled.Wrapper1>
            <styled.Wrapper2>
              <styled.Article>
                {detail.head && (
                  <styled.ArticleBox1>
                    <div>머릿말</div>
                    <div />
                    <div>{detail.head}</div>
                  </styled.ArticleBox1>
                )}
                <styled.ArticleBox2>
                  <div>작성자</div>
                  <div />
                  <div>{detail.nickname}</div>
                </styled.ArticleBox2>
                <styled.ArticleBox3>
                  <div>내용</div>
                  <div />
                  <div dangerouslySetInnerHTML={{ __html: detail.text }}></div>
                </styled.ArticleBox3>
                <styled.AddCommentButton>댓글달기</styled.AddCommentButton>
              </styled.Article>
              <styled.AddedFiles>
                <styled.FolderIcon />
                <div style={{ marginBottom: "13px" }}>첨부파일</div>
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
      ) : (
        <React.Fragment>{"verifying..."}</React.Fragment>
      )}
    </PageLayout>
  );
};

export default CommunityDetailPage;

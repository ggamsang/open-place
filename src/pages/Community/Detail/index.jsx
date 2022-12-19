import React, { useState, useEffect } from "react";
import PageLayout from "../../../components/PageLayout";
import { goto } from "../../../utils/navigator";
import { GetSession } from "../../../mobile/modules";
import { TokenName, GET, POST, authGET } from "../../../constants";
import * as styled from "./styles";
import host from "../../../config";
import DateFormat from "../../../mobile/modules/DateFormat";
import { useParams } from "react-router-dom";

const CommentListComponent = ({ id }) => {
  const [list, setList] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    GetArticleCommentRequest(id).then(setList);
  }, []);

  const GetArticleCommentRequest = (id) => {
    console.log(`${host}/comment/ofarticle/${id}`);
    const url = `${host}/comment/ofarticle/${id}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((res) => res?.detail || [])
      .catch((_) => []);
  };
  const writeComment = () => {
    // const comment = document.getElementById("comment-textarea").value || "";

    GetSession(TokenName)
      .then((token) => {
        function CheckTokenRequest(token) {
          return fetch(`${host}/user/check`, authGET(token))
            .then((res) => res.json())
            .then((res) => {
              console.log("-LOG-", res);
              if (res.success) {
                return { token: token, ...res.info };
              }
              return { token: token };
            });
        }
        CheckTokenRequest(token).then((auth) => {
          const form = {
            user_id: auth?.uid,
            comment: comment,
            type: "COMMUNITY",
            where: id,
          };
          const CreateArticleCommentRequest = (token, form) => {
            return fetch(`${host}/comment`, POST(token, form))
              .then((res) => res.json())
              .then((res) => res)
              .catch((_) => false);
          };
          CreateArticleCommentRequest(auth.token, form).then((res) =>
            res
              ? GetArticleCommentRequest(id).then(setList)
              : alert("댓글작성 실패")
          );
        });
      })
      .catch((e) => {
        console.error("토큰정보를가져오지못하였습니다.");
        alert("로그인해주세요.");
      });

    document.getElementById("comment-textarea").value = "";
    setComment("");
  };

  return (
    <React.Fragment>
      <styled.CommentInputWrapper>
        <styled.CommentInput
          id="comment-textarea"
          placeholder="댓글을 입력해주세요."
          // onKeyDown={(e) => {
          //   console.log(e.target.value);
          //   setComment(e.target.value);
          //   // console.log(comment);
          // }}
          onChange={(e) => setComment(e.target.value)}
        />

        <styled.AddCommentButton
          disabled={comment === ""}
          onClick={() =>
            comment !== "" ? writeComment() : alert("댓글을 입력해주세요.")
          }
        >
          댓글달기
        </styled.AddCommentButton>
      </styled.CommentInputWrapper>

      <styled.CommentsWrapper>
        {/* <CommentListComponent id={id} /> */}
        {list.length > 0 &&
          list.map(
            (
              { comment, s_img, nick_name, update_time, create_time },
              index
            ) => (
              <styled.CommentDiv key={index} url={s_img}>
                <div></div>
                <div>{comment}</div>
                <div>
                  <img src={s_img} />
                </div>
                <div>{nick_name}</div>
                <div>
                  {DateFormat(
                    update_time > create_time ? update_time : create_time
                  )}
                  {update_time > create_time ? "(수정됨)" : ""}
                </div>
              </styled.CommentDiv>
            )
          )}
      </styled.CommentsWrapper>
    </React.Fragment>
  );
};

// const OtherPost = ({ key, title, nickname, create_time, url }) => {
//   return (
//     <styled.OtherPost key={key} url={url}>
//       <div>{title}</div>
//       <div></div>
//       <div>{nickname}</div>
//       <div>{DateFormat(create_time)}</div>
//     </styled.OtherPost>
//   );
// };
const File = ({ filename, percent = null, file_url: url }) => {
  return (
    <styled.FileBox>
      <styled.FileIconDiv>
        <styled.FileIcon />
      </styled.FileIconDiv>
      <styled.FileName>
        <div>{filename || "파일이름"}</div>
        {url && (
          <a href={url} download="proposed_file_name">
            Download
          </a>
        )}
        {percent && (
          <styled.PercentBar>
            <div></div>
            <div></div>
            <span>50%</span>
          </styled.PercentBar>
        )}
      </styled.FileName>
    </styled.FileBox>
  );
};
const CommunityDetailPage = () => {
  const [signed, setSigned] = useState(false);
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState(null);
  const GetArticleDetailRequest = (id) => {
    const url = `${host}/community/${id}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => data?.detail)
      .catch((err) => null);
  };
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

    GetArticleDetailRequest(id).then((data) => setDetail(data));
  }, []);

  // addfile : null                            // create_time : "2022-11-04T13:22:33.000Z"
  // files : "[null]"                          // head : ""
  // nickname : "aaa"                          // text : "<p>ㄴㄴㄴㄴ</p>"
  // title :"ㄴㄴㄴㄴㄴ"                          // uid : 57
  // update_time : "2022-11-04T13:22:33.000Z"  // user_id: 24

  console.log({ detail });

  return (
    <PageLayout>
      {detail ? (
        <styled.Container>
          <styled.CategoryBox>
            <button onClick={() => goto("COMMUNITY")} className="active">
              자유게시판
            </button>
            <button onClick={() => goto("NOTICE")}>공지사항</button>
          </styled.CategoryBox>

          <styled.BoardTitleDiv>
            <styled.FreeBoard>자유게시판</styled.FreeBoard>
          </styled.BoardTitleDiv>

          <styled.HotBoard>
            <styled.Wrapper1>
              <div>인기글</div>
              <div>{detail.title}</div>
              <div>{/* thumbnail  */}</div>
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
              </styled.Article>
              {/* [{"file_id":1030,"file_url":"https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/uploads/0e8569eb725a160b3ec188c7d43924d8","filename":"1620008191187-x50.png"},{"file_id":1033,"file_url":"https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/uploads/76346cc906cae86603dfa018c7a8b8e4","filename":"1600754087920-x50.jpg"}]" */}

              {/* {detail?.files && JSON.parse(detail.files).map((file) => file.file_id)} */}

              {detail?.files !== "[null]" && (
                <styled.AddedFiles>
                  <styled.FolderIcon />
                  <div style={{ marginBottom: "13px" }}>첨부파일</div>
                  {detail?.files &&
                    JSON.parse(detail.files).map((file, index) => (
                      <File key={index} {...file} />
                    ))}
                </styled.AddedFiles>
              )}
            </styled.Wrapper2>
          </styled.HotBoard>
          <styled.HotBoard>
            <CommentListComponent id={id} />
          </styled.HotBoard>

          {/* 답변기능은 나중에... */}
          {/* <styled.AnswerBoard>
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
          </styled.AnswerBoard> */}

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

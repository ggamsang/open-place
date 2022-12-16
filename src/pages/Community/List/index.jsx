import React from "react";
import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import * as styled from "./styles";
import { goto } from "../../../utils/navigator";
import { useEffect } from "react";
import { GetSession } from "../../../mobile/modules";
import { TokenName, GET } from "../../../constants";
import host from "../../../config";
import DateFormat from "../../../mobile/modules/DateFormat";
import { Pagination } from "semantic-ui-react";

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
const GetArticleListRequest = (page, per = null) => {
  const url = `${host}/community/list/${page}${per ? "/" + per : ""}`;
  return fetch(url, GET)
    .then((res) => res.json())
    .then((data) => (data?.success ? data.detail : []))
    .catch((err) => []);
};
const GetTotalArticleCountRequest = () => {
  const url = `${host}/community/list`;
  return fetch(url, GET)
    .then((res) => res.json())
    .then((data) => (data?.success ? data.detail?.total : 0))
    .catch((err) => 0);
};
const CommunityPage = () => {
  const [sort, setSort] = useState("update");
  const [signed, setSigned] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

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
    // get article list
    GetArticleListRequest(0, 10).then((list) => setList(list));
    GetTotalArticleCountRequest().then((total) => setTotal(total));
  }, []);

  // create_time: "2022-10-14T14:18:06.000Z";
  // head: "";
  // nickname: "저녁겐노리";
  // title: "kkkkkkk";
  // uid: 56;
  // update_time: "2022-10-14T14:18:06.000Z";
  // url: "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/thumbnails/1655956119608-x50.jpg";
  // user_id: 12;

  return (
    <PageLayout>
      <styled.Container>
        <styled.CategoryBox>
          <button className="active">자유게시판</button>
          <button onClick={() => goto("NOTICE")}>공지사항</button>
        </styled.CategoryBox>

        <styled.BoardTitleDiv>
          <styled.FreeBoard>자유게시판</styled.FreeBoard>
          <styled.SortAs>
            <button
              onClick={() => setSort("update")}
              className={sort === "update" ? "active" : ""}
            >
              최신순
            </button>
            <button
              onClick={() => setSort("like")}
              className={sort === "like" ? "active" : ""}
            >
              인기순
            </button>
          </styled.SortAs>
        </styled.BoardTitleDiv>

        <styled.TitleUserDate>
          <span>제목</span>
          <span>글쓴이</span>
          <span>작성일</span>
        </styled.TitleUserDate>

        {/* list */}
        {list?.map((item, index) => (
          <li key={index} onClick={() => goto("READ", item.uid)}>
            <OtherPost {...item} />
          </li>
        ))}
        {/* pagination */}
        <styled.PaginationWrapper>
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={Math.round(total / 10 + 0.5)}
            onPageChange={(e, page) => {
              GetArticleListRequest(page.activePage - 1, 10).then(setList);
            }}
          />
        </styled.PaginationWrapper>

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
    </PageLayout>
  );
};

export default CommunityPage;

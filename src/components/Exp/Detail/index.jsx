import React from "react";
import * as styled from "./styles";
import ProfileCard from "../../ProfileCard";
import NumRate from "../../NumRate";
import { useEffect } from "react";
import { useState } from "react";
import host from "../../../config";
import { GET, POST, DELETE, TokenName } from "../../../constants";
import { GetSession } from "../../../mobile/modules";
import { goto } from "../../../utils/navigator";
import { ReviewList as ExpReview } from "../../Review/ReviewList";

const ExpInfo = ({
  onCLickedBuyButton,
  onClickedLikeButton,
  title,
  taglist: _taglist,
  price,
  thumbnail,
  isLike,
}) => {
  const [taglist, setTaglist] = useState([]);
  useEffect(() => {
    if (_taglist) {
      setTaglist(
        _taglist && _taglist.replace("[", "").replace("]", "").split(",")
      );
    }
  }, [_taglist]);

  return (
    <>
      <styled.ExpInfoText>경험정보</styled.ExpInfoText>

      <styled.ExpInfoDiv>
        <styled.ExpImg url={thumbnail} />

        <styled.ExpInnerDiv>
          <styled.NameAndTagsDiv>
            <styled.ExpName>{title}</styled.ExpName>
            {taglist.map((tag, index) => (
              <styled.TagButton key={index}>
                <styled.TagButtonText>{tag}</styled.TagButtonText>
              </styled.TagButton>
            ))}
          </styled.NameAndTagsDiv>

          <styled.Price>
            {price !== undefined ? (price === 0 ? "무료" : price + "원") : ""}
          </styled.Price>

          <NumRate />
        </styled.ExpInnerDiv>

        <styled.StarIcon liked={isLike !== 0} />

        <styled.LikeButton onClick={onClickedLikeButton}>
          <span>좋아요</span>
        </styled.LikeButton>

        <styled.PurchaseButton onClick={onCLickedBuyButton}>
          <span>구매하기</span>
        </styled.PurchaseButton>
      </styled.ExpInfoDiv>
    </>
  );
};
const ExpDetail = () => (
  <>
    <styled.ReviewText>상세정보</styled.ReviewText>
    <styled.DetailsDiv></styled.DetailsDiv>
  </>
);
const ExpBoard = () => (
  <>
    <styled.BoardText>게시판</styled.BoardText>
    <styled.BoardDiv>
      <styled.Post>
        <span>10</span>
        <span>내용</span>
        <span>닉네임</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.AnswerTitle>
        <styled.UnderArrow />
        <span>답변</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.AnswerTitle>
      <styled.AnswerBody>
        <span>답변</span>
        <span>답변내용</span>
      </styled.AnswerBody>
      <styled.PostLine />
      <styled.Post>
        <span>09</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>08</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>07</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>06</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>05</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>04</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>03</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>02</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>
      <styled.PostLine />
      <styled.Post>
        <span>01</span>
        <span>내용</span>
        <span>작성자</span>
        <span>2022. 08. 08</span>
      </styled.Post>

      <styled.PageNumbers>
        <styled.FirstPage />
        <styled.PrevPage />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <styled.NextPage />
        <styled.LastPage />
      </styled.PageNumbers>
    </styled.BoardDiv>
  </>
);
const OtherThings = () => (
  <>
    <styled.OtherExp>
      <styled.OtherExpList>
        <span>경험공유자의 다른 경험</span>
        <styled.ProfileCardDiv>
          <span>
            <ProfileCard />
          </span>
          <span>
            <ProfileCard />
          </span>
          <span>
            <ProfileCard />
          </span>
        </styled.ProfileCardDiv>
      </styled.OtherExpList>
      <styled.SimilarExpList>
        <span>이 경험과 유사한 경험</span>
        <styled.ProfileCardDiv>
          <span>
            <ProfileCard />
          </span>
          <span>
            <ProfileCard />
          </span>
          <span>
            <ProfileCard />
          </span>
        </styled.ProfileCardDiv>
      </styled.SimilarExpList>
    </styled.OtherExp>
  </>
);
const likeExpRequest = (token, id) => {
  const url = `${host}/exp/${id}/like`;
  return fetch(url, POST(token))
    .then((res) => res.json())
    .then(() => true)
    .catch((err) => false);
};
const unlikeExpRequest = (token, id) => {
  const url = `${host}/exp/${id}/like`;
  return fetch(url, DELETE(token))
    .then((res) => res.json())
    .then(() => true)
    .catch((err) => false);
};
const getExpDetailRequest = (item_id, user_id = null) => {
  const url = `${host}/exp/${item_id}/${user_id}`;
  return fetch(url, GET)
    .then((r) => r.json())
    .then((d) => (d ? d : null))
    .catch((e) => null);
};
const ExpDetailWrapper = ({ loggedIn, item_id, userInfo }) => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    getExpDetailRequest(item_id, userInfo?.uid).then(setDetail);
  }, [userInfo]);

  const handleClickedLikeButton = () => {
    GetSession(TokenName)
      .then((token) => {
        detail.isLike === 0
          ? likeExpRequest(token, item_id)
          : unlikeExpRequest(token, item_id);
      })
      .catch((e) => {
        console.error(e);
        alert("로그인해주세요.");
      })
      .finally(() => {
        getExpDetailRequest(item_id, userInfo.uid).then(setDetail);
      });
  };
  const handleClickedBuyButton = () => {
    goto("BUY", item_id);
  };
  // category: 1;
  // content: "<p>딸기에 풍부하게 함유된 비타민C, 안토시아닌, 라이코펜 등의 성분은 혈액순환과</p><p><br></p><p> 신진대사를 촉진하여 감기예방에 도움을 주며 면역력을 높여주는데 효과적입니다.</p>";
  // create_time: "2022-06-23T11:04:29.000Z";
  // detail: null;
  // exp_files: '[{"file_id":1030,"file_url":"https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/uploads/0e8569eb725a160b3ec188c7d43924d8","filename":"1620008191187-x50.png"}]';
  // info: "딸기에 풍부하게 함유된 비타민C, 안토시아닌, 라이코펜 등의 성분은 혈액순환과 신진대사를 촉진하여 감기예방에 도움을 주며 면역력을 높여주는데 효과적입니다.";
  // isLike: 0;
  // is_sold_out: 0;
  // nick_name: "카네이션핑크";
  // price: 20000;
  // taglist: "[딸기,키우기,재배]";
  // thumbnail: "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/thumbnails/1655948314396-x600.jpg";
  // thumbnail_id: 37;
  // title: "버섯 키우기 ";
  // type: 2;
  // type_detail: '{"game_files":"[]","isOnline":"0","place":"집앞","people":"4","startDate":"2022-07-03","endDate":"2022-07-06"}';
  // uid: 62;
  // update_time: "2022-06-23T11:04:29.000Z";
  // user_id: 11;

  console.log({ detail });
  return (
    <styled.Main>
      <ExpInfo
        {...detail}
        onCLickedBuyButton={handleClickedBuyButton}
        onClickedLikeButton={handleClickedLikeButton}
      />
      {detail?.detail && <ExpDetail {...detail} />}
      {detail && <ExpReview {...detail} />}
      <ExpBoard {...detail} />
      <OtherThings {...detail} />
    </styled.Main>
  );
};

export default ExpDetailWrapper;

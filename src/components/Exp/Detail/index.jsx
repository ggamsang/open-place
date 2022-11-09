import React from "react";
import * as styled from "./styles";
import ProfileCard from "../../ProfileCard";
import NumRate from "../../NumRate";

const ExpInfo = () => (
  <>
    <styled.ExpInfoText>경험정보</styled.ExpInfoText>
    <styled.ExpInfoDiv>
      <styled.ExpImg />
      <styled.ExpInnerDiv>
        <styled.NameAndTagsDiv>
          <styled.ExpName>경험이름</styled.ExpName>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>
          <styled.TagButton>
            <styled.TagButtonText>Tag123</styled.TagButtonText>
            <styled.TagButtonDelete />
          </styled.TagButton>
        </styled.NameAndTagsDiv>
        <styled.Price>13500원</styled.Price>
        <NumRate />
      </styled.ExpInnerDiv>
      <styled.StarIcon />
      <styled.LikeButton>
        <span>좋아요</span>
      </styled.LikeButton>
      <styled.PurchaseButton>
        <span>구매하기</span>
      </styled.PurchaseButton>
    </styled.ExpInfoDiv>
  </>
);
const ExpDetail = () => (
  <>
    <styled.ReviewText>상세정보</styled.ReviewText>
    <styled.DetailsDiv></styled.DetailsDiv>
  </>
);
const ExpReview = () => (
  <>
    <styled.ReviewText>리뷰</styled.ReviewText>
    <styled.ReviewDiv />
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

const ExpDetailWrapper = () => {
  return (
    <styled.Main>
      <ExpInfo />
      <ExpDetail />
      <ExpReview />
      <ExpBoard />
      <OtherThings />
    </styled.Main>
  );
};

export default ExpDetailWrapper;

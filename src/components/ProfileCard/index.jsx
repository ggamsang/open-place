import React from "react";
import * as styled from "./styles";

const ReviewWrapper = ({
  score,
  rates = [
    { rate: 5, percent: 0.5 },
    { rate: 4, percent: 0.2 },
    { rate: 3, percent: 0.2 },
    { rate: 2, percent: 0.1 },
    { rate: 1, percent: 0.0 },
  ],
}) => (
  <styled.ExpDiv>
    <styled.RateDiv>
      <styled.Rate>{score}</styled.Rate>
      <styled.Review>리뷰 {0}개</styled.Review>
    </styled.RateDiv>
    <styled.StarIcon />
    <styled.NumRate>
      {rates.map(({ rate, percent }) => (
        <styled.NumRate2 key={rate}>
          {rate}
          <styled.RateIcon />
          <styled.WrapperRateBar>
            <styled.RateBar percent={percent} />
          </styled.WrapperRateBar>
        </styled.NumRate2>
      ))}
    </styled.NumRate>
  </styled.ExpDiv>
);

const ProfileCard = ({ uid, title, category, price, score, url }) => {
  //   category: 2;
  //   content: null;
  //   create_time: "2022-06-23T10:51:58.000Z";
  //   exp_files: "null";
  //   info: '콜라주(영어: collage)는 시각 예술에서 주로 쓰이며 질(質)이 다른 여러 가지 헝겊, 비닐, 타일, 나뭇조각, 종이, 상표 등을 붙여 화면을 구성하는 기법이다. 어원은 "to glue(접착하다)"는 의미의 프랑스어 coller에서 파생되었다.';
  //   is_sold_out: 0;
  //   nick_name: "카네이션핑크";
  //   order: 1;
  //   price: 500;
  //   score: 4.5;
  //   taglist: "[콜라주,포토샵,만들기,재미,놀이]";
  //   thumbnail_id: 32;
  //   title: "포토샵으로 콜라주";
  //   type: "item";
  //   type_detail: null;
  //   uid: 57;
  //   update_time: "2022-06-23T10:51:58.000Z";
  //   url: "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/thumbnails/1655948262044-x600.jpg";
  //   user_id: 11;

  return (
    <>
      <styled.TopLists onClick={() => (window.location.href = `/exp/${uid}`)}>
        <styled.Profile>
          <styled.ProfileImg src={url} />
          <styled.ProfileImgStar />
        </styled.Profile>
        <styled.Name>{title || "경험이름"}</styled.Name>
        <styled.Category>
          {category === 1
            ? "놀기"
            : category === 2
            ? "배우기"
            : category === 3
            ? "만들기"
            : "카테고리"}
        </styled.Category>
        <styled.Price>{price}원</styled.Price>
        <ReviewWrapper score={score} />
        {/* <NumRate /> */}
      </styled.TopLists>
    </>
  );
};

export default ProfileCard;

import React from "react";
import styled from "styled-components";
import star from "resources/place/star.svg";
import profileimg from "resources/place/profileimg.jpg";

const Profile = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
  max-width: 248px;
  max-height: 248px;
`;

const ProfileImg = styled.img`
  // background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contains;
  background-position: center center;
  width: 248px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 23px;
  justify-content: center;
  border-radius: 16px;
`;

const ProfileImgStar = styled.img.attrs({
  src: star,
})`
  // border-radius: 100%;
  // box-shadow: 5px 5px 5px yellow;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 16.09px;
  top: 13.6px;
`;

const TopLists = styled.a`
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 14px;
  width: 280px; // max-content;
  height: 444px;
  display: inline-block;
`;

const Name = styled.div`
  font: normal normal 600 18px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 5px;
  width: max-content;
  max-width: 100%;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const Category = styled.div`
  font: normal normal 400 12px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  margin-bottom: 8px;
  height: 16px;
`;

const Price = styled.div`
  font: normal normal 400 16px/14px Pretendard;
  // font-size: 40px;
  letter-spacing: 0px;
  color: #4136f1;
  opacity: 1;
  margin-bottom: 12px;
`;

const ExpDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21.57px;
`;

const RateDiv = styled.div`
  align-items: center;
`;

const Rate = styled.div`
  font: normal normal 600 40px/48px Pretendard;
  font-size: 40px;
  color: #000000;
  opacity: 1;
`;

const Review = styled.div`
  font: normal normal 400 12px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
`;

const StarIcon = styled.img.attrs({
  src: star,
})`
  width: 13.87px;
  height: 13px;
  margin-top: 4px;
  margin-right: 6px;
  margin-bottom: 20px;
  margin-left: 6px;
`;

const NumRate = styled.div`
  align-items: left;
  display: block;
  margin-left: 10px;
  font: normal normal 400 11px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.9;
`;

const NumRate2 = styled.div`
  display: flex;
  width: 150px;
  height: 16px;
  margin-top: 0px;
  margin-bottom: 2px;
  font: normal normal 400 11px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.9;
  vertical-align: middle;
`;

const RateIcon = styled.img.attrs({
  src: star,
})`
  width: 7px;
  height: 7px;
  margin-top: 3px;
  margin-right: 6px;
  margin-left: 2px;
  display: flex;
  vertical-align: bottom;
  justify-content: space-between;
`;

const RateBar = styled.div`
  background-color: rgb(255, 101, 101);
  width: ${(props) => (props.percent || 0) * 90}px;
  height: 5px;
  z-index: 1;
  border-radius: 50px;
  position: absolute;
`;
const WrapperRateBar = styled.div`
  position: relative;
  background-color: rgb(191, 191, 191);
  width: 90px;
  height: 5px;
  z-index: 1;
  margin-top: 4px;
  border-radius: 50px;
`;

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
  <ExpDiv>
    <RateDiv>
      <Rate>{score}</Rate>
      <Review>리뷰 {0}개</Review>
    </RateDiv>
    <StarIcon />
    <NumRate>
      {rates.map(({ rate, percent }) => (
        <NumRate2 key={rate}>
          {rate}
          <RateIcon />
          <WrapperRateBar>
            <RateBar percent={percent} />
          </WrapperRateBar>
        </NumRate2>
      ))}
    </NumRate>
  </ExpDiv>
);

const ProfileCard = ({ ...props }) => {
  // console.log(props);
  const { uid, title, category_level1: category, rate: score } = props;
  const url = props?.thumbnailUrl?.m_img;
  return (
    <React.Fragment>
      <TopLists onClick={() => (window.location.href = `/exp/${uid}`)}>
        <Profile>
          <ProfileImg src={url} />
          <ProfileImgStar />
        </Profile>
        <Name>{title || "경험이름"}</Name>
        <Category>
          {category === 1
            ? "놀기"
            : category === 2
            ? "배우기"
            : category === 3
            ? "만들기"
            : "카테고리"}
        </Category>
        {/* <Price>
          {price > 0
            ? new Intl.NumberFormat("ko-KR", {
                style: "currency",
                currency: "KRW",
              }).format(price) + "원"
            : "무료"}
        </Price> */}

        <ReviewWrapper score={score} />
        <NumRate />
      </TopLists>
    </React.Fragment>
  );
};

export default ProfileCard;

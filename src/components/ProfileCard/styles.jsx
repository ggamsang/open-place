import styled from "styled-components";
import star from "../../imgs/star.svg";
import profileimg from "../../imgs/profileimg.jpg";

export const Profile = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
  max-width: 248px;
  max-height: 248px;
`;

export const ProfileImg = styled.img`
  background-image: url(${(props) => props.src});
  width: 248px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 23px;
  justify-content: center;
  border-radius: 16px;
`;

export const ProfileImgStar = styled.img.attrs({
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

export const TopLists = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 14px;
  width: 248px;
  height: 444px;
  display: inline-block;
`;

export const Name = styled.div`
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

export const Category = styled.div`
  font: normal normal 400 12px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
  margin-bottom: 8px;
  height: 16px;
`;

export const Price = styled.div`
  font: normal normal 400 16px/14px Pretendard;
  // font-size: 40px;
  letter-spacing: 0px;
  color: #4136f1;
  opacity: 1;
  margin-bottom: 12px;
`;

export const ExpDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21.57px;
`;

export const RateDiv = styled.div`
  align-items: center;
`;

export const Rate = styled.div`
  font: normal normal 600 40px/48px Pretendard;
  font-size: 40px;
  color: #000000;
  opacity: 1;
`;

export const Review = styled.div`
  font: normal normal 400 12px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
`;

export const StarIcon = styled.img.attrs({
  src: star,
})`
  width: 13.87px;
  height: 13px;
  margin-top: 4px;
  margin-right: 6px;
  margin-bottom: 20px;
  margin-left: 6px;
`;

export const NumRate = styled.div`
  align-items: left;
  display: block;
  margin-left: 10px;
  font: normal normal 400 11px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.9;
`;

export const NumRate2 = styled.div`
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

export const RateIcon = styled.img.attrs({
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

export const RateBar = styled.div`
  background-color: rgb(255, 101, 101);
  width: ${(props) => (props.percent || 0) * 90}px;
  height: 5px;
  z-index: 1;
  border-radius: 50px;
  position: absolute;
`;
export const WrapperRateBar = styled.div`
  position: relative;
  background-color: rgb(191, 191, 191);
  width: 90px;
  height: 5px;
  z-index: 1;
  margin-top: 4px;
  border-radius: 50px;
`;

import styled from 'styled-components';
import star from '../../imgs/star.svg';


export const ExpDiv = styled.div`
  display: flex;
  align-items: center;
  // margin-left: 21.57px;
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
  font: normal normal normal 12px/14px Pretendard;
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
  font: normal normal normal 11px/14px Pretendard;
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
  font: normal normal normal 11px/14px Pretendard;
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
  background-color: black;
  width: 90px;
  height: 5px;
  z-index: 1;
  margin-top: 4px;
  border-radius: 50px;
  background-color: rgb(101,101,101);
`;
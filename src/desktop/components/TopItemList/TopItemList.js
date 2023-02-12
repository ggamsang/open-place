import React from "react";
import styled from "styled-components";
import TopItemListContainer from "desktop/containers/TopItemListContainer";
import star from "resources/star.svg";
import profileimg from "resources/profileimg.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TopListText = styled.div`
  margin-top: 18px;
  margin-bottom: 9.05px;
  width: 100%;

  text-align: center;
  font: normal normal 900 44px/52px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const TopListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 84px;
  padding: 0 74px 0 74px;
  justify-content: space-around;
  margin-bottom: 77px;
  text-align: center;
  align-items: center;
`;

const Profile = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
  max-width: 248px;
  max-height: 248px;
`;

const ProfileImg = styled.img.attrs({
  src: profileimg,
})`
  width: 100%;
  height: 100%;
  object-fit: fill;
  margin-bottom: 23px;
  justify-content: center;
`;

const ProfileImgStar = styled.img.attrs({
  src: star,
})`
  width: 13.87px;
  height: 13px;
  position: absolute;
  right: 16.09px;
  top: 13.6px;
`;

const TopLists = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 14px;
  width: 248px;
  height: 444px;
  display: inline-block;
`;

const Name = styled.div`
  font: normal normal 600 18px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 5px;
  width: 119px;
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
  background-color: black;
  width: 90px;
  height: 5px;
  z-index: 1;
  margin-top: 4px;
  border-radius: 50px;
  background-color: rgb(101, 101, 101);
`;

const Wrapper = styled.div`
  margin-top: 5px;
  .list_wrap {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
  }
`;
const Title = styled.div`
  margin: auto;
  width: max-content;
  // font: normal normal medium 18px/21px Pretendard;
  color: #4a4b4d;
  text-align: left;
  box-sizing: border-box;
  padding: 10px;
  font-sizing: 18px;
`;

const strTopItemList = "인기아이템";

class TopItemList extends React.Component {
  render() {
    return (
      <Container>
        <TopListText>{strTopItemList}</TopListText>
        {/* <TopListContainer> */}
        <TopItemListContainer />
        {/* </TopListContainer> */}
      </Container>
    );
  }
}
export default TopItemList;

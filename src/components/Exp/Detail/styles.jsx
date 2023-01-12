import styled from "styled-components";
import expimg from "src/imgs/Listimg.png";
import staricon from "src/imgs/star.svg";
import firstpage from "src/imgs/firstpage.svg";
import prevpage from "src/imgs/prevpage.svg";
import nextpage from "src/imgs/nextpage.svg";
import lastpage from "src/imgs/lastpage.svg";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  min-width: 1300px;
`;

export const ExpInfoText = styled.div`
  text-align: center;
  font: normal normal 900 44px/52px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 20px;
  position: relative;
`;

export const ExpInfoDiv = styled.div`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  width: 1722px;
  height: 302px;
  margin-top: 40px;
  // align-items: center;
  position: relative;
`;

export const ExpImg = styled.img.attrs({
  // src: expimg,
})`
  width: 271px;
  height: 271px;
  margin-left: 16px;
  margin-top: 14px;
  background-image: url(${(props) => props.url || expimg});
  background-size: cover;
  background-position: center;
`;

export const ExpInnerDiv = styled.div`
  display: inline-block;
  margin-left: 34px;
  margin-top: 33px;
`;

export const NameAndTagsDiv = styled.div`
  display: flex;
  // margin-top: 23px;
  align-items: center;
`;

export const ExpName = styled.div`
  // text-align: left;
  font: normal normal 600 35px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  // width: 252px;
  // height: 46px;
  // align-items: center;
`;

export const TagButton = styled.div`
  width: 94px;
  height: 30px;
  margin-left: 8px;
  background: #0000001f 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 16px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagButtonText = styled.div`
  font: normal normal 400 14px Pretendard;
  letter-spacing: 0.25px;
  color: #000000de;
  opacity: 1;
`;

export const TagButtonDelete = styled.div`
  background: #00000099 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 28px;
  width: 14px;
  height: 14px;
  margin-top: 8px;
  margin-left: 3px;
`;

// export const ExpPrice = styled.div`
//     text-align: left;
//     font: normal normal 500 40px Pretendard;
//     letter-spacing: 0px;
//     color: #4136F1;
//     opacity: 1;
//     margin-top: 5px;
//     width: 249px;
//     height: 57px;
// `;

export const Price = styled.div`
  // font: normal normal 400 16px/14px Pretendard;
  font-size: 40px;
  letter-spacing: 0px;
  color: #4136f1;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 13px;
`;

export const StarIcon = styled.img.attrs({
  src: staricon,
})`
  width: 42px;
  height: 39px;
  position: absolute;
  top: 23px;
  right: 24px;
  opacity: ${(props) => (props.liked ? "1" : "0.5")};
`;

export const LikeButton = styled.button`
  border: none;
  outline: none;
  background: none;

  width: 131px;
  height: 55px;
  border: 1px solid #000000;
  border-radius: 4px;
  opacity: 1;
  // margin-top: 224px;
  // margin-left: 555px;
  display: flex;
  text-align: center;
  align-items: center;

  > span {
    text-align: center;
    align-items: center;
    // font: normal normal 500 26px/30px Pretendard;
    font-size: 26px;
    letter-spacing: 2.31px;
    color: #000000;
    text-transform: uppercase;
    opacity: 1;
    margin-left: 30px;
  }
`;

export const PurchaseButton = styled.button`
  border: none;
  outline: none;
  background: none;

  width: 130px;
  height: 55px;
  background: #ee00001f 0% 0% no-repeat padding-box;
  border: 1px solid #ee0000;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  text-align: center;
  align-items: center;
  // margin-top: 224px;
  // margin-left: 20px;

  > span {
    text-align: center;
    // font: normal normal 500 25px/29px Pretendard;
    font-size: 25px;
    letter-spacing: 2.23px;
    color: #ee0000;
    text-transform: uppercase;
    opacity: 1;
    margin-left: 17px;
  }
`;

export const DetailsDiv = styled.div`
  width: 1722px;
  height: 168px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  margin-top: 21.63px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsText = styled.div`
  font: normal normal 900 44px/52px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  vertical-align: middle;
`;


export const BoardText = styled.div`
  text-align: center;
  font: normal normal 900 44px/52px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 106px;
`;

export const BoardDiv = styled.div`
  width: 1722px;
  height: 979px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  margin-top: 9px;
  padding-top: 28px;
  // display: flex;
  // justify-content: center;
`;

export const Post = styled.div`
  // width: 1650px;
  display: flex;
  align-items: center;
  margin-top: 17px;

  > span {
    font: normal normal 500 19px/22px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;

    &:nth-child(1) {
      margin-left: 36px;
    }

    &:nth-child(2) {
      margin-left: 95px;
    }

    &:nth-child(3) {
      margin-left: 1212px;
    }

    &:nth-child(4) {
      margin-left: 129px;
    }
  }
`;

export const PostLine = styled.div`
  width: 1650px;
  height: 0px;
  border: 2px solid #efefef;
  opacity: 1;
  margin-top: 17px;
  margin-left: 36px;
`;

export const UnderArrow = styled.div`
  width: 13px;
  height: 14px;
  /* UI Properties */
  border: 2px solid #707070;
  opacity: 1;
  // margin-top: 12px;
  margin-left: 154px;
`;

export const AnswerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  > span {
    font: normal normal 500 19px/22px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;

    &:nth-child(2) {
      margin-left: 36px;
    }

    &:nth-child(3) {
      margin-left: 1155px;
    }

    &:nth-child(4) {
      margin-left: 129px;
    }
  }
`;

export const AnswerBody = styled.div`
  width: 1478px;
  height: 248px;
  background: #eeeeee 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  margin-top: 17px;
  margin-left: 208px;
  display: block;
  padding-top: 24px;

  > span {
    display: block;

    &:nth-child(1) {
      margin-left: 27px;
      font: normal normal 500 19px/22px Pretendard;
      font-size: 19px;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
    }

    &:nth-child(2) {
      margin-left: 27px;
      font: normal normal 500 15px/25px Pretendard;
      font-size: 15px;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
    }
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 691px;
  align-items: center;

  > span {
    font: normal normal 500 15px/35px Pretendard;
    letter-spacing: 0px;
    opacity: 1;

    &:nth-child(3) {
      margin-left: 59px;
      color: #ff0000;
    }

    &:nth-child(4) {
      margin-left: 45px;
      color: #000000;
    }

    &:nth-child(5) {
      margin-left: 43px;
      color: #000000;
    }
  }
`;

export const FirstPage = styled.img.attrs({
  src: firstpage,
})`
  width: 12px;
  height: 12px;
`;

export const PrevPage = styled.img.attrs({
  src: prevpage,
})`
  width: 6px;
  height: 13px;
  margin-left: 33px;
`;

export const NextPage = styled.img.attrs({
  src: nextpage,
})`
  width: 6px;
  height: 13px;
  margin-left: 56px;
`;

export const LastPage = styled.img.attrs({
  src: lastpage,
})`
  width: 12px;
  height: 12px;
  margin-left: 33px;
`;

export const OtherExp = styled.div`
  width: 100%;
  margin-top: 109px;
  display: flex;
`;

export const OtherExpList = styled.div`
  width: 50%;
  text-align: center;
  display: block;

  > span {
    text-align: center;
    font: normal normal 900 44px/52px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;

export const ProfileCardDiv = styled.div`
  width: 800px;
  height: 567px;
  // margin-top: 30px;
  margin-left: 19px;
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  // justify-content: space-around;
  overflow: hidden;
  padding-left: 74px;

  > span {
    // &:nth-child(1){
    //     margin-right: 84px;
    // }
    margin-right: 84px;
  }
`;

export const SimilarExpList = styled.div`
  width: 50%;
  text-align: center;

  > span {
    text-align: center;
    font: normal normal 900 44px/52px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;

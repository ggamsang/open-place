import styled from "styled-components";
import star from "resources/place/star.svg";
import expimg from "resources/place/Listimg.png";
import staricon from "resources/place/star.svg";
import firstpage from "resources/place/firstpage.svg";
import prevpage from "resources/place/prevpage.svg";
import nextpage from "resources/place/nextpage.svg";
import lastpage from "resources/place/lastpage.svg";

export const ExpInnerButtonBox = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
  position: absolute;
  width: max-content;
  right: 0%;
  bottom: 0%;
  display: flex;
`;
export const RateExpDiv = styled.div`
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
export const RateReview = styled.div`
  font: normal normal 400 12px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.6;
`;
export const RateStarIcon = styled.img.attrs({
  src: star,
})`
  width: 13.87px;
  height: 13px;
  margin-top: 4px;
  margin-right: 6px;
  margin-bottom: 20px;
  margin-left: 6px;
`;
export const RateNumRate = styled.div`
  align-items: left;
  display: block;
  margin-left: 10px;
  font: normal normal 400 11px/14px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.9;
`;
export const RateNumRate2 = styled.div`
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
  background-color: black;
  width: ${(props) => parseInt((props.per / 90) * 100, 10)}px;
  height: 5px;
  z-index: 1;
  margin-top: 4px;
  border-radius: 50px;
  background-color: rgb(101, 101, 101);
`;
export const grayScale = {
  scale0: "#F8FAFB",
  scale1: "#F1F5F5",
  scale2: "#EAEEEF",
  scale3: "#E1E4E6",
  scale4: "#CED3D6",
  scale5: "#A9AFB3",
  scale6: "#878D91",
  scale7: "#4D5256",
  scale8: "#363A3C",
  scale9: "#292A2B",
};
export const ViewContent = styled.div`
  position: relative;
  border: 1px solid transparent;
  &:hover {
    border: 1px dashed ${grayScale.scale3};
    background-color: ${grayScale.scale0};
    .editBtn {
      display: block;
    }
  }
  .imgContent {
    img {
      object-fit: scale-down;
      max-width: 100%;
      // max-width: 100%;
      // width: 450px;
    }
    text-align: center;
    margin-bottom: 2rem;
    p {
      // text-align: right;
      font-size: 0.75rem;
      line-height: 0.9rem;
      font-family: Noto Sans KR;
      font-weight: 500;
      color: #707070;
    }
  }
  .centering {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .LinkFileName {
    line-height: 70px;
    font-size: 20px;
  }
  .iconWrap {
    display: flex;
    &::after {
      display: block;
      content: "";
      clear: both;
    }
    margin-bottom: 2rem;
  }
  .textWrap {
    margin-bottom: 2rem;
    word-break: break-all;
    line-height: 25px;
    color: inherit;
  }
  .linkWrap {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    font-family: Noto Sans KR;
  }
  & .goEdit {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
  }
  &:hover .goEdit {
    display: block;
  }
  .mouse-on {
    :hover {
      color: #0000ff;
      opacity: 0.75;
    }
  }
  .align-right {
    margin-left: auto;
  }
  .align-left {
    margin-right: auto;
  }
  .align-center {
    margin: auto;
  }
`;
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
  font: normal normal 900 36px/48px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 20px;
  position: relative;
`;
export const ExpInfoDiv = styled.div`
  * {
    // border: 1px solid red;
  }
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  width: 1722px;
  height: 302px;
  margin: auto;
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
  margin-left: 15px;
  margin-top: 15px;
`;
export const NameAndTagsDiv = styled.div`
  display: flex;
  // margin-top: 23px;
  align-items: center;
`;
export const ExpName = styled.div`
  //font: normal normal 600 35px/14px Pretendard;
  font-weight: normal;
  font-size: 35px;
  line-height: 40px;
  font-family: Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
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
  font: normal normal 400 16px/14px Pretendard;
  // font-size: 40px;
  letter-spacing: 0px;
  color: #4136f1;
  opacity: 1;
  margin-top: 10px;
  margin-bottom: 13px;
`;
export const CateType = styled.div`
  // font: normal normal 400 16px/14px ;
  font-size: 20px;
  line-height: 22px;
  font-family: Pretendard;
  font-weight: normal;

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
  opacity: ${(props) => (props.like ? "1" : "0.5")};
`;
export const ManageButton = styled.button`
  border: none;
  outline: none;
  background: none;

  width: max-content;
  max-width: 250px;
  min-width: 131px;
  height: 55px;
  border: 1px solid #000000;
  border-radius: 4px;
  opacity: 1;
  // margin-top: 224px;
  // margin-left: 555px;
  display: flex;
  margin-right: 15px;
  // position: absolute;
  // right: 160px;
  // bottom: 20px;

  > span {
    width: max-content;
    margin: auto;
    font: normal normal 500 26px/30px Pretendard;
    color: #000000;
    opacity: 1;
  }
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
  margin-right: 15px;
  // position: absolute;
  // right: 20px;
  // bottom: 20px;

  > span {
    width: max-content;
    margin: auto;
    font: normal normal 500 26px/30px Pretendard;
    color: #000000;
    opacity: 1;
  }
`;
export const EditButton = styled.button`
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

  > span {
    width: max-content;
    margin: auto;
    font: normal normal 500 26px/30px Pretendard;
    color: #000000;
    opacity: 1;
  }
`;

export const PurchaseButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 10px 15px;
  // width: 130px;
  width: max-content;
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

  // position: absolute;
  // bottom: 20px;
  margin-right: 15px;

  right: ${130 + 20 + 15}px;

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
export const WriteReviewButton = styled.button`
  border: none;
  outline: none;
  background: none;

  width: max-content;
  height: 55px;
  background: #ee00001f 0% 0% no-repeat padding-box;
  border: 1px solid #ee0000;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 0px 10px;
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
  min-height: 168px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  margin-top: 21.63px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  .content {
    padding: 10px;
    width: 100%;
  }
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

export const ReviewText = styled.div`
  // text-align: center;
  // font: normal normal 900 44px/52px Pretendard;
  // letter-spacing: 0px;
  // color: #000000;
  // opacity: 1;
  // margin-top: 28px;
  text-align: center;
  font: normal normal 900 36px/48px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 20px;
  position: relative;
`;

export const ReviewDiv = styled.div`
  width: 1695px;
  height: 430px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  margin-top: 22px;
  margin: auto;
`;

export const Wrapper = styled.div`
  max-width: 1740px;
  min-width: 1000px;
  min-height: 75vh;
  .marginLeft {
    // margin-left: 38px;
  }
  // border: 1px solid red;
  margin: auto;
`;

export const RejectButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1.5rem;
  padding: 5px 10px;
  border-radius: 15%;
  position: absolute;
  z-index: 701;
  top: 10px;
  left: 75px;
`;
export const AcceptButton = styled.button`
  background-color: red;
  color: white;
  font-size: 1.5rem;
  padding: 5px 10px;
  border-radius: 15%;
  position: absolute;
  z-index: 701;
  top: 10px;
  left: 10px;
`;


export const KickoutButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1.5rem;
  padding: 5px 10px;
  border-radius: 15%;
  position: absolute;
  z-index: 701;
  top: 10px;
  left: 10px;
`;
export const MyDesignLabel = styled.p`
  z-index: 701;
  position: absolute;
  background-color: #A0A0A0;
  color: white;
  font-size: 1.5rem;
  top: 5px;
  left: 10px;
  border-radius: 25px;
  padding: 10px;
`;
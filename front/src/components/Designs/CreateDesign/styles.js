import styled from "styled-components";
import osdcss from "opendesign_style";
import { Dropdown,  } from "semantic-ui-react";

export const EditorWrapper = styled.div`
// max-width:853px;
// width: 100%; 
// display: flex;
// justify-contents: center;
width: max-content;
margin: auto;

.title {
  width: 100%;
  text-align: center;
  margin: auto;
  color: #707070;
  padding: 10px 5px;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2rem;
}
.editor {
  opacity: 0.75;
  overflow: auto;
}
`;
export const DesignElement = styled.div`
  * {
    cursor: pointer;
  }
  position: relative;
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-family: "Noto Sans KR";
  z-index: 700;
  border-radius: 15px;
  // background-size: cover;
  img {
    max-width: 100%;
    max-height: 100%;
    // background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${(props) => props.img});
  }

  .cover {
    // cursor: default;
    z-index: 701;
    position: absolute;
    border-radius: 15px;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(32, 32, 32, 0.7) 100%
    );
    width: 330px;
    height: 330px;
  }

  .innerbox {
    z-index: 703;
    position: absolute;
    width: 274.08px;
    color: #ffffff;
    line-height: 40px;
    height: 35px;
    font-family: Noto Sans KR;
    margin-left: 25px;
    margin-top: 201px;
    .design-title {
      font-size: 20px;
      font-weight: 700;
      text-shadow: 2px 2px 6px gray;
      display: flex;
      justify-content: space-between;
    }
    .update-time {
      margin-top: 5px;
      font-weight: 300;
      border: 1px solid red;
      width: max-content;
      height: 25px;
      font-size: 17px;
      font-family: Noto Sans KR;
      text-shadow: 2px 2px 6px gray;
      line-height: 25px;
      text-align: right;
      // cursor: default;
    }
    .user-name {
      font-size: 20px;
      font-weight: 300;
      text-shadow: 2px 2px 6px gray;
      // cursor: default;
    }
    .user-update-wrapper {
      width: 285px;
      display: flex;
      justify-content: space-between;
    }
  }

  .counter {
    z-index: 703;
    position: absolute;
    left: 24.92px;
    top: 286px;
    display: flex;
    justify-content: space-start;
    width: 291px;
    height: 22px;
    text-align: left;
    line-height: 40px;
    font-size: 15px;
    font-weight: 500;
    align-items: center;
  }
  .view {
    z-index: 703;
    margin-right: 4.25px;
  }
  .view-count {
    z-index: 703;
    margin-right: 6px;
    // cursor: default;
  }
  .like {
    z-index: 703;
    margin-right: 4px;
    img {
      width: 13px;
      height: 13px;
    }
  }
  .like-count {
    z-index: 703;
    margin-right: 6px;
    // cursor: default;
  }
  .fork {
    z-index: 703;
    margin-right: 4px;
    img {
      width: 22px;
      height: 11px;
    }
  }
  .fork-count {
    z-index: 703;
    margin-right: 0px;
    // cursor: default;
  }
`;
export const DesignTemplateSelector = styled.div`
  max-width: 100%;
  width: 100%;
  .title {
    width: max-content;
    margin: auto;
    color: #707070;
    padding: 10px 5px;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2rem;
  }
  .template-wrapper {
    display: flex;
    justify-content: center;
    overflow: auto;
  }
  .element {
    min-width: 200px;
    margin: 5px;
    border: 2px solid #efefef;
    padding: 5px;
    :hover {
      border: 2px solid #777777;
    }
  }
`;
export const DelBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  left: 95%;
  transform: translate(-50%, -50%);
  border: 0;
  padding: 0;
  width: 45px;
  height: 45px;
  border-radius: 25px;
  line-height: 25px;
  box-sizing: border-box;
  font-size: 12px;
  background-color: ${osdcss.color.main.basic};
  color: white;
  text-align: center;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
  outline: 0;
  i.icon {
    margin: 0;
  }
  &:focus .subMenu {
    display: block;
  }
`;
export const ResetButtonWrapper = styled.div`
  width: max-content;
  margin-left: auto;
  margin-right: 25px;
  color: #707070;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const CategoryDropDown = styled(Dropdown)`
  max-width: 309px;
  height: 41px !important;
  font-family: Spoqa Han Sans, Regular;
  font-size: 22px;
  background-color: #8e8e8e !important;
  margin-right: 68px;
  margin-top: 10px;
  margin-bottom: 10px;
  .text {
    color: white !important;
  }
  .item {
    background-color: #8e8e8e !important;
  }
`;

export const ControllerWrap = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  border: 1px solid #707070;
  padding: 25px;
  margin-bottom: 30px;
  .innerBox {
    display: flex;
    justify-content: space-evenly;
  }
  & .initWrap {
    & > ul {
      display: flex;
      // box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
    }
    & > span {
      color: ${osdcss.color.grayScale.scale6};
    }
  }
  &:hover {
    background-color: #fafafa;
    & .initWrap {
      & > ul {
        display: flex;
      }
      & > span {
        color: ${osdcss.color.grayScale.scale6};
      }
    }
  }
`;
export const NewController = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  font-size: 22px;
  color: black;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;

  @media only screen and (max-width: 680px) {
    font-size: 1rem !important;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //   align-items: center;
  width: 100%;
  max-width: 1920px;
  // min-width: 1300px;
`;

export const AddExpText = styled.div`
  text-align: center;
  font: normal normal bold 27px/32px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


export const AddThumbnail = styled.div`
  width: 457px;
  height: 510px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #efefef;
  box-shadow: 2px 2px 5px #00000029;
  border-radius: 25px;
  opacity: 1;
  // margin-left: 47px;
  margin-top: 20px;
  padding-top: 37px;
  > span {
    text-align: center;
    // font: normal normal medium 24px/29px Pretendard;
    font-family: Pretendard;
    font-weight: medium;
    font-size: 24px;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-left: 136px;
    // margin-bottom: 20px;
  }
`;

export const ThumbnailImg = styled.div`
  width: 388px;
  height: 388px;
  background-color: #eeeeee;
  margin-left: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  > span {
    font: normal normal 500 24px/29px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    text-align: center;
  }
  img {
    width: 388px;
    height: 388px;
  }
`;

export const InfoBox = styled.div`
  // width: 1329px;
  // min-height: 665px;
  height: 510px;  
  width: 100%;
  max-width: 750px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #efefef;
  box-shadow: 2px 2px 5px #00000029;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 20px 50px;
  // *{ border: 1px solid red; }
  @media only screen (max-width: 800px) {
    margin: 0px;
    margin-left: 0px;
    padding: 5px 15px;
    width: 100%;
  }
`;

export const InfoBoxInnerDiv = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  margin-top: 46px;
  div:nth-child(1) {
    min-width: 50px;
    width: 197px;
    font: normal normal bold 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    // margin-left: 70px;
    @media only screen and (max-width: 700px) { width: max-content; margin-right: 35px;}
  }
  div:nth-child(2) {
    margin: 0;
    width: max-content;
    font: normal normal normal 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;

// export const TitleBox = styled.div`
//     width: 197px;
//     // height: 24px;
//     text-align: left;
//     font: normal normal bold 20px/24px Pretendard;
//     letter-spacing: 0px;
//     opacity: 1;
//     color: #707070;
//     padding-left: 70px;

// `;

// export const BodyDiv = styled.div`
//     width: 1062px;
//     text-align: left;
//     font: normal normal normal 20px/24px Noto Sans KR;
//     letter-spacing: 0px;
//     color: #000000;
//     opacity: 1;

// `;

export const CategoryDiv = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  margin-top: 30px;
  div:nth-child(1) {
    width: 197px;
    font: normal normal bold 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    // margin-left: 70px;
    @media only screen and (max-width: 700px) { width: max-content; margin-right: 15px;}
  }
`;

export const CategoryButton1 = styled.div`
  width: 225px;
  height: 43px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  > span {
    font: normal normal normal 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 29px;
  }
`;

export const CategoryButton2 = styled.div`
  width: 225px;
  height: 43px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  margin-left: 13px;
  > span {
    font: normal normal normal 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 29px;
  }
`;

export const TagDiv = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  margin-top: 46px;
  div:nth-child(1) {
    min-width: 50px;
    width: 197px;
    font: normal normal bold 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    // margin-left: 70px;
    @media only screen and (max-width: 700px) { width: max-content; margin-right: 35px;}
  }
  div:nth-child(2) {
    margin: 0;
    width: max-content;
    font: normal normal normal 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;

export const InputTagDiv = styled.div`
  width: 462px;
  height: 43px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  > span {
    font: normal normal 300 17px/20px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-left: 16px;
  }
`;

export const TagExamplesDiv = styled.div`
  margin-left: 267px;
  margin-top: 14px;
  display: flex;
  > div {
    width: 112px;
    height: 43px;
    background: #e9e9e96a 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    margin-right: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font: normal normal normal 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    &:nth-child(6) {
      width: 139px;
      height: 39px;
      border: 1.5px solid #ea3323;
    }
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  margin-top: 63px;
  div:nth-child(1) {
    width: 197px;
    font: normal normal bold 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    // margin-left: 70px;
  }
  div:nth-child(2) {
    width: 741px;
    height: 83px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    padding-top: 11px;
    padding-left: 15px;
    font: normal normal 300 17px/20px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }
`;

export const ExpTypeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 35px;
  div:nth-child(1) {
    width: 197px;
    font: normal normal bold 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    // margin-left: 70px;
  }
`;

export const InputPriceDiv = styled.div`
  width: 210px;
  height: 43px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  > span {
    font: normal normal 300 17px/20px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-left: 16px;
  }
`;

export const PriceDiv = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  margin-top: 49px;
  span {
    margin-left: 14px;
    font: normal normal normal 20px/24px Noto Sans KR;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;

export const PriceDivText = styled.div`
  width: 197px;
  font: normal normal bold 20px/24px Pretendard;
  letter-spacing: 0px;
  color: #707070;
  // margin-left: 70px;
`;

export const PriceBox = styled.div`
  width: 182px;
  height: 44px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal normal normal 20px/24px Noto Sans KR;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

export const AddPrice = styled.div`
  display: flex;
  margin-left: 115px;
  div:nth-child(2) {
    border: 1px solid #000000;
    color: #000000;
  }
`;

export const AddPriceButton = styled.div`
  width: 97px;
  height: 49px;
  border: 1px solid #707070;
  opacity: 1;
  font: normal normal medium 20px/24px Pretendard;
  font-family: "Pretendard-medium";
  font-size: 20px;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 29px;
`;

export const CategoryBox = styled.div`
  width: 457px;
  height: 280px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #efefef;
  box-shadow: 2px 2px 5px #00000029;
  border-radius: 25px;
  box-sizing: border-box;
  margin-top: 26px;
  padding-top: 10px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > p {
    text-align: center;
    font: normal normal 900 44px/52px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin: 0;
  }
`;

export const ExpDetailBox = styled.div`
  min-width: 450px;
  width: 100%;
  max-width: 1250px;
  padding: 30px;
  // min-height: 280px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #efefef;
  box-shadow: 2px 2px 5px #00000029;
  border-radius: 25px;
  margin-left: 25px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  > span {
    text-align: center;
    font: normal normal 900 44px/52px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin: 0;
  }
  // *{border:1px solid red;}
`;

export const AddFile = styled.div`
  width: 1786px;
  min-height: 265px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #efefef;
  box-shadow: 2px 2px 5px #00000029;
  border-radius: 25px;
  margin-left: 47px;
  margin-top: 68px;
  // margin-bottom: 500px;
`;

export const AddButton = styled.button`
  width: 210px;
  height: 42px;
  background: ${props=>props.disabled?"#777":"#ff0000"} 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 50px;
  margin-bottom: 236px;
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    text-align: center;
    font: normal normal bold 20px/24px Pretendard;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: bold;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
`;

export const CancelButton = styled.button`
  width: 210px;
  height: 42px;
  background: #707070 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 50px;
  margin-bottom: 236px;
  margin-left: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    text-align: center;
    font: normal normal bold 20px/24px Pretendard;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: bold;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
`;

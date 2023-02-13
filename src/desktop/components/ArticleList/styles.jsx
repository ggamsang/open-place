import styled from "styled-components";
import Folder from "resources/Folder.svg";
import Document from "resources/document.svg";

export const Container = styled.div`
  * {
    // border: 1px dashed #AA0000;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1700px;
  max-width: 1920px;
  min-width: 1300px;
  margin: auto;

  li {
    list-style: none;
  }
`;

export const CategoryBox = styled.div`
  width: 422px;
  height: 59px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 5px #0000001a;
  border: 0.25px solid #b7b7b7;
  border-radius: 20px;
  opacity: 1;
  //   margin-top: 95px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    width: 150px;
    height: 30px;
    font: normal normal 700 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: transparent;

    &.active {
      background: #ff0000 0% 0% no-repeat padding-box;
      opacity: 1;
    }
    background: #707070 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-left: 20px;

    // &:nth-child(1) {
    //     background: #FF0000 0% 0% no-repeat padding-box;
    //     opacity: 1;
    // }
    &:nth-child(2) {
      //     background: #707070 0% 0% no-repeat padding-box;
      //     opacity: 1;
      margin-left: 20px;
    }
  }
`;

export const BoardTitleDiv = styled.div`
  width: 100%;
  //   height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  //   align-itmes: center;
  //   justify-content: flex-end;
  //   margin-right: 230px;
  position: relative;
`;

export const FreeBoard = styled.div`
  font: normal normal 700 25px/30px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  // margin-left: 790px;
`;

export const SortAs = styled.div`
  //   display: flex;
  //   margin-left: 669px;
  //   align-items: center;

  > button {
    outline: none;
    border: none;
    background: transparent;
    height: 22px;
    text-align: left;
    font: normal normal 300 19px/22px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    &:nth-child(1) {
      //   color: #ff0000;
    }
    &:nth-child(2) {
      //   color: #000000;
      margin-left: 24px;
    }
    &.active {
      color: #ff0000;
    }
  }
  position: absolute;
  right: 10px;
`;

export const TitleUserDate = styled.div`
  width: 1698px;
  height: 47px;
  // background: transparent url('img/구성 요소 130 – 1.png') 0% 0% no-repeat padding-box;
  border: 0.30000001192092896px solid #b7b7b7;
  opacity: 1;
  margin-top: 24px;
  display: flex;
  align-items: center;

  > span {
    font: normal normal 700 17px/20px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;

    &:nth-child(1) {
      margin-left: 72px;
    }

    &:nth-child(2) {
      margin-left: 1268px;
    }

    &:nth-child(3) {
      margin-left: 167px;
    }
  }
`;

export const HotBoard = styled.div`
  width: 1698px;
  height: 463px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.30000001192092896px solid #b7b7b7;
  opacity: 1;
  margin-top: 13px;
`;

export const Wrapper1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;

  div:nth-child(1) {
    font: normal normal 700 19px/22px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 54px;
  }

  div:nth-child(2) {
    width: 127px;
    height: 31px;
    background: #ff0000 0% 0% no-repeat padding-box;
    border-radius: 12px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    font: normal normal 700 17px/20px Pretendard;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;

    margin-left: 26px;
  }

  div:nth-child(3) {
    width: 30px;
    height: 30px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
    margin-left: 1096px;
  }

  div:nth-child(4) {
    // font: normal normal 500 17px/20px Pretendard;
    font-size: 17px;
    font-family: "Pretendard-medium";
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 6px;
  }

  div:nth-child(5) {
    font: normal normal 400 16px/19px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 94px;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
`;

export const Article = styled.div`
  width: 1306px;
  height: 340px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 5px #0000001a;
  border: 0.25px solid #b7b7b7;
  border-radius: 20px;
  opacity: 1;
  margin-top: 33px;
  margin-left: 47px;
`;

export const ArticleBox1 = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 100px;

  > div {
    &:nth-child(1) {
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
    }

    &:nth-child(2) {
      width: 0px;
      height: 20px;
      border: 0.5px solid #707070;
      opacity: 1;
      margin-left: 40.5px;
    }

    &:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 53.78px;

      width: 107px;
      height: 22px;
      background: #e9e9e9 0% 0% no-repeat padding-box;
      border-radius: 10px;
      opacity: 1;

      font: normal normal 400 15px/18px Noto Sans KR;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
    }
  }
`;

export const ArticleBox2 = styled.div`
  display: flex;
  margin-top: 33px;
  margin-left: 100px;

  > div {
    &:nth-child(1) {
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
    }

    &:nth-child(2) {
      width: 0px;
      height: 20px;
      border: 0.5px solid #707070;
      opacity: 1;
      margin-left: 40.5px;
    }

    &:nth-child(3) {
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
      margin-left: 53.5px;
    }
  }
`;

export const ArticleBox3 = styled.div`
  display: flex;
  margin-top: 33px;
  margin-left: 100px;

  > div {
    &:nth-child(1) {
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
    }

    &:nth-child(2) {
      width: 0px;
      height: 20px;
      border: 0.5px solid #707070;
      opacity: 1;
      margin-left: 53.5px;
    }

    &:nth-child(3) {
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
      margin-left: 53.5px;
    }
  }
`;

export const ArticleBox4 = styled.div`
  display: flex;
  margin-top: 31px;
  margin-left: 100px;

  > div {
    &:nth-child(1) {
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
    }

    &:nth-child(2) {
      width: 0px;
      height: 20px;
      border: 0.5px solid #707070;
      opacity: 1;
      margin-left: 53.5px;
    }

    &:nth-child(3) {
      width: 741px;
      height: 83px;
      background: #e9e9e9 0% 0% no-repeat padding-box;
      border-radius: 10px;
      opacity: 1;
      font: normal normal 300 17px/20px Pretendard;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
      margin-left: 53.5px;
      padding-top: 10px;
      padding-left: 11px;
    }
  }
`;

export const AddCommentButton = styled.div`
  width: 150px;
  height: 30px;
  background: #848484 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  font: normal normal 700 15px/18px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  margin-top: 112px;
  margin-left: 1139px;
`;

export const AddedFiles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid #000000;
  width: 345px;
  height: 340px;
  margin-top: 33px;

  > div:nth-child(2) {
    font: normal normal 600 18px/14px Pretendard;
    font-size: 18px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-top: 13px;
  }
`;

export const FolderIcon = styled.img.attrs({
  src: Folder,
})`
  width: 20px;
  height: 20px;
  margin-top: 20px;
`;

export const FileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const FileIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  border: 1px solid #b7b7b7;
  border-radius: 18px;
  margin-top: 13px;
`;

export const FileIcon = styled.img.attrs({
  src: Document,
})`
  width: 12px;
  height: 16px;
`;

export const FileName = styled.div`
  margin-left: 14px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: flex-starts;

  > div {
    &:nth-child(1) {
      font: normal normal 600 13px/14px Pretendard;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
    }
  }
`;

export const PercentBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9px;

  > div {
    height: 5px;
    border-radius: 25px;

    &:nth-child(1) {
      width: 120px;
      position: relative;
      background-color: #e3e2e2;
    }

    &:nth-child(2) {
      width: 60px;
      position: absolute;
      background-color: #707070;
    }
  }

  > span {
    font: normal normal 400 11px/14px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.6;
    margin-left: 10px;
  }
`;

export const AnswerBoard = styled.div`
  width: 1698px;
  height: 345px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.30000001192092896px solid #b7b7b7;
  opacity: 1;
  margin-top: 17px;
`;

export const Wrapper3 = styled.div`
  display: flex;
  align-items: center;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 31px;
    border: 1px solid #ff0000;
    border-radius: 12px;
    opacity: 1;
    // font: normal normal 500 17px/20px Pretendard;
    font-size: 17px;
    font-family: "Pretendard-medium";
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;

    margin-top: 8.5px;
    margin-left: 145px;
  }

  div:nth-child(2) {
    width: 30px;
    height: 30px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
    margin-left: 1096px;
  }

  div:nth-child(3) {
    // font: normal normal 500 17px/20px Pretendard;
    font-size: 17px;
    font-family: "Pretendard-medium";
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 6px;
  }

  div:nth-child(4) {
    font: normal normal 400 16px/19px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 94px;
  }
`;

export const AnswerBox = styled.div`
  width: 1306px;
  height: 267px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 5px #0000001a;
  border: 0.25px solid #b7b7b7;
  border-radius: 20px;
  opacity: 1;
  position: relative;

  margin-top: 18.5px;
  margin-left: 47px;
`;

export const AddCommentButton2 = styled.div`
  width: 150px;
  height: 30px;
  background: #ff0000 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  font: normal normal 700 15px/18px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  position: absolute;
  top: 219px;
  margin-left: 1139px;
`;

export const OtherPost = styled.div`
  width: 1698px;
  height: 47px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.30000001192092896px solid #b7b7b7;
  opacity: 1;
  margin-top: 13px;
  box-sizing: border-box;
  padding: 0px 10px;
  display: grid;
  grid-template-columns: 79% 15% 5%;

  div:nth-child(1) {
    margin-left: 10px;
    font: normal normal 700 19px/22px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  div:nth-child(2) {
    display: flex;
    width: max-content;

    padding: 0 10px;
    justify-content: space-start;
  }
  .thumb {
    justify-content: center;
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-size: cover;
    opacity: 1;
    border-radius: 50%;
  }
  div:nth-child(3) {
    font: normal normal 500 17px/20px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  div:nth-child(4) {
    font: normal normal 400 16px/19px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const UploadPostButton = styled.button`
  width: 195px;
  height: 39px;
  font: normal normal 700 19px/23px Pretendard;
  letter-spacing: 0px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 103px;
  margin-bottom: 100px;
  //   margin-bottom: 280px;
  //   margin-left: 1504px;
  color: #ffffff;
  border: none;
  outline: none;
  ${(prop) =>
    prop.active
      ? `background: #FF0000 0% 0% no-repeat padding-box;`
      : `background: #707070 0% 0% no-repeat padding-box;`}
`;

export const PaginationWrapper = styled.div`
  cursor: default;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .active {
    background-color: red;
    color: white;
  }
  .item {
    padding: 5px 12px;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

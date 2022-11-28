import styled, { css } from "styled-components";
import tagbutton from "src/imgs/tagbutton.svg";
import tagbuttonmore from "src/imgs/tagbutton-more.svg";
import plusicon from "src/imgs/tagbutton-more-add.svg";

export const Container = styled.div`
  // * {
  //   border: 1px solid red;
  // }
  z-index: 999;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  //   position: absolute;
  //   top: 101px;
  // margin-bottom: ${(props) => (!props.isShowCondition ? "25px" : "50px")};
  // margin-bottom: 50px;
  display: flex;
`;
export const Tags = styled.div`
  // margin-left: 492px;
  display: flex;
`;

export const TagButton = styled.div`
  min-width: 94px;
  width: max-content;
  height: 30px;
  margin-left: 8px;
  background: #0000001f 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 16px;
  opacity: 1;
  display: flex;
`;

export const TagButtonText = styled.div`
  font: normal normal 400 14px Pretendard;
  letter-spacing: 0.25px;
  color: #000000de;
  opacity: 1;
  margin-top: 7px;
  margin-left: 12px;
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

export const MoreButton = styled.div`
  width: 92px;
  height: 30px;
  margin-left: 8px;
  // background: #EE00001F 0% 0% no-repeat padding-box;
  border: 1px solid #ff00001f;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;
  visibility: ${(props) => (props.isShowCondition ? "hidden" : "visible")};

  > span {
    text-align: center;
    align-items: center;
    font: normal normal 500 14px/16px Pretendard;
    letter-spacing: 1.25px;
    color: #ff0000;
    text-transform: uppercase;
    opacity: 1;
    margin-left: 36px;
    margin-top: 2px;
  }
`;

export const MoreButtonPlusIcon = styled.img.attrs({
  src: plusicon,
})`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  position: absolute;
`;

export const LessButton = styled.div`
  width: 92px;
  height: 30px;

  // background: #EE00001F 0% 0% no-repeat padding-box;
  border: 1px solid #000000;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;

  position: absolute;
  margin-left: 424px;
  // visibility: hidden;
  visibility: ${(props) => (props.isShowCondition ? "visible" : "hidden")};

  > span {
    text-align: center;
    align-items: center;
    font: normal normal 500 14px/16px Pretendard;
    font-size: 14px;
    letter-spacing: 2.23px;
    color: #000000;
    text-transform: uppercase;
    opacity: 1;
    margin-left: 32px;
  }
`;

export const CancelButton = styled.div`
  width: 92px;
  height: 30px;
  margin-left: 8px;
  // background: #EE00001F 0% 0% no-repeat padding-box;
  border: 1px solid #ee0000;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  text-align: center;
  align-items: center;
  cursor: pointer;

  > span {
    text-align: center;
    align-items: center;
    font: normal normal 500 14px/16px Pretendard;
    font-size: 14px;
    letter-spacing: 2.23px;
    color: #ee0000;
    text-transform: uppercase;
    opacity: 1;
    margin-left: 18px;
  }
`;

export const ConditionBox = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;

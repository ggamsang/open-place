import React, { useState } from "react";
import styled, { css } from "styled-components";
import tagbutton from "resources/place/tagbutton.svg";
import tagbuttonmore from "resources/place/tagbutton-more.svg";
import plusicon from "resources/place/tagbutton-more-add.svg";

const Container = styled.div`
  * {
    border: 1px solid red;
  }
  // width: 1920px;
  // height: 30px;
  //   margin-bottom: ${(props) => (!props.ConditionBox ? "25px" : "50px")};
  // margin-bottom: 25px;
  z-index: 999;
`;

const Wrapper = styled.div`
  //   position: absolute;
  //   top: 101px;
  // margin-bottom: ${(props) => (!props.isShowCondition ? "25px" : "50px")};
  // margin-bottom: 50px;
  display: flex;
`;
const Tags = styled.div`
  margin-left: 492px;
  display: flex;
`;

const TagButton = styled.div`
  width: 94px;
  height: 30px;
  margin-left: 8px;
  background: #0000001f 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 16px;
  opacity: 1;
  display: flex;
`;

const TagButtonText = styled.div`
  font: normal normal 400 14px Pretendard;
  letter-spacing: 0.25px;
  color: #000000de;
  opacity: 1;
  margin-top: 7px;
  margin-left: 12px;
`;

const TagButtonDelete = styled.div`
  background: #00000099 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 28px;
  width: 14px;
  height: 14px;
  margin-top: 8px;
  margin-left: 3px;
`;

const MoreButton = styled.div`
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

const MoreButtonPlusIcon = styled.img.attrs({
  src: plusicon,
})`
  width: 24px;
  height: 24px;
  // margin-top: 3px;
  margin-left: 8px;
  position: absolute;
  // left: 8px;
  // top: 3px;
`;

const LessButton = styled.div`
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

const CancelButton = styled.div`
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

const ConditionBox = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
`;

const SortButton = styled.button`
  height: 30px;
  font: normal normal 500 25px/30px Pretendard;
  line-height: 22px;
  margin: auto;
  letter-spacing: 0px;
  text-align: center;
  border: none;
  background: none;
  outline: none;
  text-align: left;
  color: ${(prop) => (prop.selected ? "#FF0000" : "#000000")};
  opacity: 1;
`;

const SORT_UPDATE = "update";
const SORT_LIKE = "like";
const SORT_UPDATE_KOR = "최신순";
const SORT_LIKE_KOR = "인기순";

const SortOptions = ({ onChange, selected }) => {
  const [sort, setSort] = useState(selected || SORT_UPDATE);
  const onClickedButton = (sort) => {
    setSort(sort);
    onChange && onChange(sort);
  };
  return (
    <Container>
      <SortButton
        selected={sort === SORT_LIKE}
        onClick={() => onClickedButton(SORT_LIKE)}
      >
        {SORT_LIKE_KOR}
      </SortButton>
      <SortButton
        selected={sort === SORT_UPDATE}
        onClick={() => onClickedButton(SORT_UPDATE)}
      >
        {SORT_UPDATE_KOR}
      </SortButton>
    </Container>
  );
};

export default SortOptions;

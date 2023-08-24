import React from "react";
import styled from "styled-components";
import TopItemListContainer from "mobile/containers/TopItemListContainer";

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
  font: normal normal 700 18px/21px Pretendard;
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
      <Wrapper>
        <Title>{strTopItemList}</Title>
        <div className="list_wrap">
          <TopItemListContainer />
        </div>
      </Wrapper>
    );
  }
}
export default TopItemList;

import styled from "styled-components";

export const Wrapper = styled.div``;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;

  .text {
    margin: auto;
    width: max-content;
    height: 18px;
    text-align: center;
    font: normal normal 700 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
`;
export const Categories = styled.div`
  margin: auto;
  margin-bottom: 30px;
  width: max-content;
  height: 59px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 5px #0000001a;
  border: 0.25px solid #b7b7b7;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  box-sizing: border-box;
  padding: 15px 50px;
`;
export const PlayButton = styled(Button)`
  width: 150px;
  height: 30px;
  background: #f59118 0% 0% no-repeat padding-box;
`;
export const LearnButton = styled(Button)`
  width: 150px;
  height: 30px;
  background: #9614fc 0% 0% no-repeat padding-box;
`;
export const MakeButton = styled(Button)`
  width: 150px;
  height: 30px;
  background: #2a71fc 0% 0% no-repeat padding-box;
`;

export const Sorts = styled.div`
  width: max-content;
  margin-left: auto;
  margin-right: 70px;
  margin-bottom: 30px;
`;
export const SortButton = styled(Button)`
  .text-sort {
    height: 30px;
    text-align: left;
    font: normal normal 500 25px/30px Pretendard;
    letter-spacing: 0px;
    color: ${(prop) => (prop.selected ? "#FF0000" : "#000000")};
    opacity: 1;
  }
`;

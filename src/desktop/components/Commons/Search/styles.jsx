import styled from "styled-components";
export const MessageBox = styled.div`
  width: 957px;
  height: 63px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #00000029;
  border: 1px solid #c4c4c44b;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 19px;
  margin-bottom: 86px;

  > span {
    font-family: "Pretendard-bold";
    font-size: 15px;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }
`;

export const FindPeople = styled.div`
  width: 642px;
  height: 31px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  margin-left: 10px;

  > span {
    font-family: "Pretendard-normal";
    font-size: 15px;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-left: 20px;
  }
`;

export const FindButton = styled.div`
  width: 150px;
  height: 31px;
  background: #ff0000 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;

  > span {
    font: normal normal 700 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
`;
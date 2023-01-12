import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  min-width: 1300px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageText = styled.div`
  font-family: "Pretendard-medium";
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 10px;
`;

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

export const ChatList = styled.ul`
  width: 400px;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin-bottom: 400px;
  // margin-right: 17px;
  padding-top: 20px;
  list-style: none;
`;

export const UserChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 58px;
  // :hover {
  //   background-color: rgba(200, 200, 200, 0.25);
  //   border-radius: 16px;
  // }
`;

export const UserImg = styled.div`
  min-width: 91px;
  min-height: 90px;
  background: #000000 0% 0% no-repeat padding-box;
  box-shadow: 0px 15px 30px #00000029;
  border-radius: 16px;
  opacity: 1;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;

export const UserInfo = styled.div`
  display: block;
  // margin-left: 13px;
  margin: auto;
  width: 100%;
`;

export const UserNameAndDate = styled.div`
  display: flex;

  span:nth-child(1) {
    font: normal normal 400 21px/25px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  span:nth-child(2) {
    font: normal normal 400 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-left: 59px;
  }
`;

export const UserNotification = styled.div`
  width: 223px;
  font: normal normal 500 15px/25px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 9px;
`;

export const ChatWindow = styled.div`
  width: 1306px;
  height: 1000px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 5px #0000001a;
  border: 0.25px solid #b7b7b7;
  border-radius: 20px;
  opacity: 1;
  margin-bottom: 400px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

export const NicknameText = styled.div`
  font-family: "Pretendard-medium";
  font-size: 30px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 19px;
`;

export const HorizonLine = styled.div`
  width: 1256px;
  height: 2px;
  background: #efefef 0% 0% no-repeat padding-box;
  // border: 1px solid #EFEFEF;
  opacity: 1;
  margin-top: 15px;
  margin-bottom: 28px;
`;

export const MyChat = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  // margin-right: 9px;
  margin-bottom: 11px;
`;

export const ChatDate = styled.div`
  font: normal normal 400 13px/16px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-right: 10px;
`;

export const ChatBubble = styled.div`
  min-width: 180px;
  width: max-content;
  max-width: 500px;
  height: 30px;
  background: #e9e9e9 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OtherChat = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 11px;
`;

export const ChatWrapper = styled.div`
  height: 800px;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-top: 10px;
`;
export const SendMessageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatInputBox = styled.div`
  width: 1136px;
  height: 60px;
  background: #E9E9E9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  outline: 1px solid gray;
  box-sizing: border-box;
  padding: 3px;
  overflow: hidden auto;
`;

export const SendButton = styled.button`
  width: 100px;
  height: 50px;
  outline: none;
  background: transparent;
  border: 1px solid #ff0000;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  > span {
    font: normal normal 500 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #ff0000;
    opacity: 1;
  }
`;

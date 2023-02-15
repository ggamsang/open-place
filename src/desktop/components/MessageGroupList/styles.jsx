import styled from "styled-components";
import profile from "resources/Profile.svg";

export const Peer = styled.div`
  box-sizing: border-box;
  // width: 355px;
  width: 100%;
  height: 79px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 15px 13px 15px 10px;
  margin-bottom: 15px;

  .thumbnail {
    background-image: url(${(props) => props.url || profile});
    width: 49px;
    height: 49px;
    border-radius: 100%;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    position: relative;
    .led {
      position: absolute;
      transform: translate(-25%, -100%);
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background: #ff0000 0% 0% no-repeat padding-box;
      font: normal normal 500 15px/20px Pretendard;
      color: #ffffff;
      text-align: center;
    }
  }
  &.row {
    display: flex;
    flex-direction: row;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .date {
    margin-left: auto;
    height: 16px;
    text-align: left;
    font: normal normal 300 13px/16px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    width: max-content;
  }
  .text-wrapper {
    margin-left: 10px;
  }
  .nick {
    height: 18px;
    text-align: left;
    font: normal normal bold 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
  }
  .recent {
    margin-top: 5px;
    height: 18px;
    text-align: left;
    font: normal normal normal 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
  }
`;
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
  background: #e9e9e9 0% 0% no-repeat padding-box;
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

export const MessageContainer = styled.div`
  // display: flex;
  // flex-direction: row;
  display: grid;
  grid-template-columns: 25% 75%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;
export const Groups = styled.div`
  border: 2px solid #efefef;
  box-shadow: 2px 2px 5px #00000029;
  border-radius: 25px;
  box-sizing: border-box;
  padding-top: 20px;
`;
export const ChatDetail = styled.div`
  border: 2px solid #efefef;
  box-shadow: 2px 2px 5px #00000029;
  border-radius: 25px;
  margin-left: 20px;
  height: calc(100vh - 29vh);

  .select-user {
    width: max-content;
    font-size: 3rem;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

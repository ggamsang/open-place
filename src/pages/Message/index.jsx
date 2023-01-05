import React from "react";
import * as styled from "./styles";
import Header from "../../components/ListPage-Header";
import Navbar from "../../components/ListPage-Navbar";
import Footer from "../../components/Footer";
import NeedToLogin from "../../mobile/verify";
import PageLayout from "../../components/PageLayout";

const UserChat = () => {
  return (
    <styled.UserChat>
      <styled.UserImg />
      <styled.UserInfo>
        <styled.UserNameAndDate>
          <span>닉네임</span>
          <span>2022.09.25</span>
        </styled.UserNameAndDate>
        <styled.UserNotification>
          알림내용알림내용알림내용알림내용알림내용알림내용알림내용알림내용
        </styled.UserNotification>
      </styled.UserInfo>
    </styled.UserChat>
  );
};
const Message = () => {
  return (
    <styled.Container>
      {/* <Header />
      <Navbar /> */}
      <styled.MessageText>메세지</styled.MessageText>
      <styled.MessageBox>
        <span>닉네임/경험</span>
        <styled.FindPeople>
          <span>대화상대 찾기</span>
        </styled.FindPeople>
        <styled.FindButton>
          <span>찾아보기</span>
        </styled.FindButton>
      </styled.MessageBox>
      <styled.Wrapper>
        <styled.ChatList>
          <UserChat />
          <UserChat />
          <UserChat />
        </styled.ChatList>
        <styled.ChatWindow>
          <styled.NicknameText>닉네임</styled.NicknameText>
          <styled.HorizonLine />
          <styled.MyChat>
            <styled.ChatDate>2022.7.31(금) 오후 16:00</styled.ChatDate>
            <styled.ChatBubble>텍스트 내용</styled.ChatBubble>
          </styled.MyChat>
          <styled.MyChat>
            <styled.ChatDate>2022.7.31(금) 오후 16:00</styled.ChatDate>
            <styled.ChatBubble>텍스트 내용</styled.ChatBubble>
          </styled.MyChat>
          <styled.MyChat>
            <styled.ChatDate>2022.7.31(금) 오후 16:00</styled.ChatDate>
            <styled.ChatBubble>텍스트 내용</styled.ChatBubble>
          </styled.MyChat>
          <styled.OtherChat>
            <styled.ChatBubble>텍스트 내용</styled.ChatBubble>
            <styled.ChatDate>2022.7.31(금) 오후 16:00</styled.ChatDate>
          </styled.OtherChat>
          <styled.OtherChat>
            <styled.ChatBubble>텍스트 내용</styled.ChatBubble>
            <styled.ChatDate>2022.7.31(금) 오후 16:00</styled.ChatDate>
          </styled.OtherChat>
          <styled.OtherChat>
            <styled.ChatBubble>텍스트 내용</styled.ChatBubble>
            <styled.ChatDate>2022.7.31(금) 오후 16:00</styled.ChatDate>
          </styled.OtherChat>
          <styled.SendMessageDiv>
            <styled.ChatInputBox />
            <styled.SendButton>
              <span>보내기</span>
            </styled.SendButton>
          </styled.SendMessageDiv>
        </styled.ChatWindow>
      </styled.Wrapper>
    </styled.Container>
  );
};
const MessagePage = () => {
  return NeedToLogin(
    <PageLayout>
      <Message />
    </PageLayout>
  );
};

export default MessagePage;

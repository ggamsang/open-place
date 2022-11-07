import React, { useState } from "react";
import {
  Container,
  Logo,
  Play,
  PlayText,
  Learn,
  LearnText,
  Make,
  MakeText,
  SearchExp,
  SearchExpIcon,
  SearchExpText,
  RegistBox,
  Register,
  RegisterText,
  Login,
  LoginIcon,
  LoginText,
  NotificationIcon,
  EmailIcon,
  RegisterIcon,
  Nickname,
  NicknameIcon,
  NicknameText,
} from "./styles";
import { goto } from "../../../utils/navigator";

const Header = (props) => {
  const [keyword, setKeyword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Container>
      <Logo onClick={() => goto("MAIN")} />

      <Play onClick={() => goto("PLAY")}>
        <PlayText>놀기</PlayText>
      </Play>

      <Learn onClick={() => goto("LEARN")}>
        <LearnText>배우기</LearnText>
      </Learn>

      <Make onClick={() => goto("MAKE")}>
        <MakeText>만들기</MakeText>
      </Make>

      <div
        style={{
          border: "1px solid red",
          display: "flex",
          position: "relative",
          marginLeft: "9px",
        }}
      >
        <SearchExpIcon />
        <SearchExp
          value={keyword}
          onKeyUp={(e) => (e.key === "Enter" ? goto("SEARCH", keyword) : null)}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <SearchExpText opacity={keyword ? 0.5 : 1}>경험 찾아보기</SearchExpText>
      </div>
      {loggedIn ? (
        <>
          <NotificationIcon />
          <EmailIcon />
          <RegistBox>
            <Register>
              <RegisterIcon />
              <RegisterText>등록</RegisterText>
            </Register>
            <Nickname>
              <NicknameIcon />
              <NicknameText>닉네임</NicknameText>
            </Nickname>
          </RegistBox>
        </>
      ) : (
        <RegistBox>
          <Register onClick={() => goto("SIGNUP")}>
            <RegisterText>회원가입</RegisterText>
          </Register>

          <Login onClick={() => goto("SIGNIN")}>
            <LoginIcon />
            <LoginText>로그인</LoginText>
          </Login>
        </RegistBox>
      )}
    </Container>
  );
};

export default Header;

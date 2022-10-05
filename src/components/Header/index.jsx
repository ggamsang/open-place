import React from "react";
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
} from "./styles";
import { goto } from "../../utils/navigator";

const Header = () => {
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

      <div style={{ display: "flex" }}>
        {/* <SearchExpIcon /> */}
        <SearchExp />
        {/* <SearchExpText>경험 찾아보기</SearchExpText> */}
      </div>
      {/* <input type="text" /> */}
      {/* </SearchxExp> */}

      <RegistBox>
        <Register onClick={() => goto("SIGNUP")}>
          <RegisterText>회원가입</RegisterText>
        </Register>

        <Login onClick={() => goto("SIGNIN")}>
          <LoginIcon />
          <LoginText>로그인</LoginText>
        </Login>
      </RegistBox>
    </Container>
  );
};

export default Header;

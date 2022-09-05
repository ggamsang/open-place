import React from 'react';
import * as styled from './styles';

const Header = () => {
  return (
    <styled.Container>
      <styled.Logo />
      <styled.Play>
        <styled.PlayText>놀기</styled.PlayText>
      </styled.Play>
      <styled.Learn>
        <styled.LearnText>배우기</styled.LearnText>
      </styled.Learn>
      <styled.Make>
        <styled.MakeText>만들기</styled.MakeText>
      </styled.Make>
      <styled.SearchExp>
        <styled.SearchExpIcon />
        <styled.SearchExpText>경험 찾아보기</styled.SearchExpText>
      </styled.SearchExp>
      <styled.RegistBox>
        <styled.Register>
          <styled.RegisterText>회원가입</styled.RegisterText>
        </styled.Register>
        <styled.Login>
          <styled.LoginIcon />
          <styled.LoginText>로그인</styled.LoginText>
        </styled.Login>
      </styled.RegistBox>
    </styled.Container>
  );
};

export default Header;

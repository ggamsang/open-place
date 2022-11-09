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
      <styled.NotificationIcon />
      <styled.EmailIcon />
      <styled.RegistBox>
        <styled.Register>
          <styled.RegisterIcon />
          <styled.RegisterText>등록</styled.RegisterText>
        </styled.Register>
        <styled.Nickname>
          <styled.NicknameIcon />
          <styled.NicknameText>닉네임</styled.NicknameText>
        </styled.Nickname>
      </styled.RegistBox>
    </styled.Container>
  );
};

export default Header;

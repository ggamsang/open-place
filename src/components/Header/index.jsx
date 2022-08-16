import React from 'react';
import * as styled from './styles';

const Header = () => {
  return (
    <styled.Container>
      <styled.Logo />
      <styled.Top1 />
      <styled.Top2 />
      <styled.Top3 />
      <styled.Top4 />
      <styled.RegistBox>
        <styled.Register>
          <styled.RegisterImg />
          <styled.RegisterText>회원가입</styled.RegisterText>
        </styled.Register>
        <styled.Login />
      </styled.RegistBox>
    </styled.Container>
  );
};

export default Header;

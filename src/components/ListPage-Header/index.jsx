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
        <styled.Register />

        <styled.Nickname>
          <styled.NicknameProfileImg />
          <styled.NicknameBox />
          <styled.NicknameText>닉네임</styled.NicknameText>
        </styled.Nickname>
      </styled.RegistBox>
      {/* <styled.SideBar>
        <styled.SideBarImg />
        <styled.SideBarIcon1 />
        <styled.SideBarText>만들기</styled.SideBarText>
      </styled.SideBar> */}
    </styled.Container>
  );
};

export default Header;

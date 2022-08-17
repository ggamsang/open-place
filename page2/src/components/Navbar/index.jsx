import React from 'react';
import * as styled from './styles';

const Navbar = () => {
  return (
    <styled.SideBar>
      {/* <styled.SideBarImg /> */}
      <styled.SideBarMenu />
      <styled.SidebarMenuText>메뉴</styled.SidebarMenuText>
      <styled.SideBarControl />
      {/* <styled.SideBarIcon1 />
      <styled.SideBarText1>만들기</styled.SideBarText1>
      <styled.SideBarIcon2 />
      <styled.SideBarText2>배우기</styled.SideBarText2>
      <styled.SideBarIcon3 />
      <styled.SideBarText3>모여서놀기</styled.SideBarText3>
      <styled.SideBarIcon4 />
      <styled.SideBarText4>커뮤니티</styled.SideBarText4>
      <styled.SideBarIcon5 />
      <styled.SideBarText5>ABOUT</styled.SideBarText5> */}
    </styled.SideBar>
  );
};

export default Navbar;

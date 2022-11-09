import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { goto } from "../../utils/navigator";
import Logo from "../Commons/Logo";
import * as styled from "./styles";

const Navbar = () => {
  const [fold, setFold] = useState(false);
  const [fixed, setFixed] = useState(false);
  const onClickedFoldButton = () => setFold(!fold);
  const sidebar = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (!fixed) {
        if (window.scrollY > 90) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      }
    });
  }, []);
  return (
    <styled.SideBar ref={sidebar} folded={fold} fixed={fixed}>
      <styled.SideBarInner folded={fold}>
        <styled.SideBarControl folded={fold} onClick={onClickedFoldButton} />
        {fold ? (
          <>
            <styled.SideBarText>메뉴</styled.SideBarText>
          </>
        ) : (
          <>
            {fixed && <Logo type={"tiny"} onClickEvent={() => goto("MAIN", "")}/>}
            <styled.MenuButton onClick={() => goto("MAKE", "")}>
              <styled.SideBarIcon1 />
              <styled.SideBarText>만들기</styled.SideBarText>
            </styled.MenuButton>
            <styled.MenuButton onClick={() => goto("LEARN", "")}>
              <styled.SideBarIcon2 />
              <styled.SideBarText>배우기</styled.SideBarText>
            </styled.MenuButton>
            <styled.MenuButton onClick={() => goto("PLAY", "")}>
              <styled.SideBarIcon3 />
              <styled.SideBarText>모여서놀기</styled.SideBarText>
            </styled.MenuButton>
            <styled.MenuButton onClick={() => goto("COMMUNITY")}>
              <styled.SideBarIcon4 />
              <styled.SideBarText>커뮤니티</styled.SideBarText>
            </styled.MenuButton>

            <styled.MenuButton onClick={() => goto("INTRO")}>
              <styled.SideBarIcon5 />
              <styled.SideBarText>ABOUT</styled.SideBarText>
            </styled.MenuButton>
          </>
        )}
      </styled.SideBarInner>
    </styled.SideBar>
  );
};

export default Navbar;

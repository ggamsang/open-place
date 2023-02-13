import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { goto } from "navigator";
import Logo from "desktop/commons/Logo";
import * as styled from "./styles";
import cookie from "react-cookies";

const Navbar = () => {
  const [fold, setFold] = useState(cookie.load("fold") === "false");
  const [fixed, setFixed] = useState(false);
  const onClickedFoldButton = () => {
    setFold(!fold);
    cookie.save("fold", fold, { path: "/" });
  };
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
        <styled.ControlBall folded={fold} onClick={onClickedFoldButton}>
          <styled.SideBarArrow>
            <span className={fold ? "active" : ""} />
            <span className={fold ? "active" : ""} />
          </styled.SideBarArrow>
        </styled.ControlBall>

        {fold ? (
          <styled.SideBarTextFolded>메뉴</styled.SideBarTextFolded>
        ) : (
          <>
            {fixed && (
              <Logo
                type={"tiny"}
                onClickEvent={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              />
            )}
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
              <styled.SideBarText>놀기</styled.SideBarText>
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

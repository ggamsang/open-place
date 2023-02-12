import styled from "styled-components";
import sidebar from "resources/sidebar2.png";
import sidebaricon1 from "resources/sidebar-heart.svg";
import sidebaricon2 from "resources/sidebar-activity.svg";
import sidebaricon3 from "resources/sidebar-user.svg";
import sidebaricon4 from "resources/sidebar-star.svg";
import sidebaricon5 from "resources/sidebar-info.svg";
import sidebarcontrol from "resources/sidebar-control.png";

export const SideBar = styled.div`
  // * {
  //   border: 1px solid red;
  // }
  width: 122px;
  padding-bottom: ${(props) => (props.folded ? 0 : 20)}px;
  // min-height: 507px;
  background: transparent linear-gradient(270deg, #8743ff 0%, #4136f1 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 15px 30px #1466cc29;
  border-radius: 28px;
  opacity: 1;
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  z-index: 1;
  ${(props) =>
    props.fixed ? `position: fixed; top: 10px;` : `position: absolute;`}
  ${(props) =>
    props.folded
      ? `
  width: 122px;
  height: 26px;
  gradient(270deg, #2854F8 0%, #4068FA 19%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ` : ``}
`;
export const SideBarInner = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${(props) => (props.folded ? 0 : 50)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // transition: all .7s ease;
`;
export const SideBarFoldButton = styled.button`
  width: 79px;
  height: 79px;
  transform: matrix(-0.73, -0.68, 0.68, -0.73, 0, 0);
  background: transparent linear-gradient(239deg, #054efa 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 15px 30px #1466cc29;
  border-radius: 28px;
  opacity: 1;
`;
export const SideBarImg = styled.img.attrs({
  src: sidebar,
})`
  width: 99px;
  height: 503px;
  z-index: 1;
`;

export const SideBarIcon1 = styled.img.attrs({
  src: sidebaricon1,
})`
  width: 33.69px;
  height: 32.01px;
  z-index: 2;
`;

export const SideBarIcon2 = styled.img.attrs({
  src: sidebaricon2,
})`
  width: 33.69px;
  height: 33.69px;
  z-index: 2;
`;

export const SideBarIcon3 = styled.img.attrs({
  src: sidebaricon3,
})`
  width: 37.06px;
  height: 26.96px;
  z-index: 2;
`;

export const SideBarIcon4 = styled.img.attrs({
  src: sidebaricon4,
})`
  width: 33.7px;
  height: 32.02px;
  z-index: 2;
`;

export const SideBarIcon5 = styled.img.attrs({
  src: sidebaricon5,
})`
  width: 39.84px;
  height: 39.84px;
  z-index: 2;
`;
export const ControlBall = styled.div`
  width: 57px;
  height: 57px;
  z-index: 3;
  position: absolute;
  right: -40px;
  top: -20px;
  // outline: none;
  // border: none;
  background: transparent linear-gradient(239deg, #054EFA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;
export const SideBarArrow = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  position: relative;
  margin: 0 1rem;
  span {
    top: .5rem;
    position: absolute;
    width: .75rem;
    height: .1rem;
    background-color: #efefef;
    display: inline-block;
    transition: all .7s ease;
  }
  span:nth-child(1) {
    left: 0;
    transform: rotate(-45deg);
    &.active{
      transform: rotate(45deg);
    }
  }
  span:nth-child(2) {
    right: 0;
    transform: rotate(45deg);
    &.active{
      transform: rotate(-45deg);
    }
  }
`;

export const SideBarControl = styled.button`
  background: url(${sidebarcontrol});
  width: 57px;
  height: 57px;
  z-index: 3;
  position: absolute;
  right: -40px;
  top: -20px;
  border: none;
  outline: none;
  ${(props) => (props.folded ? "transform: rotate(180deg);" : "")}
`;
export const SideBarTextFolded = styled.div`
  font: normal normal 700 19px/18px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  z-index: 2;
  width: max-content;
  margin: auto;
`;
export const SideBarText = styled.div`
  font: normal normal 700 19px/18px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  z-index: 2;
  width: max-content;
  margin: auto;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: auto;
  width: 100%;
  padding: 15px 0px;
  margin-bottom: 2px;
  :last-child {
    margin-bottom: 0px;
  }
  :hover {
    background: rgba(255, 0, 0, 0.15);
  }
`;

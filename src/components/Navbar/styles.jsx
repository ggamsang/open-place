import styled from 'styled-components';
import sidebar from '../../imgs/sidebar2.png';
import sidebaricon1 from '../../imgs/sidebar-heart.svg';
import sidebaricon2 from '../../imgs/sidebar-activity.svg';
import sidebaricon3 from '../../imgs/sidebar-user.svg';
import sidebaricon4 from '../../imgs/sidebar-star.svg';
import sidebaricon5 from '../../imgs/sidebar-info.svg';
import sidebarcontrol from '../../imgs/sidebar-control.png';


export const SideBar = styled.div`
  width: 122px;
  height: 507px;
  display: inline-block;
  position: absolute;
  left: 0px;
  top: 0px;
`;


export const SideBarImg = styled.img.attrs({
  src: sidebar,
})`
  width: 99px;
  height: 503px;
  position: absolute;
  display: inline-block;
  top: 103px;
  z-index: 1;
`;

export const SideBarIcon1 = styled.img.attrs({
  src: sidebaricon1,
})`
  width: 33.69px;
  height: 32.01px;
  z-index: 2;
  top: 171.03px;
  left: 33.88px;
  position: absolute;
`;

export const SideBarIcon2 = styled.img.attrs({
    src: sidebaricon2,
})`
    width: 33.69px;
    height: 33.69px;
    z-index: 2;
    top: 257.78px;
    left: 34.74px;
    position: absolute;
`;

export const SideBarIcon3 = styled.img.attrs({
    src: sidebaricon3,
})`
    width: 37.06px;
    height: 26.96px;
    z-index: 2;
    top: 346.21px;
    left: 30.97px;
    position: absolute;
`;

export const SideBarIcon4 = styled.img.attrs({
    src: sidebaricon4,
})`
    width: 33.7px;
    height: 32.02px;
    z-index: 2;
    top: 423.4px;
    left: 33.51px;
    position: absolute;
`;

export const SideBarIcon5 = styled.img.attrs({
    src: sidebaricon5,
})`
    width: 39.84px;
    height: 39.84px;
    z-index: 2;
    top: 504.18px;
    left: 30.44px;
    position: absolute;
`;



export const SideBarText1 = styled.div`
  font: normal normal bold 19px/18px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  z-index: 2;
  position: absolute;
  top: 204.88px;
  left: 23.79px;
`;

export const SideBarText2 = styled.div`
  font: normal normal bold 19px/18px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  z-index: 2;
  position: absolute;
  top: 293.32px;
  left: 23.79px;
`;

export const SideBarText3 = styled.div`
  font: normal normal bold 19px/18px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  z-index: 2;
  position: absolute;
  top: 376.51px;
  left: 8.5px;
`;

export const SideBarText4 = styled.div`
  font: normal normal bold 19px/18px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  z-index: 2;
  position: absolute;
  top: 458.75px;
  left: 15.39px;
`;

export const SideBarText5 = styled.div`
  font: normal normal bold 19px/18px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  z-index: 2;
  position: absolute;
  top: 547.6px;
  left: 15.39px;
`;

export const SideBarControl = styled.img.attrs({
    src: sidebarcontrol,
})`
    width: 56.97px;
    height: 56.97px;
    z-index: 3;
    top: 84.52px;
    left: 66.52px;
    position: absolute;
`;
     

import styled from "styled-components";
import iAlarm from "source/alarm.png";
import noimg from "source/noimg.png";
import opendesign_style from "opendesign_style";
import new_logo_notifications from "source/new_logo_notifications.svg";

export const AlarmIcon = styled.div`
  width: 44px;
  height: 44px;
  opacity: 1;
  background: url(${new_logo_notifications});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const AlarmList = styled.div`
  width: 310px;
  height: 500px;
  padding: 12px 14px;
  display: ${(props) => props.display};
  z-index: 999;
  position: absolute;
  pointer-events: auto;
  top: 25px;
  right: 15px;
  overflow-y: auto;
  z-index: 904;
  background-color: #ffffff;
  box-shadow: 8px 8px 8px #0000002b;
  font-family: Noto Sans KR;
  .list {
    width: 100%;
  }

  // @media only screen and (min-width : ${opendesign_style.resolutions
    .SmallMaxWidth}px)
  // and (max-width : ${1024}px) {
  //     left:-150px;
  // }
  // @media only screen and (min-width : ${opendesign_style.resolutions
    .SmallMinWidth}px)
  // and (max-width : ${opendesign_style.resolutions.SmallMaxWidth}px) {
  //     width:360px;
  //     left:-100px;
  // }

  // scroll
  ::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  :hover {
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: white;
    }
    ::-webkit-scrollbar-thumb {
      background: red;
      border-right: 2px white solid;
      border-radius: 0px;
      background-clip: padding-box;
    }
  }
`;
export const NewListItem = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  opacity: ${(props) => (props.confirm ? 0.5 : 1)};
  display: flex;

  :hover {
    background-color: rgba(0, 0, 0, 0.125);
  }

  .row {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
  }
  .alarm_header {
    width: 100%;
    height: 19px;
    font-size: 12px;
    font-family: Spoqa Han Sans Neo;
    * {
      font-size: 12px;
    }
    font-weight: 300;
  }
  .alarm_text {
    width: 100%;
    line-height: 22px;
    font-family: Spoqa Han Sans Neo, Light;
    font-size: 15px;
    font-weight: 500;
  }
`;
export const ListItem = styled.div`
  display: flex;
  padding-left: 15px;
  flex-direction: column;
  opacity: ${(props) => (props.confirm ? 0.5 : 1)};
  width: 380px;
  height: 118px;
  display: flex;
  border-bottom: 1px solid #b7b7b7;
  &:hover {
    background-color: #efefef;
    opacity: 0.95;
  }
`;

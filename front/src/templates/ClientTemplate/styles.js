import styled from "styled-components";
import logoRed from "resources/place/logo.png";
import nicknameprofileimg from "resources/place/NicknameProfileImg.png";
import notifications from "resources/place/Iconly-Bold-Notification.svg";
// import notifications from "resources/place/notifications.png";
import email from "resources/place/email.png";
import LoginProfileIcon from "resources/place/profile_icon_183860.svg";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  // *{border: 1px solid red;}
`;
export const Logo = styled.img.attrs({
  src: logoRed,
})`
  width: 99px;
  height: 99px;
  margin-left: 27px;
`;
export const Play = styled.button`
  width: 159px;
  height: 43px;
  background: transparent linear-gradient(270deg, #ff8900 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
`;
export const PlayText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  // margin-top: 1px;
  margin-left: 94px;
  width: max-content;
`;
export const Learn = styled.button`
  background: transparent linear-gradient(270deg, #8800ff 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
  width: 159px;
  height: 43px;
  cursor: pointer;
  border: 0;
  outline: 0;
`;
export const LearnText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  // margin-top: 1px;
  width: max-content;
  margin-left: 87px;
`;
export const Make = styled.button`
  background: transparent linear-gradient(270deg, #0062ff 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
  width: 159px;
  height: 43px;
  cursor: pointer;
  border: 0;
  outline: 0;
`;
export const MakeText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  // margin-top: 1px;
  width: max-content;
  margin-left: 87px;
`;
export const SearchExp = styled.input`
  background: #EAEAEA 0% 0% no-repeat padding-box;
  border: 1px solid #848484;
  border-radius: 22px;
  opacity: 1;
  width: 740px;
  height: 43px;
  cursor: pointer;
  // border: 0;
  outline: 0;
  // margin-left: 9px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding-left: 35px;
  font: normal normal 500 16px/19px Pretendard;
`;
export const SearchExpText = styled.div`
  font: normal normal normal 19px/19px Pretendard;
  letter-spacing: 0px;
  color: #808080;
  // color: #ffffff;
  text-align: right;
  position: absolute;
  right: 23px;
  top: 11px;
  z-index: 2;
  cursor: default;
  // opacity: ${(prop) => prop.opacity || 1};
`;
export const Register = styled.button`
  width: 156px;
  height: 42px;
  border-radius: 22px;
  background: #ff181b 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-right: 10px;
`;
export const RegisterText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-right: 0px;
`;
export const Login = styled.button`
  width: 156px;
  height: 42px;
  border-radius: 22px;
  background: #848484 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-right: 27px;
  position: relative;
`;
export const LoginText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-right: 0px;
  margin-left: 21.1px;
`;
export const LoginIcon = styled.div`
  width: 20px;
  height: 25px;
  position: absolute;
  top: 9.75px;
  left: 32.2px;
  // background-color: white;
  background-image: url(${LoginProfileIcon});
  background-size: cover;
  background-position: center center;
`;
export const RegistBox = styled.div`
  display: flex;
  position: relative;
  font-size: 16px;
  margin-left: auto;
  margin-right: 27px;
`;
export const NotificationIcon = styled.img.attrs({
  src: notifications,
})`
  width; 44.09px;
  height: 44.09px;
  margin-left: 66.69px;
`;
export const EmailIcon = styled.img.attrs({
  src: email,
})`
  width: 44px;
  height: 45px;
  margin-left: 33.22px;
`;
export const Nickname = styled.button`
  width: 156px;
  height: 42px;
  border-radius: 22px;
  background: #848484 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
  // margin-right: 27px;
  position: relative;
`;
export const NicknameIcon = styled.img.attrs({
  // src: nicknameprofileimg,
})`
  width: 43px;
  height: 43px;
  position: absolute;
  top: 0px;
  left: 0px;
  // background-color: white;
  border-radius: 100%;
  background-image: url(${(props) => props.src || nicknameprofileimg});
`;
export const NicknameText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-right: 0px;
  margin-left: 31.38px;
`;
export const Wrapper = styled.div`
  width: ${1920}px;
  margin: auto;
  border: 1px solid #eee;

  // // min-height: 100%;
  // // height: 100%;
  // position: relative;
  // background-color: white;
`;

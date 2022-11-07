import styled from "styled-components";
import logoRed from "../../../imgs/logo.png";
import nicknameprofileimg from "../../../imgs/NicknameProfileImg.png";
import notifications from "../../../imgs/notifications.png";
import email from "../../../imgs/email.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-left: 87px;
`;
export const SearchExp = styled.input`
  background: #848484 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
  width: 740px;
  height: 43px;
  cursor: pointer;
  border: 0;
  outline: 0;
  // margin-left: 9px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding-left: 35px;
  font: normal normal 500 16px/19px Pretendard;
`;
export const SearchExpText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: right;
  position: absolute;
  right: 23px;
  top: 11px;
  z-index: 2;
  cursor: default;
  opacity: ${(prop) => prop.opacity || 1};
`;
export const SearchExpIcon = styled.div`
  position: absolute;
  left: 11px;
  top: 10px;
  width: 23px;
  height: 23px;
  background-color: white;
  z-index: 2;
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
  margin-right: 4px;
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
  width: 18px;
  height: 22px;
  position: absolute;
  top: 9.75px;
  left: 32.2px;
  background-color: white;
`;
export const RegistBox = styled.div`
  display: flex;
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
export const RegisterIcon = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 8.95px;
  left: 25.73px;
  background-color: white;
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
  src: nicknameprofileimg,
})`
  width: 43px;
  height: 43px;
  position: absolute;
  top: 0px;
  left: 0px;
  // background-color: white;
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
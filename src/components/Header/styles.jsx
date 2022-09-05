import React from 'react';
import styled from 'styled-components';
import logoRed from '../../imgs/logo.png';


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
  background: transparent linear-gradient(270deg, #FF8900 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

export const PlayText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  // margin-top: 1px;
  margin-left: 94px;
`;

export const Learn = styled.button`
  background: transparent linear-gradient(270deg, #8800FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
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
  color: #FFFFFF;
  opacity: 1;
  // margin-top: 1px;
  margin-left: 87px;
`;

export const Make = styled.button`
  background: transparent linear-gradient(270deg, #0062FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
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
  color: #FFFFFF;
  opacity: 1;
  // margin-top: 1px;
  margin-left: 87px;
`;

export const SearchExp = styled.button`
  background: #848484 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
  width: 740px;
  height: 43px;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-left: 9px;
  position: relative;
`;

export const SearchExpText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  // margin-top: 1px;
  text-align: right;
  margin-right: 22.36px;
`;

export const SearchExpIcon = styled.div`
  width: 22.56px;
  height: 22.56px;
  position: absolute;
  top: 9.7px;
  left: 11.36px;
  background-color: white;
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
  color: #FFFFFF;
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
  color: #FFFFFF;
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




import React from 'react';
import styled from 'styled-components';
import logoRed from '../../imgs/logo.png';
import top1 from '../../imgs/top1.svg';
import top2 from '../../imgs/top2.svg';
import top3 from '../../imgs/top3.svg';
import top4 from '../../imgs/top4.svg';
import register from '../../imgs/register.svg';
import login from '../../imgs/login.svg';


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

export const Top1 = styled.img.attrs({
  src: top1,
})`
  width: 351px;
  height: 43px;
  cursor: pointer;
`;

export const Top2 = styled.img.attrs({
  src: top2,
})`
  width: 159px;
  height: 43px;
  cursor: pointer;
`;

export const Top3 = styled.img.attrs({
  src: top3,
})`
  width: 159px;
  height: 43px;
  cursor: pointer;
`;

export const Top4 = styled.img.attrs({
  src: top4,
})`
  width: 159px;
  height: 43px;
  cursor: pointer;
`;

export const Register = styled.div`
  width: 155.63px;
  height: 42.24px;
  position: relative;
  vertical-align: middle;
  // text-align: center;
  // margin-right: 125px;
`;

export const RegisterImg = styled.img.attrs({
  src: register,
})`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
`;

export const RegisterText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  position: relative;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  margin-right: 0px;
`;

export const Login = styled.img.attrs({
  src: login,
})`
  width: 155.63px;
  height: 42.24px;
  cursor: pointer;
`;

export const RegistBox = styled.div`
  display: flex;
  font-size: 16px;
  margin-left: auto;
  margin-right: 27px;
`;




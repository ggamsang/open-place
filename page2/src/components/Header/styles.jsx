import React from 'react';
import styled from 'styled-components';
import logoRed from '../../imgs/logo.png';
import top1 from '../../imgs/top1.svg';
import top2 from '../../imgs/top2.svg';
import top3 from '../../imgs/top3.svg';
import top4 from '../../imgs/top4.svg';
import nickname from '../../imgs/nickname.png';
import register from '../../imgs/Registerblue.png';
import nicknameprofileimg from '../../imgs/NicknameProfileImg.png';


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

export const Nickname = styled.div`
  width: 155.63px;
  height: 42.24px;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  // text-align: center;
  // margin-right: 125px;
`;

export const NicknameBox = styled.img.attrs({
  src: nickname,
})`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
`;

export const NicknameProfileImg = styled.img.attrs({
  src: nicknameprofileimg,
})`
  width: 43px;
  height: 43px;
  z-index: 1;
  position: absolute;
  margin-left: 10px;
`;

export const NicknameText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #FFFFFF;
  position: relative;
  // text-align: center;
  // vertical-align: middle;
  margin-top: 10px;
  margin-left: 75px;
  cursor: pointer;
  margin-right: 0px;
`;

export const Register = styled.img.attrs({
  src: register,
})`
  width: 155.63px;
  height: 42.24px;
  cursor: pointer;
`;

export const RegistBox = styled.div`
  display: flex;
  font-size: 16px;
  // justify-content: center;
  // align-items: center;
  margin-left: auto;
  // position: absolute;
  margin-right: 27px;
`;


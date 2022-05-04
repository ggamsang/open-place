import React, { Component } from 'react';
import Logo from 'components_mobile/Commons/Logo';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import GradientButton from 'components_mobile/Commons/Button/GradientButton';
import ImageButton from 'components_mobile/Commons/Button/ImageButton';

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(205deg,#3A58F5,#3A58F5);
  .box{
    width:100%;
    // height:50vh;
    display:flex;
  }
  
  .alignCenter{align-items:center;}
  .justifyCenter{justify-content:center;}
  .alignEnd{align-items:flex-end;}
  .justifyEnd{justify-content:flex-end;}
  
  .column{flex-direction:column;}
  .login_button_wrap{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

class Intro extends Component {
  render() {
    return (
    <Wrapper>
      <div className='box alignCenter justifyCenter'>
        <Logo type="big" text={"OPEN MARKET \n 매일 새로운 경험"}/>
      </div>
      <div className='box column alignCenter'>
        <GradientButton onClickEvent={()=>window.location.href="/login"} style={{marginTop:"60px",marginBottom:"20px"}} text="로그인" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28}/>
        <GradientButton onClickEvent={()=>window.location.href="/join"} style={{marginBottom:"20px"}} text="회원가입" width={292} height={52} front={'#365AF1'} end={'#FF4343'} deg={270} radius={28}/>
        <GradientButton onClickEvent={()=>window.location.href="/"} style={{marginBottom:"20px"}} text="둘러보기" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28}/>
        <div className='login_button_wrap'>
          <ImageButton style={{marginRight:"6px",marginLeft:"6px"}} width={50} height={50} color={"#1877F2"} radius={25}/>
          <ImageButton style={{marginRight:"6px",marginLeft:"6px"}} width={50} height={50} color={"#F14336"} radius={25}/>
        </div>
      </div>    
      </Wrapper>    
      )
  }
}

export default Intro;

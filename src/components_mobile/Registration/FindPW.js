import React, { Component } from 'react';
import Logo from 'components_mobile/Commons/Logo';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import GradientButton from 'components_mobile/Commons/Button/GradientButton';

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(205deg,#3A58F5,#3A58F5);
  .box{
    width:100%;
    display:flex;
  }
  
  .alignCenter{align-items:center;}
  .justifyCenter{justify-content:center;}
  .alignEnd{align-items:flex-end;}
  .justifyEnd{justify-content:flex-end;}

  .column{flex-direction:column;}

  .inputBox{
    height:${resolution(122)}px;
    margin-bottom:10px;
  }
  .login_button_wrap{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
`
class FindPW extends Component {
    render() {
      return (
        <Wrapper>
        <div className='box alignCenter justifyCenter'>
          <Logo type="big" text={"OPEN MARKET"}/>
        </div>
        <div className='box column alignCenter'>
            <div className='inputBox'>
            </div>
            <GradientButton  onClickEvent={this.onClickLogin} style={{marginBottom:"20px"}} text="아이디 찾기" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28}/>
            <GradientButton  onClickEvent={()=>window.location.href="/join"} style={{marginBottom:"20px"}} text="비밀번호 찾기" width={292} height={52} front={'#365AF1'} end={'#FF4343'} deg={270} radius={28}/>
        </div>    
        </Wrapper>    
      );
    }
  }
  
  export default FindPW;
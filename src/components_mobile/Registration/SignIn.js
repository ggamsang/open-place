import React, { Component } from 'react';
import Logo from 'components_mobile/Commons/Logo';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import GradientButton from 'components_mobile/Commons/Button/GradientButton';
import ImageButton from 'components_mobile/Commons/Button/ImageButton';
import InputNormal from 'components_mobile/Commons/Input/InputNormal';
import Fade from 'react-reveal/Fade';
import { SetSession } from 'modules/Sessions';
import { TokenName } from 'constant';
import { goto } from 'navigator';

const Wrapper = styled.div`
  width:100%;
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
const Warning = styled.div`
  display:${props => props.warning == true ? "block" : "none"};
  width:100%;
  font-family:Roboto;
  font-weight:Regular;
  font-size:${resolution(14)}px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  height:16px;
  animation:${props => props.warning == true ? "transHeightin 1s ease-in-out" : "none"};
  animation-fill-mode: forwards;
  @keyframes transHeightin{
    0%{height:16px;}
    100%{height:26px;}
  }
  @keyframes transHeightout{
    0%{height:26px;}
    100%{height:16pxpx;}
  }
`
const example = { id: 'user01', pw: 'q1w2e3' }
const Login = { ready: "READY", failed: "FAILED", success: "SUCCESS" }

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      password: null,
      login: Login.ready,
    }
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onClickLogin = () => {
    this.setState({ login: Login.ready });
    const { user_id, password } = this.state;
    this.props.SignInRequest &&
      this.props.SignInRequest({ id: user_id, password: password })
        .then(data => {
          if (data.success) {
            // SetSession(TokenName);
            this.setState({ login: Login.success });
            goto("MAIN");
          } else {
            this.setState({ login: Login.failed });
          }
        })
    return;
  }
  onChangeId = (event) => {
    this.setState({ login: Login.ready, user_id: event.target.value });
  }
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    const messageMargin = this.state.login != Login.failed ? 16 : 26;

    return (
      <Wrapper>
        <div className='box alignCenter justifyCenter'>
          <Logo onClickEvent={() => window.location.href = "/"} type="big" text={"OPEN PLACE"} />
        </div>
        <div className='box column alignCenter'>
          <div className='inputBox'>

            <InputNormal
              onChangeValue={this.onChangeId}
              onClear={() => { this.setState({ user_id: "", login: Login.ready }) }}
              value={this.state.user_id} placeholder={"아이디를 입력하세요"}

              width={328} height={48} fontSize={17} color={"#EAF2FE"} radius={3} warning={this.state.login == Login.failed} />

            <Warning warning={this.state.login == Login.failed}>{this.state.login == Login.failed && <Fade><div>{"아이디 혹은 비밀번호가 틀립니다."}</div></Fade>}</Warning>

            <InputNormal type="password"
              onChangeValue={this.onChangePassword}
              onClear={() => { this.setState({ password: "", login: Login.ready }) }}
              value={this.state.password} placeholder={"비밀번호를 입력하세요"}

              width={328} height={48} fontSize={17} color={"#EAF2FE"} radius={3} warning={this.state.login == Login.failed} />
          </div>
          <GradientButton onClickEvent={() => this.onClickLogin()} style={{ marginBottom: "20px" }} text="로그인" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28} />
          <GradientButton onClickEvent={() => window.location.href = "/join"} style={{ marginBottom: "20px" }} text="회원가입" width={292} height={52} front={'#365AF1'} end={'#FF4343'} deg={270} radius={28} />
          <div className='login_button_wrap'>
            <ImageButton style={{ marginRight: "6px", marginLeft: "6px" }} width={50} height={50} color={"#1877F2"} radius={25} />
            <ImageButton style={{ marginRight: "6px", marginLeft: "6px" }} width={50} height={50} color={"#F14336"} radius={25} />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default SignIn;
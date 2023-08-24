import React, { Component } from 'react';
import Logo from 'mobile/components_mobile/Commons/Logo';
import styled from 'styled-components';
import { resolution } from 'mobile/commons/resolution';
import GradientButton from 'mobile/components_mobile/Commons/Button/GradientButton';
import ImageButton from 'mobile/components_mobile/Commons/Button/ImageButton';
import InputNormal from 'mobile/components_mobile/Commons/Input/InputNormal';
import Fade from 'react-reveal/Fade';
import { goto } from 'navigator';
import CheckBoxNormal from 'mobile/components_mobile/Commons/CheckBox/CheckBoxNormal';
import cookie from 'react-cookies';
const Wrapper = styled.div`
  width:100%;
  height:100vh;
  background: linear-gradient(205deg,#3A58F5,#3A58F5);
  .box{
    width:100%;
    display:flex;
    box-sizing:border-box;
  }
  
  .alignCenter{align-items:center;}
  .justifyCenter{justify-content:center;}
  .alignEnd{align-items:flex-end;}
  .justifyEnd{justify-content:flex-end;}

  .column{flex-direction:column;}

  .checkBoxRow{
    display:flex;
    box-sizing:border-box;
  }

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
  display:${props => props.warning === true ? "block" : "none"};
  width:100%;
  font-family:Roboto;
  font-weight:Regular;
  font-size:${resolution(14)}px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  height:16px;
  animation:${props => props.warning === true ? "transHeightin 1s ease-in-out" : "none"};
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
// const example = { id: 'user01', pw: 'q1w2e3' }
const Login = { ready: "READY", failed: "FAILED", success: "SUCCESS" }

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: cookie.load('saveid') || "",
      password: cookie.load('savepassword') || "",
      saveID: cookie.load('saveid') != null ? true : false, saveLogin: cookie.load('savepassword') != null ? true : false,
      login: Login.ready,
    }
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onCheckSaveID = this.onCheckSaveID.bind(this);
    this.onCheckSaveLogin = this.onCheckSaveLogin.bind(this);
  }
  onCheckSaveID() {
    const result = !this.state.saveID;
    if (result === false) {
      cookie.remove(('saveid'), { path: '/' });
    }

    this.setState({ saveID: result });
  }
  onCheckSaveLogin() {
    const result = !this.state.saveLogin;
    if (result) {
      cookie.remove(('saveid'), { path: '/' });
      cookie.remove(('savepassword'), { path: '/' });
    }
    this.setState({ saveLogin: result });
  }
  onClickLogin = (e) => {

    if (this.state.saveID === true) {
      cookie.save("saveid", this.state.user_id, {
        path: '/',
      });
    }
    //로그인저장
    if (this.state.saveLogin === true) {
      cookie.save("saveid", this.state.user_id, {
        path: '/',
      });
      cookie.save("savepassword", this.state.password, {
        path: '/',
      });
    }
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
  handleEnterKey = (event) => {
    if (event.key === "Enter") {
      if (this.state.user_id && this.state.password) {
        this.onClickLogin();
      }
    }
  }
  render() {
    const messageMargin = this.state.login != Login.failed ? 16 : 26;

    return (
      <Wrapper>
        <div className='box alignCenter justifyCenter' style={{ paddingTop: "39px" }}>
          <Logo
            type="big_image"
            onClickEvent={() => window.location.href = "/"}
          />
        </div>
        <Warning warning={this.state.login === Login.failed}>
          {this.state.login === Login.failed
            && <Fade>
              <div>{"아이디 혹은 비밀번호가 틀립니다."}</div>
            </Fade>}
        </Warning>
        <div className='box column alignCenter'>
          <div className='inputBox'>
            <InputNormal
              style={{ boxSizing: "border-top", marginBottom: "12px" }}
              onChangeValue={this.onChangeId}
              onClear={() => {
                this.setState({ user_id: "", login: Login.ready })
              }}
              value={this.state.user_id}
              placeholder={"아이디를 입력하세요"}
              onKeyPress={this.handleEnterKey}
              width={328}
              height={48}
              fontSize={17}
              color={"#EAF2FE"}
              radius={3}
              warning={this.state.login === Login.failed} />
            <InputNormal
              type="password"
              onChangeValue={this.onChangePassword}
              onClear={() => {
                this.setState({ password: "", login: Login.ready })
              }}
              value={this.state.password}
              placeholder={"비밀번호를 입력하세요"}
              onKeyPress={this.handleEnterKey}
              width={328}
              height={48}
              fontSize={17}
              color={"#EAF2FE"}
              radius={3}
              warning={this.state.login === Login.failed} />
          </div>

          <div className="checkBoxRow" style={{ marginBottom: `${this.state.login === Login.failed ? "20px" : "53px"}` }}>
            <CheckBoxNormal id="saveid" style={{ marginRight: "15px" }} text="로그인 유지" value={this.state.saveID} onClickEvent={this.onCheckSaveID} />
            <CheckBoxNormal id="savelogin" style={{ marginLeft: "15px" }} text="아이디 저장" value={this.state.saveLogin} onClickEvent={this.onCheckSaveLogin} />
          </div>
          {
            this.state.login === Login.failed ?
              <React.Fragment>
                <Fade>
                  <GradientButton
                    onClickEvent={() => goto("FINDPW")}
                    style={{ marginBottom: "12px" }}
                    text="아이디/비밀번호 찾기"
                    width={240}
                    height={42}
                    front={'#365AF1'}
                    end={'#FF4343'}
                    deg={240}
                    radius={28} />
                  <GradientButton
                    onClickEvent={() => this.onClickLogin()}
                    style={{ marginBottom: "12px" }}
                    text="로그인"
                    width={240}
                    height={42}
                    front={'#FF4343'}
                    end={'#365AF1'}
                    deg={270}
                    radius={28} />
                  <GradientButton
                    onClickEvent={() => goto("SIGNUP")}
                    style={{ marginBottom: "12px" }}
                    text="회원가입"
                    width={240}
                    height={42}
                    front={'#365AF1'}
                    end={'#FF4343'}
                    deg={270}
                    radius={28} />
                </Fade>
              </React.Fragment>
              :
              <React.Fragment>
                <GradientButton
                  onClickEvent={() => this.onClickLogin()}
                  style={{ marginBottom: "20px" }}
                  text="로그인"
                  width={292}
                  height={52}
                  front={'#FF4343'}
                  end={'#365AF1'}
                  deg={270}
                  radius={28} />
                <GradientButton
                  onClickEvent={() => goto("SIGNUP")}
                  style={{ marginBottom: "20px" }}
                  text="회원가입"
                  width={292}
                  height={52}
                  front={'#365AF1'}
                  end={'#FF4343'}
                  deg={270}
                  radius={28} />
              </React.Fragment>
          }
          {/* <GradientButton
            onClickEvent={() => goto("SIGNUP")}
            style={{ marginBottom: "20px" }}
            text="아이디/비밀번호 찾기"
            width={292}
            height={52}
            front={'#365AF1'}
            end={'#FF4343'}
            deg={270}
            radius={28} />
          <GradientButton
            onClickEvent={() => this.onClickLogin()}
            style={{ marginBottom: "20px" }}
            text="로그인"
            width={292}
            height={52}
            front={'#FF4343'}
            end={'#365AF1'}
            deg={270}
            radius={28} />
          <GradientButton
            onClickEvent={() => goto("SIGNUP")}
            style={{ marginBottom: "20px" }}
            text="회원가입"
            width={292}
            height={52}
            front={'#365AF1'}
            end={'#FF4343'}
            deg={270}
            radius={28} /> */}
          <div className='login_button_wrap'>
            <ImageButton
              style={{ marginRight: "6px", marginLeft: "6px" }}
              width={50}
              height={50}
              color={"#1877F2"}
              radius={25} />
            <ImageButton
              style={{ marginRight: "6px", marginLeft: "6px" }}
              width={50}
              height={50}
              color={"#F14336"}
              radius={25} />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default SignIn;
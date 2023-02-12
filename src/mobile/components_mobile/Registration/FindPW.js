import React, { Component } from 'react';
import Logo from 'mobile/components_mobile/Commons/Logo';
import styled from 'styled-components';
import { resolution } from 'mobile/commons/resolution';
import GradientButton from 'mobile/components_mobile/Commons/Button/GradientButton';

import InputLine from 'mobile/components_mobile/Commons/Input/InputLine';
import InputPhone from 'mobile/components_mobile/Commons/Input/InputPhone';
import ImageButton from 'mobile/components_mobile/Commons/Button/ImageButton';
import InputEmail from 'mobile/components_mobile/Commons/Input/InputEmail';

import Fade from 'react-reveal/Fade';
import host from 'config';
import { noauthPOST, POST } from 'constant';

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
    width:max-content;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .login_button_wrap{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .checkBoxWrap{
    width:100%;
    height:${resolution(100)}px;
    display:flex;
    margin:0px 10vw;
    flex-direction:column;
  }
  .buttonWrap{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    .text_{
      width:100%;
      height:${resolution(31)}px;
      display:flex;justify-content:center;align-items:center;
      color:white;
      font-family:Roboto;
      font-size:${resolution(14)}px;
    }
  }
  .label{
    width:100%;
    font-size:12px;
    font-family:Circular Std Medium;
    color:white;
  }
  .result_text{
    width:100%;
    height:10vh;
    font-family:Pretendard;
    font-size:16px;
    color:white;
    text-align:center;
    line-height:25px;
    white-space: pre-wrap;
  }
`
class FindPW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null, phone: null, first_name: null, last_name: null,
      page1: true, page2_1: false, page2_2: false, page3: false,
      message: "1234@gmail.com", phoneChecked: false, emailChecked: false,
    }
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
  }
  onChangeID = event => {
    this.setState({ id: event.target.value });
  }
  onChangeFirstName = (event) => {
    this.setState({ first_name: event.target.value });
  }
  onChangeLastName = (event) => {
    this.setState({ last_name: event.target.value });
  }
  onChangePhone = (event) => {
    if (event.target.value.length <= 8) {
      this.setState({ phone: event.target.value });
    }
    if (event.target.value.length >= 8) {
      this.setState({ phoneChecked: true })
    } else {
      this.setState({ phoneChecked: false })
    }
  }

  onChangeEmail = (event) => {
    this.setState({ emailChecked: event.target.value });

    if (event.target.value.length >= 1) {
      this.setState({ emailChecked: true })
    } else {
      this.setState({ emailChecked: false })
    }
  }
  verifyMeWithPhone = () => {
    fetch(
      `${host}/user/verifyWithPhone`,
      noauthPOST({
        phone: this.state.phone
      }))
      .then(res => res.json())
      .then(data => {
        if (data?.id) {
          this.setState({ page2_1: false, message: `"회원님의 아이디는\n${data.id}\n입니다"` })
        } else {
          this.setState({ page2_1: false, message: `등록된 정보가 없습니다.` })
        }
        setTimeout(() => {
          this.setState({ page3: true })
        }, 1000)
      })
      .catch(e => {
        console.error(e);
      })
  }
  passwordResetRequest = e => {
    fetch(`${host}/user/resetPW`,
      noauthPOST({
        id: this.state.id,
        phone: this.state.phone
      }))
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            page2_2: false,
            message: `임시비밀번호를 010-${this.state.phone}으로 발급하였습니다.`
          });
          alert(`${data.detail} (베타버전에서는 바로 전송받았습니다.)`);
        } else {
          this.setState({ message: `등록된 정보가 없습니다.` });
        }
        setTimeout(() => {
          this.setState({ page3: true })
        }, 1000);
      })
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Fade when={this.state.page1}>
            <div className='content' style={{ display: `${this.state.page1 === false ? "none" : "block"}` }}>
              <div className='box alignCenter justifyCenter'>
                <Logo type="big" text={"OPEN PLACE"} />
              </div>
              <div style={{ height: "50vh" }} className='box column alignCenter justifyCenter'>
                <GradientButton
                  onClickEvent={() => {
                    this.setState({ page1: false });
                    setTimeout(() => this.setState({ page2_1: true }), 1000)
                  }}
                  style={{ marginBottom: "20px" }}
                  text="아이디 찾기"
                  width={292}
                  height={52}
                  front={'#FF4343'}
                  end={'#365AF1'}
                  deg={270}
                  radius={28} />
                <GradientButton
                  onClickEvent={() => {
                    this.setState({ page1: false });
                    setTimeout(() => this.setState({ page2_2: true }), 1000)
                  }}
                  style={{ marginBottom: "20px" }}
                  text="비밀번호 찾기"
                  width={292}
                  height={52}
                  front={'#365AF1'}
                  end={'#FF4343'}
                  deg={270}
                  radius={28} />
              </div>
            </div>
          </Fade>

          <Fade when={this.state.page2_1}>
            <div className='content' style={{ display: `${this.state.page2_1 === false ? "none" : "block"}` }}>
              <div className='box alignCenter justifyCenter'>
                <Logo onClickEvent={() => window.location.href = "/login"} type="small" text={"OPEN PLACE"} />
              </div>

              <div className="box column alignCenter">
                <div className='inputBox'>
                  {/* <div style={{ marginTop: "20px" }} className='label'>닉네임</div>
                  <InputLine onChangeValue={this.onChangeFirstName}
                    placeholder="닉네임"
                    value={this.state.first_name}
                    paddingLeft={0}
                    width={328} height={40} fontSize={14} radius={3} /> */}
                  {/* <div style={{ marginTop: "20px" }} className='label'>성</div>
                  <InputLine onChangeValue={this.onChangeLastName}
                    placeholder="성"
                    value={this.state.last_name}
                    paddingLeft={0}
                    width={328} height={40} fontSize={14} radius={3} /> */}
                  <div style={{ marginTop: "33px" }} />
                  <InputPhone onChangeValue={this.onChangePhone}
                    value={this.state.phone}
                    width={303} height={40}
                    checked={this.state.phoneChecked}
                  />
                </div>
                <div style={{ height: "40vh" }} className='buttonWrap justifyCenter'>
                  <GradientButton onClickEvent={this.verifyMeWithPhone}
                    text="본인인증하기"
                    width={292}
                    height={52}
                    front={'#FF4343'}
                    end={'#365AF1'}
                    deg={270}
                    radius={28} />
                </div>
              </div>
            </div>
          </Fade>

          <Fade when={this.state.page2_2}>
            <div className='content' style={{ display: `${this.state.page2_2 === false ? "none" : "block"}` }}>

              <div className='box alignCenter justifyCenter'>
                <Logo onClickEvent={() => window.location.href = "/login"} type="small" text={"OPEN PLACE"} />
              </div>

              <div className="box column alignCenter justifyCenter" style={{ height: "35vh" }}>
                <div className='inputBox'>
                  {/*  <InputEmail
                    onChangeValue={this.onChangeEmail}
                    value={this.state.email}
                    width={303} height={40}
                  checked={this.state.emailChecked} />*/}
                  <div style={{ marginTop: "20px" }} className='label'>아이디</div>
                  <InputLine onChangeValue={this.onChangeID}
                    placeholder="아이디"
                    value={this.state.id}
                    paddingLeft={0}
                    width={328} height={40} fontSize={14} radius={3} />
                  <div style={{ marginTop: "33px" }} />
                  <InputPhone onChangeValue={this.onChangePhone}
                    value={this.state.phone}
                    width={303} height={40}
                    checked={this.state.phoneChecked}
                  />
                </div>
              </div>


              <div style={{ height: "40vh" }} className='buttonWrap justifyCenter'>
                <GradientButton onClickEvent={this.passwordResetRequest}
                  text="이메일로 보내기" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28} />
              </div>


            </div>
          </Fade>

          <Fade when={this.state.page3}>
            <div className='content' style={{ display: `${this.state.page3 === false ? "none" : "block"}` }}>
              <div className='box alignCenter justifyCenter'>
                <Logo onClickEvent={() => window.location.href = "/login"} type="big" />
              </div>
              <div className='result_text'>
                {this.state.message}
              </div>
              <div className='buttonWrap justifyCenter' style={{ height: "40vh" }} >
                <GradientButton onClickEvent={() => window.location.href = "/login"} style={{ marginBottom: "20px" }} text="로그인" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28} />
                <GradientButton onClickEvent={() => window.location.href = "/join"} style={{ marginBottom: "20px" }} text="회원가입" width={292} height={52} front={'#365AF1'} end={'#FF4343'} deg={270} radius={28} />
                <div className='login_button_wrap'>
                  <ImageButton style={{ marginRight: "6px", marginLeft: "6px" }} width={50} height={50} color={"#1877F2"} radius={25} />
                  <ImageButton style={{ marginRight: "6px", marginLeft: "6px" }} width={50} height={50} color={"#F14336"} radius={25} />
                </div>
              </div>
            </div>
          </Fade>

        </Wrapper>
      </React.Fragment>
    );
  }
}

export default FindPW;
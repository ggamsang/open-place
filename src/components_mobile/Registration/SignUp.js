import React, { Component } from 'react';
import Logo from 'components_mobile/Commons/Logo';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import InputNormal from 'components_mobile/Commons/Input/InputNormal';
import InputLine from 'components_mobile/Commons/Input/InputLine';
import InputPhone from 'components_mobile/Commons/Input/InputPhone';
import CheckBoxNormal from 'components_mobile/Commons/CheckBox/CheckBoxNormal';
import GradientButton from 'components_mobile/Commons/Button/GradientButton';

import Fade from 'react-reveal/Fade';

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
    width:max-content;
    display:flex;
    flex-direction:column;
    align-items:center;
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
      // font-family:Roboto;
      font-size:${resolution(14)}px;
    }
  }
  .label{
    width:100%;
    font-size:12px;
    font-family:Circular Std Medium;
    color:white;
  }
`

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page1: false,//true, 
      page2: true,//false,
      first_name: "", last_name: "",
      phone: "",
      phoneChecked: false,
      user_id: "",
      password: "",
      password2: "",
      agreeAll: false,
      agree1: false,
      agree2: false,
    }
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);

    this.onClickAllAgree = this.onClickAllAgree.bind(this);
    this.onClickAgree1 = this.onClickAgree1.bind(this);
    this.onClickAgree2 = this.onClickAgree2.bind(this);
  }

  SignUp = () => {
    const { user_id } = this.state;
    if (!user_id) {
      alert('아이디를 입력해주세요.');
      return;
    }
    const { agree1, agree2 } = this.state;
    if (!agree1 || !agree2) {
      alert('이용약관을 동의해주세요.');
      return;
    }

    const { password, password2, } = this.state;

    if (password != password2) {
      alert('비밀번호를 확인하여주세요.');
      return;
    }

    const { first_name, last_name } = this.state;
    const data = {
      email: user_id,
      password: password,
      nickname: `${first_name} ${last_name}`
    }

    this.props.SignUpRequest &&
      this.props.SignUpRequest(data)
        .then(res => {
          console.log(res);
          if (res.type === "AUTH_SIGNUP_SUCCESS") {
            alert('회원가입을 축하드립니다.');
            window.location.href = "/";
          }
          else {
            alert(res.detail + '와 같은 이유로 회원가입을 하지 못하였습니다.');
          }
        });
  };

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

  onChangeId = (event) => {
    this.setState({ user_id: event.target.value });
  }
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  onChangePassword2 = (event) => {
    this.setState({ password2: event.target.value });
  }

  onClickAllAgree = () => {
    console.log(this.state.agreeAll)
    this.setState({ agreeAll: !this.state.agreeAll });
    this.setState({ agree1: !this.state.agreeAll });
    this.setState({ agree2: !this.state.agreeAll });
  }
  onClickAgree1 = () => {
    this.setState({ agree1: !this.state.agree1 });
  }
  onClickAgree2 = () => {
    this.setState({ agree2: !this.state.agree2 });
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <div className='box alignCenter justifyCenter'>
            <Logo onClickEvent={() => window.location.href = "/login"} type="small" text={"OPEN MARKET"} />
          </div>

          {/*본인인증 */}
          <Fade when={this.state.page1}>
            <div className="box column alignCenter" style={{ display: `${this.state.page1 == false ? "none" : "flex"}` }}>
              <div className='inputBox'>
                <div style={{ marginTop: "20px" }} className='label'>이름</div>
                <InputLine onChangeValue={this.onChangeFirstName}
                  placeholder="이름"
                  value={this.state.first_name}
                  paddingLeft={0}
                  width={328} height={40} fontSize={14} radius={3} />
                <div style={{ marginTop: "20px" }} className='label'>성</div>
                <InputLine onChangeValue={this.onChangeLastName}
                  placeholder="성"
                  value={this.state.last_name}
                  paddingLeft={0}
                  width={328} height={40} fontSize={14} radius={3} />
                <div style={{ marginTop: "33px" }} />
                <InputPhone onChangeValue={this.onChangePhone}
                  value={this.state.phone}
                  width={303} height={40}
                  checked={this.state.phoneChecked}
                />
              </div>
              <div style={{ marginTop: "30px" }} className='buttonWrap'>
                <GradientButton onClickEvent={() => {
                  this.setState({ page1: false })
                  setTimeout(() => {
                    this.setState({ page2: true })
                  }, 1000)
                }} text="본인인증하기" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28} />
                <div className="text_">이미 계정이 있으신가요?</div>
                <GradientButton onClickEvent={() => window.location.href = "/login"} style={{ marginBottom: "20px" }} text="로그인" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28} />
              </div>
            </div>
          </Fade>

          {/* id, pw, pw2 */}
          <Fade when={this.state.page2}>
            <div className="box column alignCenter" style={{ display: `${this.state.page2 == false ? "none" : "flex"}` }}>
              <div className='inputBox' style={{ marginTop: "32px" }}>
                <InputNormal style={{ marginBottom: "16px" }} onChangeValue={this.onChangeId}
                  value={this.state.user_id}
                  placeholder={"아이디를 입력하세요"}
                  width={328} height={48} fontSize={17} color={"#EAF2FE"} radius={3} />

                <InputNormal style={{ marginBottom: "16px" }} onChangeValue={this.onChangePassword}
                  value={this.state.password}
                  placeholder={"비밀번호를 입력하세요"}
                  width={328} height={48} fontSize={17} color={"#EAF2FE"} radius={3} />

                <InputNormal
                  style={{ marginBottom: "16px" }}
                  onChangeValue={this.onChangePassword2}
                  value={this.state.password2}
                  placeholder={"비밀번호를 한번 더 입력하세요"}
                  width={328} height={48} fontSize={17}
                  color={"#EAF2FE"}
                  radius={3} />

              </div>
              <div className='checkBoxWrap'>
                <CheckBoxNormal style={{ marginLeft: "15vw", marginBottom: "13px" }} text="전체동의" value={this.state.agreeAll} onClickEvent={this.onClickAllAgree} />
                <CheckBoxNormal style={{ marginLeft: "15vw", marginBottom: "13px" }} text="이용약관" value={this.state.agree1} onClickEvent={this.onClickAgree1} />
                <CheckBoxNormal style={{ marginLeft: "15vw", marginBottom: "13px" }} text="개인정보 수집 및 이용 (선택)" value={this.state.agree2} onClickEvent={this.onClickAgree2} />
              </div>
              <div className='buttonWrap'>
                <GradientButton onClickEvent={() => this.SignUp()} text="가입하기" width={292} height={52} front={'#365AF1'} end={'#FF4343'} deg={270} radius={28} />
                <div className="text_">이미 계정이 있으신가요?</div>
                <GradientButton onClickEvent={() => window.location.href = "/login"} style={{ marginBottom: "20px" }} text="로그인" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28} />
              </div>
            </div>
          </Fade>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default SignUp;
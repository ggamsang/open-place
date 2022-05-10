import React, { Component } from 'react';
import Logo from 'components_mobile/Commons/Logo';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import InputNormal from 'components_mobile/Commons/Input/InputNormal';
import CheckBoxNormal from 'components_mobile/Commons/CheckBox/CheckBoxNormal';
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
    margin-top:32px;
    display:flex;
    flex-direction:column;
    align-items:center;
    input{
      margin-bottom:16px;
    }
  }
  .checkBoxWrap{
    height:${resolution(100)}px;
    display:flex;
    margin:0px 10vw;
    flex-direction:column;
    justify-content:center;
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
`

class SignUp extends Component {
    constructor(props){
      super(props);
      this.state = {
        user_id:"",password:"",password2:"",
        agreeAll:false,agree1:false,agree2:false,
      }
      this.onChangeId = this.onChangeId.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangePassword2 = this.onChangePassword2.bind(this);

      this.onClickAllAgree= this.onClickAllAgree.bind(this);
      this.onClickAgree1=this.onClickAgree1.bind(this);
      this.onClickAgree2=this.onClickAgree2.bind(this);
    }
    onChangeId = (event) =>{
      this.setState({user_id:event.target.value});
    }
    onChangePassword = (event) =>{
      this.setState({password:event.target.value});
    }
    onChangePassword2 = (event) =>{
      this.setState({password2:event.target.value});
    }

    onClickAllAgree = ()=>{
      console.log(this.state.agreeAll)
      this.setState({agreeAll:!this.state.agreeAll});
      this.setState({agree1:!this.state.agreeAll});
      this.setState({agree2:!this.state.agreeAll});
    }
    onClickAgree1 = ()=>{
      this.setState({agree1:!this.state.agree1});
    }
    onClickAgree2 = ()=>{
      this.setState({agree2:!this.state.agree2});
    }

    render() {
      return (
        <Wrapper>
        <div className='box alignCenter justifyCenter'>
          <Logo onClickEvent={()=>window.location.href = "/login"} type="small" text={"OPEN MARKET"}/>
        </div>
        <div className='inputBox'>
          <InputNormal onChangeValue={this.onChangeId}
                       value={this.state.user_id}
                       placeholder={"아이디를 입력하세요"}
                       width={328} height={48} fontSize={17} color={"#EAF2FE"} radius={3}/>

          <InputNormal onChangeValue={this.onChangePassword}
                       value={this.state.password}
                       placeholder={"비밀번호를 입력하세요"}
                       width={328} height={48} fontSize={17} color={"#EAF2FE"} radius={3}/>

          <InputNormal onChangeValue={this.onChangePassword2}
                       value={this.state.password2}
                       placeholder={"비밀번호를 한번 더 입력하세요"}
                       width={328} height={48} fontSize={17} color={"#EAF2FE"} radius={3}/>

        </div>
        <div className='checkBoxWrap'>
              <CheckBoxNormal style={{marginBottom:"13px"}} text="전체동의" value={this.state.agreeAll} onClickEvent={this.onClickAllAgree}/>
              <CheckBoxNormal style={{marginBottom:"13px"}} text="이용약관" value={this.state.agree1} onClickEvent={this.onClickAgree1}/>
              <CheckBoxNormal style={{marginBottom:"13px"}} text="개인정보 수집 및 이용 (선택)" value={this.state.agree2} onClickEvent={this.onClickAgree2}/>
        </div>
        <div className='buttonWrap'>
            <GradientButton  onClickEvent={()=>window.location.href="/join"} text="가입하기" width={292} height={52} front={'#365AF1'} end={'#FF4343'} deg={270} radius={28}/>
            <div className="text_">이미 계정이 있으신가요?</div>
            <GradientButton  onClickEvent={()=>window.location.href="/login"} style={{marginBottom:"20px"}} text="로그인" width={292} height={52} front={'#FF4343'} end={'#365AF1'} deg={270} radius={28}/>
        </div>
        </Wrapper>   
      );
    }
  }
  
  export default SignUp;
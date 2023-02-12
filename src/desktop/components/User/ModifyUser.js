import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonNormal from 'desktop/components/Commons/Button/ButtonNormal';
import { resolution } from 'desktop/commons/resolution';
import SearchForm from 'desktop/components/Commons/Search/SearchForm';
import profile from 'resources/Profile.svg';
import InputNormal from 'desktop/components/Commons/Input/InputNormal';
import { goto } from 'navigator';

const Wrapper = styled.div`
  width:100%;
  height:130vh;
  .header{
    width:100%;
    height:${resolution(290)}px;
    background: linear-gradient(205deg,#bf1d39,#8448b6);
  }
  .searchbox{
    width:100%;
    padding-top:50px;
    display:flex;
    align-items:center;
  }
  .profile{
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .thumbnail{
      width:${resolution(100)}px;
      height:${resolution(100)}px;
      border-radius:50%;
      background-color:#efefef;
      background-image: url(${prop => prop.url});
      background-size:cover;
    }
    .textWrap{
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      .vrline{height:${resolution(44)}px;border-right:1px solid white;}
      .text{
        text-align:center;
        width:45%;
        font: normal normal bold 20px/20px Montserrat;
        color:white;
      }
    }
  }

`

const Content = styled.div`
  box-sizing:border-box;*{box-sizing:border-box;}
  padding:20px;
  .shadowBorderBox{
    .img_{border:none;background-color:#E9E9E9;width:${resolution(100)}px;height:${resolution(100)}px;border-radius:${resolution(10)}px;object-fit:cover;}
    .wrap{display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;margin-left:13px;}
    box-sizing:border-box;
    width:100%;
    box-shadow: 2px 2px 5px #00000029;
    border-radius:10px;
    border:1px solid #E9E9E9;
    padding:13px;
    .title{
      width:100%;
      font: normal normal medium 18px/21px Pretendard;
      text-align:center;
      color:#4A4B4D;
    }
    .row{width:100%;display:flex;}
    .label{
      padding-top:7px;
      width:${resolution(100)}px;
      min-width:${resolution(100)}px;
      font: normal normal medium 15px/18px Noto Sans KR;
      font-size:${resolution(15)}px;
    }
  }

  .thumbnailBox{display:flex;align-items:center;}
    .img_{border:none;background-color:#E9E9E9;width:${resolution(100)}px;height:${resolution(100)}px;border-radius:${resolution(10)}px;object-fit:cover;}
    .wrap{display:flex;flex-direction:column;justify-content:center;box-sizing:border-box;margin-left:13px;}
    .label{font: normal normal medium 15px/18px Noto Sans KR;}
    .text{font: normal normal bold 15px/18px Noto Sans KR;}
  .buttonWrap{
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-top:20px;
  }
`


class ModifyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editName: false, nick_name: null,
      thumbnail: null, thumbnail_name: null,
      phone: null,
      password: null, password_checked: null,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword_checked = this.onChangePassword_checked.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userInfo !== this.props.userInfo) {
      this.setState({
        nick_name: this.props.userInfo.nick_name,
        thumbnail: this.props.userInfo.l_img,
      })
    }
  }

  onChangeNickname = (event) => {
    this.setState({ nick_name: event.target.value })
  }
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  onChangePassword_checked = (evnet) => {
    this.setState({ password_checked: evnet.target.value });
  }
  onChangeThumbnail = async (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    const regExp = /.(jpe?g|png|bmp)$/i;
    if (regExp && !regExp.test(file.name)) {
      await alert('파일의 확장자가 올바른지 확인해주세요.', "확인");
      return;
    }
    reader.onload = () => {
      var image = new Image();
      image.src = reader.result;
      image.onload = () => {
        this.setState({ is_rectangle: false, ratio: image.width / image.height, cropper: image.width / image.height !== 1.0 });
      }
    }
    reader.onloadend = () => {
      this.setState({ thumbnail: reader.result, thumbnail_name: file.name })
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(file);
    }
  };
  onSubmit = async () => {
    if (this.state.nick_name !== this.props.userInfo.nick_name) {
      await this.props.CheckNickNameRequest(this.props.token, this.state.nick_name)
      if (this.state.nick_name === null || this.state.nick_name === "") {
        alert("닉네임을 입력해주세요");
        return;
      } else if (this.props.checkNickName === true && this.state.nick_name !== this.props.userInfo.nick_name) {
        alert("중복된 닉네임입니다");
        return;
      }
    } else if (this.state.password !== this.state.password_checked) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    let data = {
      nick_name: this.state.nick_name,
      password: this.state.password,
      files: [],
    }
    let file = { value: this.state.thumbnail, name: this.state.thumbnail_name, key: 0 };
    if (this.state.thumbnail !== this.props.userInfo.l_img) { await data.files.push(file); } // thumbnail 썸네일이 있을 경우에만 
    await this.props.updateUserRequest(this.props.userInfo.uid, data, this.props.token)
      .then(() => {
        window.location.href = "/myDetail/sub"
      })
  }
  render() {
    const { userInfo } = this.props;
    console.log(userInfo)
    return (
      <React.Fragment>
        {
          userInfo ?
            <Wrapper url={this.state.thumbnail || profile}>
              <div className="header">
                <div className="searchbox"><SearchForm /></div>
                <div className='profile'>
                  <div className='thumbnail' />
                  <div className='textWrap' style={{ marginTop: "20px" }}>
                    <div className='text' style={{ textAlign: "right" }}>{userInfo.nick_name}</div>
                    <div className='vrline' style={{ marginLeft: "26px", marginRight: "26px" }} />
                    <div className='text' style={{ textAlign: "left" }}>#해쉬태그</div>
                  </div>
                </div>
              </div>
              <Content>
                <div className='shadowBorderBox' style={{ marginBottom: "20px" }}>
                  <div className='thumbnailBox'>
                    {
                      this.state.thumbnail === null ?
                        <div className='img_' /> :
                        <img src={this.state.thumbnail} className="img_" alt="profile" />
                    }
                    <div className='wrap'>
                      <input hidden onChange={this.onChangeThumbnail} id="file" type="file" accept="image/png, image/bmp, image/jpeg, image/jpg" />
                      <label htmlFor='file'>
                        <ButtonNormal
                          disabled={true}
                          width={194}
                          height={30}
                          radius={10}
                          fontSize={15}
                          color={"red"}
                          bgColor={"white"}
                          border={"2px solid red"}
                          text="썸네일 수정" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className='shadowBorderBox'>
                  <div className='row'>
                    <div className='label'>닉네임</div>
                    <InputNormal
                      onChangeValue={this.onChangeNickname}
                      value={this.state.nick_name}
                      fontSize={12}
                      height={31}
                      color={"#E9E9E9"} radius={10}
                      placeholderColor={"#707070"}
                    />
                  </div>
                  <div className='row' style={{ marginTop: "13px" }}>
                    <div className='label'>비밀번호</div>
                    <InputNormal
                      type="password"
                      onChangeValue={this.onChangePassword}
                      value={this.state.password}
                      fontSize={12}
                      height={31}
                      color={"#E9E9E9"} radius={10}
                      placeholderColor={"#707070"}
                      placeholder="변경할 비밀번호를 입력하세요"
                    />
                  </div>
                  <div className='row' style={{ marginTop: "13px" }}>
                    <div className='label'>비밀번호 확인</div>
                    <InputNormal
                      type="password"
                      onChangeValue={this.onChangePassword_checked}
                      value={this.state.password_checked}
                      fontSize={12}
                      height={31}
                      color={"#E9E9E9"} radius={10}
                      placeholderColor={"#707070"}
                      placeholder="변경할 비밀번호를 한 번 더 입력하세요"
                    />
                  </div>
                </div>
                <div className='buttonWrap'>
                  <ButtonNormal
                    onClickEvent={() => goto("BACK")}
                    width={165}
                    height={35}
                    radius={10}
                    fontSize={15}
                    bgColor={"#707070"}
                    text="취소하기"
                    style={{ marginRight: "25px" }}
                  />
                  <ButtonNormal
                    onClickEvent={this.onSubmit}
                    width={165}
                    height={35}
                    radius={10}
                    fontSize={15}
                    bgColor={"red"}
                    text="수정하기"
                  />
                </div>
              </Content>

            </Wrapper>
            : <>정보를 가져오고 있습니다.</>}
      </React.Fragment>
    );
  }
}

export default ModifyUser;

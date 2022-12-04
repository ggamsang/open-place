import React from "react";
import styled from "styled-components";
import { resolution } from "../../commons/resolution";
import TextAreaNormal from "../Commons/TextArea";
import DropDownNormal from "../Commons/DropDown";
import { InputNormal } from "../../components/Commons/Input";

const Wrap = styled.div`
  box-sizing: border-box;
  .flex {
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .shadowBorderBox {
    .img_ {
      border: none;
      background-color: #e9e9e9;
      width: ${resolution(100)}px;
      height: ${resolution(100)}px;
      border-radius: ${resolution(10)}px;
      object-fit: cover;
    }
    .wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      margin-left: 13px;
    }
    box-sizing: border-box;
    width: 100%;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 10px;
    border: 1px solid #e9e9e9;
    padding: 13px;
    .title {
      width: 100%;
      font: normal normal medium 18px/21px Pretendard;
      text-align: center;
      color: #4a4b4d;
    }
    .row {
      width: 100%;
      display: flex;
    }
    .label {
      padding-top: 7px;
      width: ${resolution(72)}px;
      min-width: ${resolution(72)}px;
      font: normal normal medium 15px/18px Noto Sans KR;
      font-size: ${resolution(15)}px;
    }
  }
`;

class SharerForm extends React.Component {
  // async componentDidMount(){
  //   this.props.location&&
  //   await this.props.location.map((item,index)=>{

  //   })
  // }
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      country: -1,
      city: -1,
      email: "",
      bank_code: null,
      bank_number: "",
    };
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBankCode = this.onChangeBankCode.bind(this);
    this.onChangeBankNumber = this.onChangeBankNumber.bind(this);
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sharer !== this.props.sharer) {
      console.log(this.props.sharer);
      this.setState({
        info: this.props.sharer.about_me,
        city: this.props.sharer.location_id,
        email: this.props.sharer.email,
        bank_code: this.props.sharer.bank_code,
        bank_number: this.props.sharer.account_number,
      });
    }
  }

  onChangeInfo = (event) => {
    this.setState({ info: event.target.value });
    this.props.onChangeInfo(event.target.value);
  };
  onChangeCountry = (event) => {
    this.setState({ country: event.target.value });
    this.props.onChangeCountry(event.target.value);
  };
  onChangeCity = (event) => {
    this.setState({ city: event.target.value });
    this.props.onChangeCity(event.target.value);
  };
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    this.props.onChangeEmail(event.target.value);
  };
  onChangeBankCode = (event) => {
    this.setState({ bank_code: event.target.value });
    this.props.onChangeBankCode(event.target.value);
  };
  onChangeBankNumber = (event) => {
    this.setState({ bank_number: event.target.value });
    this.props.onChangeBankNumber(event.target.value);
  };
  onChangeThumbnail = async (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    const regExp = /.(jpe?g|png|bmp)$/i;
    if (regExp && !regExp.test(file.name)) {
      await alert("파일의 확장자가 올바른지 확인해주세요.", "확인");
      return;
    }
    reader.onload = () => {
      var image = new Image();
      image.src = reader.result;
      image.onload = () => {
        this.setState({
          is_rectangle: false,
          ratio: image.width / image.height,
          cropper: image.width / image.height !== 1.0,
        });
      };
    };
    reader.onloadend = () => {
      this.setState({ thumbnail: reader.result, thumbnail_name: file.name });
      this.props.onChangeThumbnail(reader.result, file.name);
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(file);
    }
  };
  render() {
    return (
      <React.Fragment>
        <Wrap>
          {/* <div className='shadowBorderBox flex'>
            <img src={this.state.thumbnail} className="img_" />
            <div className='wrap'>
              <div style={{ marginBottom: "9px" }}><span className="text">{this.props.userInfo&&this.props.userInfo.nick_name||""} 프로필 썸네일</span></div>
              <label className="findThumbnailText" htmlFor="file">
                <ButtonNormal
                  width={194}
                  height={30}
                  radius={10}
                  fontSize={15}
                  color={"red"}
                  bgColor={"white"}
                  border={"2px solid red"}
                  text="썸네일 등록" />
              </label>
            </div>
            <input hidden onChange={this.onChangeThumbnail} id="file" type="file" accept="image/png, image/bmp, image/jpeg, image/jpg" />
          </div> */}
          <div className="shadowBorderBox">
            <div className="title">상세정보</div>
            <div className="row" style={{ marginTop: "11px" }}>
              <div className="label">설명</div>
              <TextAreaNormal
                onChangeValue={this.onChangeInfo}
                value={this.state.info}
                height={100}
                color={"#E9E9E9"}
                fontSize={15}
                radius={10}
                placeholder="설명을 입력하세요"
              />
            </div>

            <div className="row" style={{ marginTop: "11px" }}>
              <div className="label">위치</div>
              <DropDownNormal
                onChangeValue={this.onChangeCountry}
                value={this.state.country}
                width={114}
                height={31}
                radius={10}
                disabled={true}
                options={[{ name: "대한민국" }]}
              />
              <DropDownNormal
                onChangeValue={this.onChangeCity}
                value={this.state.city}
                style={{ marginLeft: "12px" }}
                width={114}
                height={31}
                radius={10}
                placeholder="시/도"
                options={this.props.location}
              />
            </div>

            <div className="row" style={{ marginTop: "11px" }}>
              <div className="label">연락처</div>
              <InputNormal
                onChangeValue={this.onChangeEmail}
                value={this.state.email}
                fontSize={12}
                height={31}
                color={"#E9E9E9"}
                radius={10}
                placeholderColor={"#707070"}
                placeholder="메일을 입력하고 [enter] 키를 누르세요."
              />
            </div>

            <div className="row" style={{ marginTop: "11px" }}>
              <div className="label">계좌번호</div>
              <DropDownNormal
                onChangeValue={this.onChangeBankCode}
                value={this.state.bank_code}
                style={{ marginRight: "12px" }}
                width={76}
                height={31}
                radius={10}
                placeholder="은행"
                options={this.props.bank_code}
              />
              <InputNormal
                onChangeValue={this.onChangeBankNumber}
                value={this.state.bank_number}
                fontSize={15}
                height={31}
                color={"#E9E9E9"}
                radius={10}
                placeholderColor={"#707070"}
                placeholder="계좌번호"
              />
            </div>
          </div>
          <div className="shadowBorderBox" style={{ marginTop: "19px" }}>
            <div className="title">공유자 인증하기</div>
            <div style={{ height: "90px" }} />
          </div>
        </Wrap>
      </React.Fragment>
    );
  }
}

export default SharerForm;

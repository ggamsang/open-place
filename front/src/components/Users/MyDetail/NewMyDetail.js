import React from "react";
import { goto } from "navigator";
import * as styled from "./styles";
import { SetSession } from "modules/Sessions";
import host from "config";
import Design from "components/Designs/Design";
import { confirm } from "components/Commons/Confirm/Confirm";
import { Modal } from "semantic-ui-react";
import { alert } from "components/Commons/Alert/Alert";
import DateFormat from "modules/DateFormat";
import { Rating, Box } from "@mui/material";

function BasicRating(props) {
  const [value, setValue] = React.useState(props.rate || 2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 20 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <Rating
        name="read-only"
        value={value}
        readOnly
        defaultValue={2}
        size="large"
        style={{ fontSize: "5rem" }}
      />
      {/* <Typography component="legend">Disabled</Typography> */}
      {/* <Rating name="disabled" value={value} disabled /> */}
      {/* <Typography component="legend">No rating given</Typography> */}
      {/* <Rating name="no-value" value={null} /> */}
    </Box>
  );
}

const PROFILE = "Profile";
const NOTI = "Noti";
const NONE = "";

class MyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: NONE,
      editName: false,
      nick_name: "",
      thumbnail: this.props.userInfo?.l_img || null,
      thumbnail_name: null,
      phone: null,
      password: "",
      password_checked: "",
      mydesigns: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeThumbnail = this.onChangeThumbnail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordChecked = this.onChangePasswordChecked.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userInfo !== this.props.userInfo) {
      this.setState({
        nick_name: this.props.userInfo.nick_name,
        thumbnail: this.props.userInfo.l_img,
      });
    }
  }
  onChangeNickname = (event) => {
    this.setState({ nick_name: event.target.value });
  };
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onChangePasswordChecked = (evnet) => {
    this.setState({ password_checked: evnet.target.value });
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
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(file);
    }
  };
  onSubmit = async () => {
    // console.log(this.state);
    // return;
    if (this.state.nick_name !== this.props.userInfo.nick_name) {
      await this.props.CheckNickNameRequest(
        // this.props.token,
        this.state.nick_name
      );
      if (this.state.nick_name === "") {
        // alert("닉네임을 입력해주세요");
        // return;
      }
      if (
        this.props.checkNickName === true &&
        this.state.nick_name !== this.props.userInfo.nick_name
      ) {
        await alert("중복된 닉네임입니다");
        return;
      }
    }
    if (this.state.password !== this.state.password_checked) {
      await alert("비밀번호가 일치하지 않습니다");
      return;
    }
    if (
      this.state.password.length != 0 &&
      this.state.password_checked.length != 0 &&
      (this.state.password.length < 4 || this.state.password_checked.length < 4)
    ) {
      await alert("비밀번호가 너무 짧습니다.");
      return;
    }
    let data = {
      nick_name: this.state.nick_name,
      password: this.state.password,
      // files: [],
    };

    let file = {
      value: this.state.thumbnail,
      name: this.state.thumbnail_name,
      key: 0,
    };
    if (this.state.thumbnail) {
      data.files = [file];
    } // thumbnail 썸네일이 있을 경우에만
    console.log(data);
    // return;
    if (
      data.nick_name === "" &&
      data.password === "" &&
      data.files === undefined
    ) {
      await alert("변경사항이 없습니다.");
      return;
    }
    await this.props
      .UpdateUserDetailRequest(data, this.props.token)
      .then(async (res) => {
        console.log(res);
        if (res.success) {
          await alert("유저정보가 변경되었습니다. 화면을 다시 불러옵니다.");
          window.location.href = "/mypage";
        }
      });
    // setTimeout(() => {}, 1500);
  };
  showModal = (type) => {
    this.setState({ modal: type });
  };
  tab = (tab) => {
    goto(tab);
  };
  onClickLogout = async () => {
    if ((await confirm("로그아웃하시겠습니까?", "예", "아니오")) === false) {
      return;
    }
    SetSession("opendesign_token", null).then(async (data) => {
      await this.props.SignOutRequest();
      window.location.href = "/";
      goto("MAIN");
    });
  };
  GetMyDesignListRequest = (token) => {
    return new Promise(async (resolve, reject) => {
      const url = `${host}/users/myPage/bring-all-myDesign`;
      await fetch(url, {
        headers: {
          "x-access-token": token,
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("sdflksjdljdflskjf", data);
          resolve(data);
        })
        .catch((e) => {
          console.error(e);
          reject(e);
        });
    });
  };
  setMyDesignList = (list) => this.setState({ mydesigns: list || [] });
  componentDidMount() {
    this.GetMyDesignListRequest(this.props.token).then(this.setMyDesignList);
  }
  render() {
    const { modal, mydesigns } = this.state;
    const { nick_name, l_img: thumbnail, rate } = this.props.userInfo;
    const { update_time, create_time, profile } = this.props.MyDetail;
    console.log(this.props, this.state);
    // const NumRate = ({ rate = 0, count = 0, freq = [40, 30, 20, 10, 0] }) => {
    //   return (
    //       <styled.RateNumRate>
    //         {[5, 4, 3, 2, 1].map((item, index) => (
    //           <styled.RateNumRate2 key={item}>
    //             {item}
    //             <styled.RateIcon />
    //             <styled.RateBar per={freq[index]} />
    //           </styled.RateNumRate2>
    //         ))}
    //       </styled.RateNumRate>
    //     </styled.RateExpDiv>
    //   );
    // };
    // <styled.WrapperNumRate>
    //   <styled.ScoreAndReview>
    //     <styled.Score>{rate}</styled.Score>
    //     <styled.Review>
    //       <div>리뷰 {cntReview}개</div>
    //     </styled.Review>
    //   </styled.ScoreAndReview>
    //   <styled.ScoreBox>
    //     {[5, 4, 3, 2, 1].map((item, index) => (
    //       <styled.Score5 key={index}>
    //         <styled.ScoreGrey />
    //         <styled.ScoreCircleIcon1 />
    //         <styled.ScoreRed per={freq[index]} />
    //         <styled.ScoreCircleIcon2 per={freq[index]} />
    //         <span>
    //           {item}({freq[index]}%)
    //         </span>
    //       </styled.Score5>
    //     ))}
    //   </styled.ScoreBox>
    // </styled.WrapperNumRate>
    const NumRate = ({
      rate = 5,
      cntReview = 0,
      freq = [40, 30, 20, 10, 0],
    }) => (
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid red",
          justifyContent: "center",
        }}
      >
        {/* <div style={{ display: "flex" }}> */}
        <span
          style={{
            padding: 0,
            marginLeft: "5px",
            marginBottom: "1rem",
            fontSize: "4.5rem",
            fontFamily: "Noto Sans KR",
            textAlign: "center",
            alignItems: "center",
            lineHeight: "5rem",
          }}
        >
          {parseInt(rate).toFixed(1)}
        </span>
        <BasicRating rate={rate} />
        {/* </div> */}
        <p
          style={{
            margin: "auto",
            border: "1px solid gray",
            padding: "15px 25px",
            width: "max-content",
            borderRadius: "5px",
            fontSize: "1.5rem",
          }}
        >
          리뷰: 0개
        </p>
      </div>
    );

    console.log(this.props.userInfo);
    return (
      <React.Fragment>
        {modal === PROFILE && (
          <React.Fragment>
            <styled.ModalWrapper>
              <styled.ModalContainer>
                <styled.ModalHorizonLine />
              </styled.ModalContainer>
            </styled.ModalWrapper>
          </React.Fragment>
        )}

        <styled.CustomModal
          open={modal === PROFILE}
          onClose={() => this.setState({ modal: false })}
        >
          <styled.ModalTitle>내 정보 수정</styled.ModalTitle>
          <Modal.Content>
            <styled.Wrapper>
              <styled.AddThumbnail>
                <label htmlFor="file">
                  <styled.ThumbnailImg url={this.state.thumbnail || profile} />
                  <div className="title">썸네일 등록</div>
                  <input
                    hidden
                    onChange={this.onChangeThumbnail}
                    id="file"
                    type="file"
                    accept="image/png, image/bmp, image/jpeg, image/jpg"
                  />
                </label>
              </styled.AddThumbnail>
              <styled.VerticalWrapper>
                <styled.NicknameDiv>
                  <div>닉네임</div>
                  <styled.InputBox
                    onChange={this.onChangeNickname}
                    value={
                      this.state.nick_name ||
                      this.props.MyDetail.nick_name ||
                      ""
                    }
                    placeholder="닉네임을 입력하세요."
                  />
                </styled.NicknameDiv>
                <styled.PasswordDiv>
                  <div>비밀번호</div>
                  <styled.InputBox
                    type="password"
                    onChange={this.onChangePassword}
                    value={this.state.password || ""}
                    placeholder="비밀번호를 입력하세요."
                  />
                </styled.PasswordDiv>
                <styled.PasswordCheckDiv>
                  <div>비밀번호 확인</div>
                  <styled.InputBox
                    type="password"
                    onChange={this.onChangePasswordChecked}
                    value={this.state.password_checked || ""}
                    placeholder="변경할 비밀번호를 한 번 더 입력하세요"
                  />
                </styled.PasswordCheckDiv>
                <styled.ModalButtons>
                  <button onClick={() => this.showModal(NONE)}>취소하기</button>
                  <button onClick={this.onSubmit}>수정하기</button>
                </styled.ModalButtons>
              </styled.VerticalWrapper>
            </styled.Wrapper>
          </Modal.Content>
        </styled.CustomModal>

        <styled.Container>
          <styled.WrapperHeader>
            <styled.ProfileBox>
              <styled.ProfileImg url={thumbnail || profile} />
              <span>{nick_name}</span>
            </styled.ProfileBox>
            <styled.ProfileInfo>
              <styled.Buttons>
                <styled.EditProfileBtn onClick={() => this.showModal(PROFILE)}>
                  <span>프로필 편집</span>
                </styled.EditProfileBtn>
                <styled.RegisterBtn onClick={() => this.tab("sharer")}>
                  <span>버튼</span>
                </styled.RegisterBtn>
                <styled.CheckNotificationBtn
                  // onClick={() => this.showModal(NOTI)}
                  onClick={() => this.onClickLogout()}
                >
                  <span>로그아웃</span>
                </styled.CheckNotificationBtn>
              </styled.Buttons>
              <NumRate rate={5} />
              <styled.DateInfo>
                {/* <div>등록일 :{create_time?.split("T")[0]}</div> */}
                {/* <div>갱신일 :{update_time?.split("T")[0]}</div> */}
                <div>등록일: {DateFormat(create_time)}</div>
                <div>갱신일: {DateFormat(update_time)}</div>
              </styled.DateInfo>
            </styled.ProfileInfo>
          </styled.WrapperHeader>
        </styled.Container>

        <styled.WrapperItemList>
          <div className="row">
            <p>등록한 경험아이템</p>
            <div className="item-wrapper">
              {mydesigns
                .filter((design) => !design.parent_design)
                .map((design) => (
                  <div key={design.uid}>
                    <Design
                      {...design}
                      onClick={() => goto("EXP", design.uid)}
                    />
                  </div>
                ))}
            </div>

            <p>참여중인 경험아이템</p>
            <div className="item-wrapper">
              {mydesigns
                .filter((design) => design.parent_design && design.d_flag === 1)
                .map((design) => (
                  <div key={design.uid}>
                    <Design
                      {...design}
                      onClick={() => goto("EXP", design.uid)}
                    />
                  </div>
                ))}
            </div>
            {/* <p>신청아이템: 수락대기중</p>
            <div className="item-wrapper">
              {mydesigns
                .filter((design) => design.parent_design && design.d_flag === 0)
                .map((design) => (
                  <div key={design.uid}>
                    <Design
                      {...design}
                      onClick={() => goto("EXP", design.uid)}
                    />
                  </div>
                ))}
            </div> */}
          </div>
        </styled.WrapperItemList>
      </React.Fragment>
    );
  }
}

export default MyDetail;

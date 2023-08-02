import React from "react";
import { goto } from "navigator";
import * as styled from "./styles";
import { SetSession } from "modules/Sessions";
import host from "config";
import Design from "components/Designs/Design";

const PROFILE = "Profile";
const NOTI = "Noti";
const NONE = "";

class MyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: NONE,
      editName: false,
      nick_name: null,
      thumbnail: this.props.userInfo?.l_img || null,
      thumbnail_name: null,
      phone: null,
      password: null,
      password_checked: null,
      mydesigns: [],
    };
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
      });
    }
  }
  onChangeNickname = (event) => {
    this.setState({ nick_name: event.target.value });
  };
  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onChangePassword_checked = (evnet) => {
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
        this.props.token,
        this.state.nick_name
      );
      if (this.state.nick_name === null || this.state.nick_name === "") {
        alert("닉네임을 입력해주세요");
        return;
      } else if (
        this.props.checkNickName === true &&
        this.state.nick_name !== this.props.userInfo.nick_name
      ) {
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
    };
    let file = {
      value: this.state.thumbnail,
      name: this.state.thumbnail_name,
      key: 0,
    };
    if (this.state.thumbnail !== this.props.userInfo.l_img) {
      await data.files.push(file);
    } // thumbnail 썸네일이 있을 경우에만
    await this.props.updateUserRequest(
      this.props.userInfo.uid,
      data,
      this.props.token
    );

    setTimeout(() => {
      window.location.href = "/mypage";
    }, 1500);
  };
  showModal = (type) => {
    this.setState({ modal: type });
  };
  tab = (tab) => {
    goto(tab);
  };
  onClickLogout = async () => {
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
      // 디자이너의 디자인 리스트 가져오기
      // export function GetMyDesignInDesignerRequest(id, page, sort) {
      //   const url = `${host}/designer/designerDetail/${id}/allDesignDesigner/${page}/${sort}`;
      //   //console.log("sql:", url);
      //   return (dispatch) => {
      //       return fetch(url, {
      //           headers: { "Content-Type": "application/json" },
      //           method: "get"
      //       }).then((response) => {
      //           return response.json()
      //       }).then((data) => {
      //           //console.log("designer's design list data >>", data)
      //           if (!data) {
      //               //console.log("no data")
      //               data = []
      //           }
      //           if (page === 0) {
      //               dispatch(MyDesignInDesignerClear(data))
      //               return
      //           }
      //           dispatch(GetMyDesignInDesigner(data))
      //       }).catch((error) => {
      //           dispatch(MyDesignInDesignerFail())
      //           console.error("err", error)
      //       })
      //   }
      // }
    });
  };
  setMyDesignList = (list) => this.setState({ mydesigns: list || [] });
  componentDidMount() {
    this.GetMyDesignListRequest(this.props.token).then(this.setMyDesignList);
  }
  render() {
    const { modal, mydesigns } = this.state;
    const {
      nick_name,
      create_time,
      update_time,
      l_img: thumbnail,
    } = this.props.userInfo;
    console.log(this.props, this.state);

    const ProfileModal = () => {};
    return (
      <React.Fragment>
        {modal === PROFILE && (
          <React.Fragment>
            <styled.ModalWrapper>
              <styled.ModalContainer>
                <styled.ModalTitle>내 정보 수정</styled.ModalTitle>
                <styled.ModalHorizonLine />
                <styled.Wrapper>
                  <styled.AddThumbnail>
                    <label htmlFor="file">
                      <styled.ThumbnailImg url={this.state.thumbnail} />
                      <div>썸네일 등록</div>
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
                        value={this.state.nick_name || ""}
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
                        onChange={this.onChangePassword_checked}
                        value={this.state.password_checked || ""}
                        placeholder="변경할 비밀번호를 한 번 더 입력하세요"
                      />
                    </styled.PasswordCheckDiv>
                    <styled.ModalButtons>
                      <button onClick={() => this.showModal(NONE)}>
                        취소하기
                      </button>
                      <button onClick={this.onSubmit}>수정하기</button>
                    </styled.ModalButtons>
                  </styled.VerticalWrapper>
                </styled.Wrapper>
              </styled.ModalContainer>
            </styled.ModalWrapper>
          </React.Fragment>
        )}
        {/* {modal === NOTI && <React.Fragment>;</React.Fragment>} */}
        {/* // <Wrapper url={this.props.userInfo?.l_img || null}>
      //   <div className="header">
      //     <div className="searchbox">
      //       <SearchForm />
      //     </div>
      //     <div className="profile">
      //       <div className="thumbnail" />
      //       <div className="user_name">
      //         {this.props.userInfo?.nick_name || "국민대학교 CRC"}
      //       </div>
      //       <div className="button_wrap">
      //         <div
      //           className="button borderRight"
      //           onClick={() =>
      //             goto(
      //               this.props.sharer === null
      //                 ? "CREATE-SHARER"
      //                 : "MODIFY-SHARER"
      //             )
      //           }
      //         >
      //           공유자
      //           <br />
      //           등록수정
      //         </div>
      //         <div
      //           className="button borderRight"
      //           onClick={() => goto("MODIFY-USER")}
      //         >
      //           프로필
      //           <br />
      //           편집
      //         </div>
      //         <div className="button">
      //           <NotificationContainer active={this.props.active} />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <this.props.Outlet {...this.props} />
      // </Wrapper>

      // certification : null
      // create_time : "2022-06-23T12:27:50.000Z"
      // d_flag : null
      // id : "user01"
      // l_img : "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/thumbnails/1657775946887-x600.jpg"
      // like : 0
      // nick_name : "카네이션핑크"
      // optional_term : null
      // phone : "01022223333"
      // point : 2147463647
      // socket_id : null
      // sso : null
      // thumbnail_id : 60
      // uid : 11
      // update_time : "2022-06-23T12:27:50.000Z" */}

        <styled.Container>
          <styled.Wrapper>
            <styled.ProfileBox>
              <styled.ProfileImg url={thumbnail} />
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
                  onClick={() => this.showModal(NOTI)}
                >
                  <span>알림목록</span>
                </styled.CheckNotificationBtn>
              </styled.Buttons>
              <styled.Wrapper>
                <styled.ScoreAndReview>
                  <styled.Score>4.7</styled.Score>
                  <styled.Review>
                    <div>리뷰 140</div>
                  </styled.Review>
                </styled.ScoreAndReview>
                <styled.ScoreBox>
                  <styled.Score5>
                    <styled.ScoreGrey />
                    <styled.ScoreCircleIcon1 />
                    <styled.ScoreRed />
                    <styled.ScoreCircleIcon2 />
                    <span>5</span>
                  </styled.Score5>
                  <styled.Score5>
                    <styled.ScoreGrey />
                    <styled.ScoreCircleIcon1 />
                    <styled.ScoreRed />
                    <styled.ScoreCircleIcon2 />
                    <span>4</span>
                  </styled.Score5>
                  <styled.Score5>
                    <styled.ScoreGrey />
                    <styled.ScoreCircleIcon1 />
                    <styled.ScoreRed />
                    <styled.ScoreCircleIcon2 />
                    <span>3</span>
                  </styled.Score5>
                  <styled.Score5>
                    <styled.ScoreGrey />
                    <styled.ScoreCircleIcon1 />
                    <styled.ScoreRed />
                    <styled.ScoreCircleIcon2 />
                    <span>2</span>
                  </styled.Score5>
                  <styled.Score5>
                    <styled.ScoreGrey />
                    <styled.ScoreCircleIcon1 />
                    <styled.ScoreRed />
                    <styled.ScoreCircleIcon2 />
                    <span>1</span>
                  </styled.Score5>
                </styled.ScoreBox>
              </styled.Wrapper>
              <styled.DateInfo>
                <div>등록일 : {create_time?.split("T")[0]}</div>
                <div>갱신일 : {update_time?.split("T")[0]}</div>
              </styled.DateInfo>
            </styled.ProfileInfo>
          </styled.Wrapper>

          <styled.Wrapper>
            <div style={{ margin: "auto", width: "95vw", padding: "15px" }}>
              <p
                style={{
                  width: "100vw",
                  textAlign: "center",
                  fontSize: "2rem",
                  marginTop: "1rem",
                }}
              >
                등록아이템
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                {mydesigns
                  .filter((design) => !design.parent_design)
                  .map((design) => (
                    <>
                      <Design
                        {...design}
                        onClick={() => goto("EXP", design.uid)}
                      />
                    </>
                  ))}
              </div>

              <p
                style={{
                  width: "100vw",
                  textAlign: "center",
                  fontSize: "2rem",
                  marginTop: "1rem",
                }}
              >
                신청아이템: 활동중
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                {mydesigns
                  .filter(
                    (design) => design.parent_design && design.d_flag === 1
                  )
                  .map((design) => (
                    <>
                      <Design
                        {...design}
                        onClick={() => goto("EXP", design.uid)}
                      />
                    </>
                  ))}
              </div>
              <p
                style={{
                  width: "100vw",
                  textAlign: "center",
                  fontSize: "2rem",
                  marginTop: "1rem",
                }}
              >
                신청아이템: 수락대기중
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                {mydesigns
                  .filter(
                    (design) => design.parent_design && design.d_flag === 0
                  )
                  .map((design) => (
                    <>
                      <Design
                        {...design}
                        onClick={() => goto("EXP", design.uid)}
                      />
                    </>
                  ))}
              </div>
            </div>
          </styled.Wrapper>
        </styled.Container>
      </React.Fragment>
    );
  }
}

export default MyDetail;

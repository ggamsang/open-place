import React, { Component } from "react";
import { goto } from "navigator";
import NotificationContainer from "desktop/containers/NotificationContainer";
import * as styled from "./styles";
import ListPageProfileCard from "./ListPage-ProfileCard";
import { Outlet } from "react-router";

const PROFILE = "Profile";
const NOTI = "Noti";
const NONE = "";
class MyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: NONE };
  }
  showModal = (type) => {
    this.setState({ modal: type });
  };
  tab = (tab) => {
    goto(tab);
  };
  onClickLogout = async () => {
    await this.props.SignOutRequest();
    goto("MAIN");
  };
  render() {
    const { modal } = this.state;
    console.log(this.props);
    const {
      nick_name,
      create_time,
      update_time,
      l_img: thumbnail,
    } = this.props.userInfo;
    const ProfileModal = () => {};
    return (
      <>
        {modal === PROFILE && (
          <>
            <styled.ModalWrapper>
              <styled.ModalContainer>
                <styled.ModalTitle>내 정보 수정</styled.ModalTitle>
                <styled.ModalHorizonLine />
                <styled.Wrapper>
                  <styled.AddThumbnail>
                    <styled.ThumbnailImg />
                    <div>썸네일 등록</div>
                  </styled.AddThumbnail>
                  <styled.VerticalWrapper>
                    <styled.NicknameDiv>
                      <div>닉네임</div>
                      <styled.InputBox placeholder="닉네임을 입력하세요." />
                    </styled.NicknameDiv>
                    <styled.PasswordDiv>
                      <div>비밀번호</div>
                      <styled.InputBox placeholder="비밀번호를 입력하세요." />
                    </styled.PasswordDiv>
                    <styled.PasswordCheckDiv>
                      <div>비밀번호 확인</div>
                      <styled.InputBox placeholder="비밀번호를 한 번 더 입력하세요." />
                    </styled.PasswordCheckDiv>
                    <styled.ModalButtons>
                      <button onClick={() => this.showModal(NONE)}>
                        취소하기
                      </button>
                      <button onClick={() => this.showModal(NONE)}>
                        수정하기
                      </button>
                    </styled.ModalButtons>
                  </styled.VerticalWrapper>
                </styled.Wrapper>
              </styled.ModalContainer>
            </styled.ModalWrapper>
          </>
        )}
        {modal === NOTI && <>;</>}
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
                  <span>공유자등록/수정</span>
                </styled.RegisterBtn>
                <styled.CheckNotificationBtn
                  onClick={() => this.showModal(NOTI)}
                >
                  <span>알림확인</span>
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
                <div>등록일 : {create_time.split("T")[0]}</div>
                <div>갱신일 : {update_time.split("T")[0]}</div>
              </styled.DateInfo>
            </styled.ProfileInfo>
          </styled.Wrapper>
          <styled.Wrapper>
            <styled.CategoryBox>
              <styled.TabButton onClick={this.tab("")}>포인트</styled.TabButton>
              <div></div>
              <styled.TabButton onClick={this.tab("")}>
                등록경험
              </styled.TabButton>
              <div></div>
              <styled.TabButton onClick={this.tab("")}>
                판매경험
              </styled.TabButton>
              <div></div>
              <styled.TabButton onClick={this.tab("")}>
                구매경험
              </styled.TabButton>
              <div></div>
              <styled.TabButton onClick={this.tab("")}>관심</styled.TabButton>
              <div></div>
              <styled.TabButton onClick={() => this.onClickLogout()}>
                로그아웃
              </styled.TabButton>
            </styled.CategoryBox>
            <styled.VerticalWrapper>
              {<Outlet />}
              <styled.SortAs>
                <div>최신순</div>
                <div>인기순</div>
              </styled.SortAs>
              <styled.ExpList>
                <styled.ProfileCardDiv>
                  <ListPageProfileCard />
                </styled.ProfileCardDiv>
                <styled.ProfileCardDiv>
                  <ListPageProfileCard />
                </styled.ProfileCardDiv>
                <styled.ProfileCardDiv>
                  <ListPageProfileCard />
                </styled.ProfileCardDiv>
                <styled.ProfileCardDiv>
                  <ListPageProfileCard />
                </styled.ProfileCardDiv>
              </styled.ExpList>
            </styled.VerticalWrapper>
          </styled.Wrapper>
        </styled.Container>
      </>
    );
  }
}

export default MyDetail;

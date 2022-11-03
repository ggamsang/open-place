import React, { useState } from "react";
import * as styled from "./styles";
import Header from "../../components/desktop/ListPage-Header";
import Navbar from "../../components/desktop/ListPage-Navbar";
import Footer from "../../components/desktop/Footer";
import ListPageProfileCard from "../../components/desktop/ListPage-ProfileCard";

const MyPage = () => {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  {
    /* 모달창 코드*/
  }
  const Modal = () => {
    return (
      <styled.Modal>
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
                <styled.InputBox>
                  <span>닉네임을 입력하세요.</span>
                </styled.InputBox>
              </styled.NicknameDiv>
              <styled.PasswordDiv>
                <div>비밀번호</div>
                <styled.InputBox>
                  <span>비밀번호를 입력하세요.</span>
                </styled.InputBox>
              </styled.PasswordDiv>
              <styled.PasswordCheckDiv>
                <div>비밀번호 확인</div>
                <styled.InputBox>
                  <span>비밀번호를 한 번 더 입력하세요.</span>
                </styled.InputBox>
              </styled.PasswordCheckDiv>
              <styled.ModalButtons>
                <button onClick={() => setIsModal(false)}>취소하기</button>
                <button>수정하기</button>
              </styled.ModalButtons>
            </styled.VerticalWrapper>
          </styled.Wrapper>
        </styled.ModalContainer>
      </styled.Modal>
    );
  };

  return (
    <styled.Container>
      {/* 모달창 코드*/}
      {isModal && <Modal />}

      <Header />
      <Navbar />
      <styled.Wrapper>
        <styled.ProfileBox>
          <styled.ProfileImg />
          <span>닉네임</span>
        </styled.ProfileBox>
        <styled.ProfileInfo>
          <styled.Buttons>
            <styled.EditProfileBtn onClick={showModal}>
              <span>프로필 편집</span>
            </styled.EditProfileBtn>
            <styled.RegisterBtn>
              <span>공유자등록/수정</span>
            </styled.RegisterBtn>
            <styled.CheckNotificationBtn>
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
            <styled.DateInfo>
              <div>등록일 : 2022.01.01</div>
              <div>갱신일 : 2022.08.15</div>
            </styled.DateInfo>
          </styled.Wrapper>
        </styled.ProfileInfo>
      </styled.Wrapper>
      <styled.Wrapper>
        <styled.CategoryBox>
          <span>포인트</span>
          <div></div>
          <span>등록경험</span>
          <div></div>
          <span>판매경험</span>
          <div></div>
          <span>구매경험</span>
          <div></div>
          <span>관심</span>
          <div></div>
          <span>로그아웃</span>
        </styled.CategoryBox>
        <styled.VerticalWrapper>
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
      <Footer />
    </styled.Container>
  );
};

export default MyPage;

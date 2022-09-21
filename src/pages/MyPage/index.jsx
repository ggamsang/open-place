import React from 'react';
import * as styled from './styles';
import Header from '../../components/ListPage-Header';
import Navbar from '../../components/ListPage-Navbar';
import Footer from '../../components/Footer';
import ListPageProfileCard from '../../components/ListPage-ProfileCard';

const MyPage = () => {
    return(
        <styled.Container>
            <Header />
            <Navbar />
            <styled.Wrapper>
                <styled.ProfileBox>
                    <styled.ProfileImg />
                    <span>닉네임</span>
                </styled.ProfileBox>
                <styled.ProfileInfo>
                    <styled.Buttons>
                        <styled.EditProfileBtn>
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
    )
}

export default MyPage;
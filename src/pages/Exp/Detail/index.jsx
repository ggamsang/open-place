import React from 'react';
import * as styled from './styles';
import Header from '../../../components/ListPage-Header';
import Navbar from '../../../components/ListPage-Navbar'; 
import NumRate from '../../../components/NumRate';
import ProfileCard from '../../../components/ProfileCard';
import Footer from '../../../components/Footer';



const ExpDetailPage = () => {


  return (
    // <div>
    //     경험 상세 페이지
    // </div>);
    <styled.Main>
      <Header />
      <styled.ExpInfoText>경험정보</styled.ExpInfoText>
      <styled.ExpInfoDiv>
        <styled.ExpImg />
        <styled.ExpInnerDiv>
          <styled.NameAndTagsDiv>
            <styled.ExpName>경험이름</styled.ExpName>
            <styled.TagButton>
              <styled.TagButtonText>Tag123</styled.TagButtonText>
              <styled.TagButtonDelete />
            </styled.TagButton>
            <styled.TagButton>
              <styled.TagButtonText>Tag123</styled.TagButtonText>
              <styled.TagButtonDelete />
            </styled.TagButton>
            <styled.TagButton>
              <styled.TagButtonText>Tag123</styled.TagButtonText>
              <styled.TagButtonDelete />
            </styled.TagButton>
            <styled.TagButton>
              <styled.TagButtonText>Tag123</styled.TagButtonText>
              <styled.TagButtonDelete />
            </styled.TagButton>
          </styled.NameAndTagsDiv>
          <styled.Price>13500원</styled.Price>
          <NumRate />
        </styled.ExpInnerDiv>
        <styled.StarIcon />
        <styled.LikeButton>
          <span>좋아요</span>
        </styled.LikeButton>
        <styled.PurchaseButton>
          <span>구매하기</span>
        </styled.PurchaseButton>
      </styled.ExpInfoDiv>



      <styled.DetailsDiv>
        <styled.DetailsText>상세정보</styled.DetailsText>
      </styled.DetailsDiv>
      <styled.ReviewText>리뷰</styled.ReviewText>
      <styled.ReviewDiv />

      <styled.BoardText>게시판</styled.BoardText>
      <styled.BoardDiv>
        <styled.Post>
          <span>10</span>
          <span>내용</span>
          <span>닉네임</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine />  
        <styled.AnswerTitle>
          <styled.UnderArrow />
          <span>답변</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.AnswerTitle>
        <styled.AnswerBody>
          <span>답변</span>
          <span>답변내용</span>
        </styled.AnswerBody>
        <styled.PostLine /> 
        <styled.Post>
          <span>09</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>08</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>07</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>06</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>05</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>04</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>03</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>02</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>
        <styled.PostLine /> 
        <styled.Post>
          <span>01</span>
          <span>내용</span>
          <span>작성자</span>
          <span>2022. 08. 08</span>
        </styled.Post>

        <styled.PageNumbers>
          <styled.FirstPage />
          <styled.PrevPage />
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <styled.NextPage />
          <styled.LastPage />
        </styled.PageNumbers>
      </styled.BoardDiv>
      
      <styled.OtherExp>
        <styled.OtherExpList>
          <span>경험공유자의 다른 경험</span>
          <styled.ProfileCardDiv>
            <span><ProfileCard /></span>
            <span><ProfileCard /></span>
            <span><ProfileCard /></span>
          </styled.ProfileCardDiv>
        </styled.OtherExpList>
        <styled.SimilarExpList>
          <span>이 경험과 유사한 경험</span>
          <styled.ProfileCardDiv>
            <span><ProfileCard /></span>
            <span><ProfileCard /></span>
            <span><ProfileCard /></span>
          </styled.ProfileCardDiv>
        </styled.SimilarExpList>
      </styled.OtherExp>
      <Navbar />
      <Footer />
    </styled.Main>
  );
};

export default ExpDetailPage;

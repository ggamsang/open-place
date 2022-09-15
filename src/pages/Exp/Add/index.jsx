import React from 'react';
import * as styled from './styles';
import Header from '../../../components/ListPage-Header';
import Navbar from '../../../components/ListPage-Navbar';
import DM from '../../../components/ListPage-DM'
import Footer from '../../../components/Footer';

const ExpAddPage = () => {
  return (
    <styled.Main>
      <Header />
      <Navbar />
      {/* <DM /> */}
      <styled.AddExpText>경험 등록</styled.AddExpText>
      <styled.Wrapper>
        <styled.AddThumbnail>
          <span>썸네일 이미지 등록</span>
          <styled.ThumbnailImg>
            <span>첨부</span>
          </styled.ThumbnailImg>
        </styled.AddThumbnail>

        <styled.InfoBox>
          <styled.TitleDiv>
            <div>제목</div>
            <div>국민대 CRC</div>
          </styled.TitleDiv>
          <styled.CategoryDiv>
            <div>카테고리</div>
            <styled.CategoryButton1>
              <span>대분류</span>
            </styled.CategoryButton1>
            <styled.CategoryButton2>
              <span>소분류</span>
            </styled.CategoryButton2>
          </styled.CategoryDiv>
          <styled.TagDiv>
            <div>태그</div>
            <styled.InputTagDiv>
              <span>태그를 입력하고 [enter] 키를 누르세요.</span>
            </styled.InputTagDiv>
          </styled.TagDiv>
          <styled.TagExamplesDiv>
            <div>태그예시</div>
            <div>태그예시</div>
            <div>태그예시</div>
            <div>태그예시</div>
            <div>태그예시</div>
            <div>태그예시</div>
          </styled.TagExamplesDiv>
          <styled.DescriptionDiv>
            <div>설명</div>
            <div>설명을 입력하세요</div>
          </styled.DescriptionDiv>
          <styled.ExpTypeDiv>
            <div>경험유형</div>
            <styled.InputPriceDiv>
              <span>가격을 입력하세요.</span>
            </styled.InputPriceDiv>
          </styled.ExpTypeDiv>
          <styled.PriceDiv>
            <styled.PriceDivText>가격</styled.PriceDivText>
            <styled.PriceBox>10000</styled.PriceBox> 
            <span>원</span>
            <styled.AddPrice>
              <styled.AddPriceButton>+ 1천</styled.AddPriceButton>
              <styled.AddPriceButton>+ 1만</styled.AddPriceButton>
              <styled.AddPriceButton>+ 5만</styled.AddPriceButton>
              <styled.AddPriceButton>+ 10만</styled.AddPriceButton>
              <styled.AddPriceButton>+ 100만</styled.AddPriceButton>
            </styled.AddPrice>
          </styled.PriceDiv>
        </styled.InfoBox>
      </styled.Wrapper>
      <styled.Wrapper>
        <styled.CategoryBox>
          <p>일반</p>
          <p>자문/상담</p>
          <p>강의/강좌</p>
          <p>모임</p>
          <p>게임</p>
        </styled.CategoryBox>
        <styled.ExpDetailBox>
          <span>경험유형 상세</span>
        </styled.ExpDetailBox>
        
      </styled.Wrapper>
      <styled.AddFile></styled.AddFile>
      <styled.Wrapper>
        <styled.AddButton>
          <span>등록하기</span>
        </styled.AddButton>
        <styled.CancelButton>
          <span>취소하기</span>
        </styled.CancelButton>
      </styled.Wrapper>
      <Footer />
    </styled.Main>
  )
};

export default ExpAddPage;

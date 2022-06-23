import React from 'react';
import Slide from 'components_mobile/Slide';
import TopItemList from 'components_mobile/TopItemList';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  .search_box{
    width:100%;
    display:flex;
    justify-content:center;
  }
`;
const GradationCard = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 220px;
  background-size: 200% 200%;
  background-position: top right;
  background-image: linear-gradient(${prop => prop.angle}deg, #501B1B, #655FFA, #D30E0E);
`;
const ContentWrapper = styled.div`
  z-index: 1;
  position: relative;

  .blanker {
    height: 49px;
  }
`;

function Main() {
  return (<Wrapper>
    <Fade>
      <div className='blanker'>&nbsp;</div>
      <GradationCard angle={30} />

      <ContentWrapper>
        <SearchForm isMain={true} />
        <Slide />
        <TopItemList />
        <div className='blanker'>&nbsp;</div>
      </ContentWrapper>

    </Fade>

  </Wrapper>)
}

export default Main;
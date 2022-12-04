import React from "react";
import styled from "styled-components";
import Slide from "../../components/Slide";
import TopItemList from "../../components/TopItemList";
import Fade from "react-reveal/Fade";
import SearchForm from "../../components/Search/SearchForm";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  .search_box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const GradationCard = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 98px;
  background-size: 200% 200%;
  background-position: top right;
  background-image: linear-gradient(
    ${(prop) => prop.angle}deg,
    #501b1b,
    #655ffa,
    #d30e0e
  );
`;
const ContentWrapper = styled.div`
  z-index: 1;
  position: relative;
  .blanker {
    height: 49px;
  }
  .search_wrap {
    width: 100%;
    box-sizing: border-box;
    padding-top: 49px;
    padding-bottom: 8px;
  }
`;

function Main() {
  return (
    <Wrapper>
      <Fade>
        <GradationCard angle={30} />

        <ContentWrapper>
          <div className="search_wrap">
            <SearchForm isMain={true} />
          </div>
          <Slide />
          <TopItemList />
        </ContentWrapper>
      </Fade>
    </Wrapper>
  );
}

export default Main;

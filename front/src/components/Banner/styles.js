import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1920px;
  .slick-list {
    height: 349px;
  }

  .slick-dots {
    width: 100%;
    bottom: 50px;
  }

  .slick-dots li button:before {
    color: white;
    // font-size: 10px;
  }

`;

export const Image = styled.img`
  background-size: cover;
  background-position: center center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 100%;
`;

export const BannerText = styled.div`
  position: absolute;
  right: 150px;
  bottom: 150px;
  color: white;
  display: flex;
  text-align: right;
  width: max-content;
  
  > div :last-child { 
    margin-left: 35px;
  }
  @media only screen and (max-width: 991px) and (min-width: 320px){ 
    bottom: 50px;
    right: 100px;
    display: flex;
    flex-direction: column;
    > div :last-child { margin: auto;}
  }
`;

export const BannerText2 = styled.div`
  margin-bottom: 10px;
  font: normal normal 700 51px/51px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
`;

export const BannerText3 = styled.div`
  font: normal normal 700 56px/51px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
`;

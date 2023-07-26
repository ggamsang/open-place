import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSlider = styled(Slider)`
  // width: 100%;
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

export const Image = styled.img``;

export const ImageContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 100%;
`;

export const BannerText = styled.div`
  position: absolute;
  padding-left: 612px;
  padding-top: 121px;
  color: white;
  display: flex;
  text-align: center;
`;

export const BannerText2 = styled.div`
  margin-bottom: 36px;
  font: normal normal 700 51px/51px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
`;

export const BannerText3 = styled.div`
  font: normal normal 700 56px/51px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
`;

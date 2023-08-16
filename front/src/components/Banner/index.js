import React, { Component } from "react";
import SampleBanner1 from "resources/place/banner1.png";
import SampleBanner2 from "resources/place/banner2.jpg";
import SampleBanner3 from "resources/place/banner3.png";
import * as styled from "./styles";

const items = [
  { id: 1, url: SampleBanner1 },
  { id: 2, url: SampleBanner2 },
  { id: 3, url: SampleBanner3 },
];

const Banner = () => {
  const settings = {
    dots: true,
  };
  return (
    <styled.StyledSlider {...settings}>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <styled.ImageContainer>
              <styled.BannerText>
                <styled.BannerText2>매일 새로운 경험</styled.BannerText2>
                <styled.BannerText2>OPEN PLACE</styled.BannerText2>
              </styled.BannerText>
              <styled.Image src={item.url} />
            </styled.ImageContainer>
          </div>
        );
      })}
    </styled.StyledSlider>
  );
};

export default Banner;

import React, { Component } from "react";
import SampleBanner from "resources/place/banner.png";
import * as styled from "./styles";

const items = [
  { id: 1, url: SampleBanner },
  { id: 2, url: SampleBanner },
  { id: 2, url: SampleBanner },
  { id: 2, url: SampleBanner },
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
                <styled.BannerText2>매일 새로운 경험, </styled.BannerText2>
                <styled.BannerText3> OPEN PLACE</styled.BannerText3>
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

import React from "react";
import * as styled from "./styles";

const NumRate = ({ rate = 0, count = 0, freq = [40, 30, 20, 10, 0] }) => {
  return (
    <styled.RateExpDiv>
      <styled.RateDiv>
        <styled.Rate>{rate}</styled.Rate>
        <styled.RateReview>리뷰 {count}개</styled.RateReview>
      </styled.RateDiv>
      <styled.RateStarIcon />
      {/* <NumRate /> */}
      <styled.RateNumRate>
        {[5, 4, 3, 2, 1].map((item, index) => (
          <styled.RateNumRate2 key={item}>
            {item}
            <styled.RateIcon />
            <styled.RateBar per={freq[index]} />
          </styled.RateNumRate2>
        ))}
      </styled.RateNumRate>
    </styled.RateExpDiv>
  );
};
export default NumRate;

import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";

export const ScrollWrap = styled(List)`
  width: ${window.innerWidth}px;
  max-width: 1920px;
  margin: 0px;
  margin-top: 35px;

  .wrapper_ {
    padding-bottom: 10px;
    width: 100%;
    display: grid;
    // grid-wrap: wrap;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 30px;

    padding: 0 20px;
    justify-content: space-around;
    margin-bottom: 77px;
    text-align: center;
    align-items: center;

    // @media only screen and (min-width: 1919px) {grid-template-columns:; }
    @media only screen and (max-width: 1919) and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 991px) and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 767px) and (min-width: 320px) {
      grid-template-columns: 1fr;
    }
  }
  justify-content: center;
  align-items: center;
  // overflow: auto;
  // height: 1000px;
`;
export const NoData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

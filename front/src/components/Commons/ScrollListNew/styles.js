import React from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";

export const ScrollWrap = styled(List)`
  width: 100%;
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
  }
  justify-content: center;
  align-items: center;
  // overflow: auto;
  // height: 1000px;
`;
export const NoData = styled.div`
  width: 100%;
  //   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

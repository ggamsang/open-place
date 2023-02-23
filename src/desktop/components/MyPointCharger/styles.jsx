import styled from "styled-components";
import { resolution } from "desktop/commons/resolution";

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  // height: 100vh;
  .header {
    width: 100%;
    margin-bottom: 30px;
  }
  .searchbox {
    width: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
  }
  .img_arrow {
    width: ${resolution(27)}px;
    height: ${resolution(19)}px;
  }

  .profile {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .thumbnail {
      width: ${resolution(100)}px;
      height: ${resolution(100)}px;
      border-radius: 50%;
      background-color: #efefef;
      background-image: url(${(prop) => prop.url});
      background-size: cover;
    }
    .user_name {
      margin-top: 10px;
      width: 100%;
      font-size: ${resolution(20)}px;
      text-align: center;
      color: white;
      font-family: Montserrat;
      font-weight: Bold;
    }
    .like {
      margin-top: 10px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      .count {
        height: 15px;
        text-align: right;
        font: normal normal bold 12px/15px Pretendard;
        letter-spacing: 0px;
        color: #ffffff;
      }
      .imgheart {
        margin-left: 5px;
        width: 24px;
        height: 24px;
      }
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-left: 13px;
    margin-top: 10px;
  }
  .label {
    width: 100px;
    height: 18px;
    text-align: left;
    font: normal normal bold 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000;
    box-sizing: border-box;
    margin-right: 10px;
  }
  .method-buttons {
    width: 205px;
    button {
      &.active {
        background: #fe1400 0% 0% no-repeat padding-box;
        .text {
          text-align: center;
          font: normal normal bold 15px/18px Pretendard;
          letter-spacing: 0px;
          color: #ffffff;
        }
      }
      margin-bottom: 10px;
      :last-child {
        margin-bottom: 25px;
      }
      border: none;
      outline: none;
      width: 205px;
      height: 35px;
      background: #e9e9e9 0% 0% no-repeat padding-box;
      border-radius: 20px;
      .text {
        height: 18px;
        text-align: center;
        font: normal normal normal 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #000000;
      }
    }
  }
`;
export const ButtonWrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;

  button {
    &.active {
      background: #fe1400 0% 0% no-repeat padding-box;
    }
    &.stepback {
      margin-left: 8px;
    }
    border: none;
    outline: none;
    height: 35px;
    background: #707070 0% 0% no-repeat padding-box;
    box-shadow: 2px 2px 3px #00000019;
    border-radius: 10px;
    .text {
      margin: auto;
      width: max-content;
      height: 18px;
      text-align: center;
      font: normal normal 500 15px/18px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
    }
    &.bw100 {
      width: 100%;
    }
    &.bw50 {
      width: 50%;
    }
  }
`;
export const CurrentPoint = styled.div`
  margin: auto;
  box-sizing: border-box;
  padding: 10px 12px;
  width: 100%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 2px 5px #00000029;
  border: 0.5px solid #e9e9e9;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  .label {
    width: max-content;
    height: 18px;
    text-align: left;
    font: normal normal 500 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    margin-right: 13px;
  }
  input {
    border: none;
    width: 150px;
    height: 31px;
    background: #e9e9e9 0% 0% no-repeat padding-box;
    border-radius: 10px;

    text-align: center;
    font: normal normal normal 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    margin-right: 8px;
  }
  .unit {
    width: max-content;
    height: 18px;
    text-align: center;
    font: normal normal normal 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #000000;
  }
`;
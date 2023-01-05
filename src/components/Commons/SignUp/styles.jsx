import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw !important;
  height: 100vh;
  margin: 0 !important;
  background: linear-gradient(205deg, #3a58f5, #3a58f5);
  .box {
    width: 100%;
    display: flex;
  }

  .alignCenter {
    align-items: center;
  }
  .justifyCenter {
    justify-content: center;
  }
  .alignEnd {
    align-items: flex-end;
  }
  .justifyEnd {
    justify-content: flex-end;
  }

  .column {
    flex-direction: column;
  }

  .inputBox {
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .checkBoxWrap {
    width: 100%;
    height: 100px;
    display: flex;
    margin: 0px 10vw;
    flex-direction: column;
  }
  .buttonWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text_ {
      width: 100%;
      height: 31px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      // font-family:Roboto;
      font-size: 14px;
    }
  }
  .label {
    width: 100%;
    font-size: 12px;
    font-family: Circular Std Medium;
    color: white;
  }
`;

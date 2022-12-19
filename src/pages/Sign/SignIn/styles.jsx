import styled from "styled-components";
// margin: auto;
// max-width: 1920px;
// width: max-content;

export const Wrapper = styled.div`
  max-width: 100vw !important;
  width: 100vw;
  height: 100vh;
  margin: auto !important;
  padding: 0;
  background: linear-gradient(205deg, #3A58F5, #3A58F5);

  .box {
    width: 100%;
    display: flex;
    box-sizing: border-box;
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
  .checkBoxRow {
    display: flex;
    box-sizing: border-box;
  }
  .inputBox {
    height: 122px;
    margin-bottom: 10px;
  }
  .login_button_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Warning = styled.div`
  display: ${(props) => (props.warning === true ? "block" : "none")};
  width: 100%;
  font-family: Roboto;
  font-weight: Regular;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  animation: ${(props) =>
    props.warning === true ? "transHeightin 1s ease-in-out" : "none"};
  animation-fill-mode: forwards;
  @keyframes transHeightin {
    0% {
      height: 16px;
    }
    100% {
      height: 26px;
    }
  }
  @keyframes transHeightout {
    0% {
      height: 26px;
    }
    100% {
      height: 16pxpx;
    }
  }
`;

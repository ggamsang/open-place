import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${window.innerWidth}px;
  height: 100vh;
  margin: 0 !important;
  padding: 0;
  background: linear-gradient(205deg, #3a58f5, #3a58f5);
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

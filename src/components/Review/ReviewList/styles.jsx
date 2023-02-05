import styled from "styled-components";

export const ReviewText = styled.div`
  text-align: center;
  font: normal normal 900 44px/52px Pretendard;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 28px;
`;

export const ReviewDiv = styled.div`
  width: ${window.innerWidth - 215}px;
  height: 430px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 6px 7px 9px #00000029;
  border: 1px solid #979797;
  border-radius: 32px;
  opacity: 1;
  display: wrap;
  // flex-direction: column;
  flex-wrap: flex;
  justify-content: space-between;
  overflow: auto;
  align-items: center;
  box-sizing: border-box;
  padding: 0 54px;
  .test {
    width: 322px;
    border: 1px solid red;
  }
`;
export const ReviewPreviewImageWrapper = styled.div`
  margin-left: 15px;
  width: 322px;
  position: relative;
  .no-image {
    position: absolute;
    color: #fff;
  }
`;
export const PreviewLength = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(10px, -10px);
  text-align: center;
  font: normal normal medium 2rem/2rem Pretendard;
  letter-spacing: 1.25px;
  color: #ffffff;
  text-transform: uppercase;
  width: 52px;
  background: #6200ee 0% 0% no-repeat padding-box;
  border-radius: 24px;
  padding: 10px 0;
`;
export const ReviewPreviewImage = styled.div`
  width: 322px;
  height: 322px;
  background: #ccc;
  border-radius: 20px;
  // background: transparent url('img/1 14.png') 0% 0% no-repeat padding-box;
  box-shadow: 0px 30px 50px #0000001a;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center center;
`;

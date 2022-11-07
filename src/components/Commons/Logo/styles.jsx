import styled from "styled-components";

export const Wrapper = styled.div`
  width: 259px;
  height: 309px;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: 259px;
    height: 259px;
    object-fit: contain;
  }
  .text {
    overflow-wrap: break-word;
    text-align: center;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 32px;
    color: white;
    text-shadow: 5px 5px 6px #00000029;
  }
`;
export const Wrapper_image = styled.div`
  width: 207px;
  height: 207px;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: 207px;
    height: 207px;
    object-fit: contain;
  }
  .text {
    overflow-wrap: break-word;
    text-align: center;
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 32px;
    color: white;
    text-shadow: 5px 5px 6px #00000029;
  }
`;
export const Wrapper_small = styled.div`
  // *{border: 1px dashed white;}
  width: 137px;
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .text {
    position: absolute;
    bottom: 0px;
    left: 20px;
    font-family: Montserrat;
    font-size: 16px;
    color: white;
    text-shadow: 5px 5px 6px #00000029;
  }
`;

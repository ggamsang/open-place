import styled from "styled-components";
import LogoFile from "../../imgs/OWD_logo_small.png";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent linear-gradient(241deg, #da1313 0%, #014fff 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 259px;
  height: 259px;
  background-position: center center;
  background-image: url('${LogoFile}');
  background-color: transparent;
  background-repeat: no-repeat;
  box-sizing: padding-box;
  opacity: 1;
`;

import React from 'react';
import styled from 'styled-components';
import Logo from "source/OWD_logo_small.png";

const Wrapper = styled.div`
    width: 100wh; // 1920px;
    height: 100vh; // 1080px;
    background: transparent linear-gradient(241deg, #DA1313 0%, #014FFF 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    justify-content: center;
    .logo {
        margin: auto;
        width: 259px;
        height: 259px;
    }
`;

const Loading = () => {
    return (<Wrapper>
        <img className="logo" src={Logo} />
    </Wrapper>)
}
export default Loading;
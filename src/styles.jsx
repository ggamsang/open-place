import styled from "styled-components";

export const Wrapper = styled.div`
*{border: 1px dashed gray;}
    width: 100%;
    max-width: 1920px;
    margin: auto;

    position: relative;
    
    .tip {
        z-index: 999;
        position: absolute;
        top: 5%;
        left: 0px;
        width: 100%;
        height: 15px;
        font-size: 15px;
        text-align: center;
        color: white;
        background-color: rgba(122, 122, 122, 0.9);
    }
`;
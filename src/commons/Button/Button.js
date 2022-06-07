import styled from 'styled-components';
export const Button = styled.button`
    margin: auto;
    width: 155px;
    height: 35px;
    background: ${prop => prop.active ? "#FF0000" : "#707070"};
    box-shadow: 2px 2px 3px #00000019;
    border-radius: 10px;
    border: none;
    outline: none;
    display: flex;
    .text {
    margin: auto;
    width: max-content;
    height: 18px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
    }
`;
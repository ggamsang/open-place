import styled from 'styled-components';
import DmBtn from '../../../imgs/DmButton.png';


export const Container = styled.div`
    position: fixed;
    bottom: 15px;
    width: 100%;
    height: 42.25px;
    display: flex;
    // margin-top: 30.77px;
    // margin-bottom: 200px;
`;

export const DmButton = styled.div`
    width: 155.63px;
    height: 42.25px;
    position: relative;
    // text-align: right;
    display: flex;
    margin-left: 1737.38px;
`;

export const DmButtonImg = styled.img.attrs({
    src: DmBtn,
})`
    width: 155.63px;
    height: 42.25px;
    // position: absolute;
    // right: 27px;
`;

export const DmButtonText = styled.div`
    font: normal normal 900 18px/21px Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    right: 41.63px;
    top: 11.63px;
    position: absolute;
`;
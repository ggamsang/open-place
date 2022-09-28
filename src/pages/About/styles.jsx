import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    min-width: 1300px;
`;

export const Wrapper = styled.div`
    display: flex;
    // align-items: center;
`;

export const Menu = styled.div`
    width: 329px;
    height: 261px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #0000001A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    margin-top: 85px;
    margin-right: 14px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div:nth-child(1){
        font: normal normal bold 19px/22px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        // margin-top: 38px;
        margin-bottom: 28px;
    }

    div:nth-child(3){
        font: normal normal normal 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-top: 28px;
        margin-bottom: 28px;
    }

    div:nth-child(5){
        font: normal normal normal 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-top: 27px;
        // margin-bottom: 38px;
    }
`;

export const HorizonLine = styled.div`
    width: 240px;
    height: 2px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
    // border: 2px solid #E9E9E9;
    opacity: 1;
`;

export const PostBox = styled.div`
    width: 1433px;
    height: 1099px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #00000029;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    margin-top: 85px;
    margin-bottom: 500px;

    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

    div:nth-child(1){
        font-family: "Pretendard-medium";
        font-size: 36px;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-top: 28px;
    }

    div:nth-child(2){
        width: 1240px;
        height: 2px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        // border: 2px solid #E9E9E9;
        opacity: 1;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    div:nth-child(3){
        width: 1124px;
        font-family: "Pretendard-normal";
        font-size: 24px;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
`;


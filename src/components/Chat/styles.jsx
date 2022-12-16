import styled from 'styled-components';

export const UserChat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-bottom: 58px;
`;

export const UserImg = styled.div`
    width: 91px;
    height: 90px;
    background: #000000 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 30px #00000029;
    border-radius: 16px;
    opacity: 1;
`;

export const UserInfo = styled.div`
    display: block;
    margin-left: 13px;
`;

export const UserNameAndDate = styled.div`
    display: flex;

    span:nth-child(1){
        font: normal normal normal 21px/25px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }

    span:nth-child(2){
        font: normal normal normal 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 59px;
    }
`;

export const UserNotification = styled.div`
    width: 223px;
    font: normal normal medium 15px/25px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-top: 9px;
`;
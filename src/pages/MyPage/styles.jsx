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
    align-items: center;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ProfileBox = styled.div`
    width: 329px;
    height: 372px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #4141411A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    margin-top: 87px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        font-size: 34px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-top: 10px;
    }
`;

export const ProfileImg = styled.div`
    width: 284px;
    height: 284px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
    margin-top: 22px;
`;

export const ProfileInfo = styled.div`
    width: 1433px;
    height: 373px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #0000001A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    margin-top: 87px;
    margin-left: 27px;
    display: flex;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 33px;
    margin-left: 32px;
`;

export const ScoreAndReview = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
    margin-left: 160px;
`;

export const Score = styled.div`
    width: 152px;
    height: 126px;
    font: normal normal 600 105px/126px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;

`;

export const Review = styled.div`
    width: 159px;
    height: 67px;
    /* UI Properties */
    border: 1px solid #000000;
    border-radius: 4px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        font: normal normal medium 31px/36px Pretendard;
        font-family: "Pretendard-medium";
        font-size: 31px;
        letter-spacing: 2.17px;
        color: #000000;
        text-transform: uppercase;
        opacity: 1;
    }
`;

export const ScoreBox = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: center;
    justify-content: center;
    margin-left: 39px;
    padding-top: 30px;
`;

export const Score5 = styled.div`
    display: flex;
    align-items: center;
    // justify-content: center;
    margin-bottom: 30px;
    position: relative;

    > span {
        font-family: "Pretendard-medium";
        font-size: 20px;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        position: absolute;
        left: 300px;
    }
`;

export const ScoreGrey = styled.div`
    width: 294px;
    height: 2px;
    border: 1px solid #e2e2e2;
    background: #e2e2e2 0% 0% no-repeat padding-box;
    border-radius: 25px;
    opacity: 1;
    position: absolute;
`;

export const ScoreCircleIcon1 = styled.div`
    width: 10px;
    height: 10px;
    background: #E4390F 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
    position: absolute;
`;

export const ScoreCircleIcon2 = styled.div`
    width: 10px;
    height: 10px;
    background: #E4390F 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
    position: absolute;
    left: 150px;
`;

export const ScoreRed = styled.div`
    width: 150px;
    height: 2px;
    border: 1px solid #E4390F;
    background: #E4390F 0% 0% no-repeat padding-box;
    // border-radius: 25px;
    opacity: 1;
    position: absolute;
    left: 5px;
`;

export const DateInfo = styled.div`
    width: 154px;
    height: 44px;
    background: #c9c9c9 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    // backdrop-filter: blur(30px);
    // -webkit-backdrop-filter: blur(30px);
    margin-left: 525px;
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

`;

export const EditProfileBtn = styled.div`
    width: 346px;
    height: 78px;
    transform: matrix(-1, 0, 0, -1, 0, 0);
    background: transparent linear-gradient(270deg, #8743FF 0%, #4136F1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 30px #1466CC29;
    border-radius: 16px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    // margin-top: 33px;
    // margin-left: 32px;

    > span {
        font: normal normal 600 35px/14px Pretendard;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        -webkit-transform: rotate(180deg);
    }
`;

export const RegisterBtn = styled.div`
    width: 346px;
    height: 78px;
    background: transparent linear-gradient(270deg, #4359FF 0%, #36F17E 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 30px #1466CC29;
    border-radius: 16px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    // margin-left: 32px;

    > span {
        font: normal normal 600 35px/14px Pretendard;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
`;

export const CheckNotificationBtn = styled.div`
    width: 346px;
    height: 78px;
    background: transparent linear-gradient(270deg, #4367FF 0%, #FF9A43 0%, #F1369B 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 30px #1466CC29;
    border-radius: 16px;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    // margin-left: 32px;

    > span {
        font: normal normal 600 35px/14px Pretendard;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
`;

export const CategoryBox = styled.div`
    width: 329px;
    height: 489px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #0000001A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    margin-top: 51px;
    margin-bottom: 31px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
        font-size: 19px;
        font-family: "Pretendard-normal";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-bottom: 27px;

        &:nth-child(1){
            margin-top: 40px;
        }

        &:nth-child(3){
            font-size: 20px;
            font-family: "Pretendard-bold";
        }
    }

    > div {
        width: 240px;
        height: 2px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        // border: 2px solid #E9E9E9;
        opacity: 1;
        margin-bottom: 27px;
    }
`;



export const SortAs = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 11px;

    div:nth-child(1){
        font-family: "Pretendard-medium";
        font-size: 25px;
        letter-spacing: 0px;
        color: #FF0000;
        opacity: 1;
        margin-right: 36px;
    }

    div:nth-child(2){
        font-size: 25px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
`;

export const ExpList = styled.div`
    width: 1433px;
    // height: 480px;
    margin-left: 27px;
    display: flex;
    align-items: flex-end;
    padding-left: 2.43px;
`;

export const ProfileCardDiv = styled.div`
    margin-right: 103px;
`;

export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(112, 112, 112, 0.5);
`;

export const ModalContainer = styled.div`
    width: 1046px;
    height: 471px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #00000029;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    // z-index: 999;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalTitle = styled.div`
    // font: normal normal medium 18px/21px Pretendard;
    font-size: 18px;
    font-family: "Pretendard-medium";
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
`;

export const ModalHorizonLine = styled.div`
    width: 903px;
    height: 2px;
    background: #EFEFEF;
    // border: 2px solid #EFEFEF;
    opacity: 1;
    margin-top: 12px;
    margin-bottom: 14px;
`;

export const AddThumbnail = styled.div`
    width: 329px;
    height: 349px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #0000001A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 31px;

    div:nth-child(2){
        font-size: 15px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-top: 11px;
    }
`;

export const ThumbnailImg = styled.div`
    width: 284px;
    height: 284px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
`;

export const NicknameDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div:nth-child(1){
        font-size: 15px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-right: 102px;
    }

`;

export const InputBox = styled.div`
    width: 431px;
    height: 31px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
    border-radius: 22px;
    opacity: 1;
    display: flex;
    // justify-content: center;
    align-items: center;

    > span{
        font-size: 15px;
        font-family: "Pretendard-normal";
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
        margin-left: 20px;
    }
    
`;

export const PasswordDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 29px;

    div:nth-child(1){
        font-size: 15px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-right: 89px;
    }
`;

export const PasswordCheckDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 29px;
    margin-bottom: 148px;

    div:nth-child(1){
        font-size: 15px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-right: 60px;
    }
`;

export const ModalButtons = styled.div`
    width: 572px;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > button{
        font-size: 18px;
        font-family: "Pretendard-bold";
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        outline: 0;
        cursor: pointer;


        &:nth-child(1){
            width: 150px;
            height: 40px;
            background: #848484 0% 0% no-repeat padding-box;
            opacity: 1;   
            margin-right: 25px;
        }

        &:nth-child(2){
            width: 150px;
            height: 40px;
            background: #FF0000 0% 0% no-repeat padding-box;
            opacity: 1;
        }
    }
`;
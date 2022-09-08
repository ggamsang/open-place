import styled from 'styled-components';
import '../../../../src/App.css';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
//   align-items: center;
  width: 100%;
  max-width: 1920px;
  min-width: 1300px;
`;

export const AddExpText = styled.div`
    text-align: center;
    font: normal normal bold 27px/32px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-top: 30px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    // align-items: center;
`;

export const AddThumbnail = styled.div`
    width: 457px;
    height: 510px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #efefef;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 25px;
    opacity: 1;
    // margin-left: 47px;
    margin-top: 20px;
    padding-top: 37px;

    > span {
        text-align: center;
        // font: normal normal medium 24px/29px Pretendard;
        font-family: 'Pretendard-medium';
        font-size: 24px;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
        margin-left: 136px;
        // margin-bottom: 20px;
    }
`;

export const ThumbnailImg = styled.div`
    width: 388px;
    height: 388px;
    background-color: #eeeeee;
    margin-left: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    > span {
        // font: normal normal medium 24px/29px Pretendard;
        font-size: 23px;
        font-family: 'Pretendard-medium';
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
`;


export const InfoBox = styled.div`
    width: 1329px;
    height: 665px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #efefef;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 25px;
    margin-left: 40px;
    margin-top: 20px;

    
    
`;

export const InfoBoxInnerDiv = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
`;

export const TitleDiv = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    margin-top: 46px;

    div:nth-child(1) {
        width: 197px;
        font: normal normal bold 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        margin-left: 70px;
    }

    div:nth-child(2) {
        font: normal normal normal 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
`;

// export const TitleBox = styled.div`
//     width: 197px;
//     // height: 24px;
//     text-align: left;
//     font: normal normal bold 20px/24px Pretendard;
//     letter-spacing: 0px;
//     opacity: 1;
//     color: #707070;
//     padding-left: 70px;

// `;

// export const BodyDiv = styled.div`
//     width: 1062px;
//     text-align: left;
//     font: normal normal normal 20px/24px Noto Sans KR;
//     letter-spacing: 0px;
//     color: #000000;
//     opacity: 1;

// `;

export const CategoryDiv = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    margin-top: 30px;

    div:nth-child(1) {
        width: 197px;
        font: normal normal bold 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        margin-left: 70px;
    }    
`;

export const CategoryButton1 = styled.div`
    width: 225px;
    height: 43px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    align-items: center;

    > span {
        font: normal normal normal 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 29px;
    }
`;

export const CategoryButton2 = styled.div`
    width: 225px;
    height: 43px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    align-items: center;
    margin-left: 13px;

    > span {
        font: normal normal normal 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 29px;
    }
`;

export const TagDiv = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    margin-top: 28px;

    div:nth-child(1) {
        width: 197px;
        font: normal normal bold 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        margin-left: 70px;
    }
`;

export const InputTagDiv = styled.div`
    width: 462px;
    height: 43px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    align-items: center;

    > span {
        font: normal normal 300 17px/20px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
        margin-left: 16px;
    }
`;

export const TagExamplesDiv = styled.div`
    margin-left: 267px;
    margin-top: 14px;
    display: flex;

    > div {
        width: 112px;
        height: 43px;
        background: #E9E9E96A 0% 0% no-repeat padding-box;
        border-radius: 10px;
        opacity: 1;
        margin-right: 13px;

        display: flex;
        align-items: center;
        justify-content: center;

        font: normal normal normal 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;


        &:nth-child(6) {
            width: 139px;
            height: 39px;
            border: 1.5px solid #ea3323;
        }

    }

    
`;

export const DescriptionDiv = styled.div`
    display: flex;
    // justify-content: center;
    // align-items: center;
    margin-top: 63px;

    div:nth-child(1) {
        width: 197px;
        font: normal normal bold 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        margin-left: 70px;
    }  

    div:nth-child(2) {
        width: 741px;
        height: 83px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        border-radius: 10px;
        opacity: 1;
        padding-top: 11px;
        padding-left: 15px;
        font: normal normal 300 17px/20px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
`;

export const ExpTypeDiv = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    margin-top: 63px;

    div:nth-child(1) {
        width: 197px;
        font: normal normal bold 20px/24px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        margin-left: 70px;
    }  
`;

export const InputPriceDiv = styled.div`
    width: 210px;
    height: 43px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    align-items: center;

    > span {
        font: normal normal 300 17px/20px Pretendard;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
        margin-left: 16px;
    }
`;

export const PriceDiv = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    margin-top: 49px;


    span {
        margin-left: 14px;
        font: normal normal normal 20px/24px Noto Sans KR;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
`;

export const PriceDivText = styled.div`
    width: 197px;
    font: normal normal bold 20px/24px Pretendard;
    letter-spacing: 0px;
    color: #707070;
    margin-left: 70px;  
`;

export const PriceBox = styled.div`
    width: 182px;
    height: 44px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font: normal normal normal 20px/24px Noto Sans KR;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
`;

export const AddPrice = styled.div`
    display: flex;
    margin-left: 115px;

    div:nth-child(2){
        border: 1px solid #000000;
        color: #000000;
    }
`;

export const AddPriceButton = styled.div`
    width: 97px;
    height: 49px;
    border: 1px solid #707070;
    opacity: 1;
    font: normal normal medium 20px/24px Pretendard;
    font-family: 'Pretendard-medium';
    font-size: 20px;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 29px;
`;


export const CategoryBox = styled.div`
    width: 457px;
    height: 280px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #efefef;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 25px;
    // margin-left: 47px;
    margin-top: 26px;
    padding-top: 10px;

    > p {
        text-align: center;
        font: normal normal 900 44px/52px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin: 0;
    }
`;

export const ExpDetailBox = styled.div`
    width: 1329px;
    height: 280px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #efefef;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 25px;
    margin-left: 40px;
    margin-top: 26px;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
        text-align: center;
        font: normal normal 900 44px/52px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin: 0;
    }
`;

export const AddFile = styled.div`
    width: 1786px;
    height: 665px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #efefef;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 25px;
    margin-left: 47px;
    margin-top: 68px;
    // margin-bottom: 500px;
`;

export const AddButton = styled.div`
    width: 210px;
    height: 42px;
    background: #FF0000 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 50px;
    margin-bottom: 236px;
    display: flex;
    justify-content: center;
    align-items: center;


    > span {
        text-align: center;
        font: normal normal bold 20px/24px Pretendard;
        font-size: 20px;
        font-family: 'Pretendard-bold';
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
`;

export const CancelButton = styled.div`
    width: 210px;
    height: 42px;
    background: #707070 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 50px;
    margin-bottom: 236px;
    margin-left: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
        text-align: center;
        font: normal normal bold 20px/24px Pretendard;
        font-size: 20px;
        font-family: 'Pretendard-bold';
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
`;
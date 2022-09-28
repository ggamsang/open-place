import styled from 'styled-components';
import Folder from '../../../imgs/Folder.svg';
import Document from '../../../imgs/document.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    min-width: 1300px;
`;

export const CategoryBox = styled.div`
    width: 422px;
    height: 59px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #0000001A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    margin-top: 95px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 150px;
        height: 30px;
        font: normal normal bold 15px/18px Pretendard;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1) {
            background: #FF0000 0% 0% no-repeat padding-box;
            opacity: 1;
        }

        &:nth-child(2) {
            background: #707070 0% 0% no-repeat padding-box;
            opacity: 1;
            margin-left: 20px;
        }
    }
`;

export const BoardTitleDiv = styled.div`
    width: 100%;
    display: flex;
    margin-top: 24px;
    // align-itmes: center;
    justify-content: flex-end;
    margin-right: 230px;
`;

export const FreeBoard = styled.div`
    font: normal normal bold 25px/30px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    // margin-left: 790px;
`;

export const SortAs = styled.div`
    display: flex;
    margin-left: 669px;
    align-items: center;

    > span{
        font-size: 19px;
        font-family: "Pretendard-medium";


        &:nth-child(1) {
            color: #FF0000;
        }

        &:nth-child(2) {
            color: #000000;
            margin-left: 24px;
        }
    }
`;

export const TitleUserDate = styled.div`
    width: 1698px;
    height: 47px;
    // background: transparent url('img/구성 요소 130 – 1.png') 0% 0% no-repeat padding-box;
    border: 0.30000001192092896px solid #B7B7B7;
    opacity: 1;
    margin-top: 24px;
    display: flex;
    align-items: center;

    > span {
        font: normal normal bold 17px/20px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;

        &:nth-child(1){
            margin-left: 72px;
        }

        &:nth-child(2){
            margin-left: 1268px;
        }

        &:nth-child(3){
            margin-left: 167px;
        }
    }
`;

export const HotBoard = styled.div`
    width: 1698px;
    height: 463px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0.30000001192092896px solid #B7B7B7;
    opacity: 1;
    margin-top: 13px;
`;

export const Wrapper1 = styled.div`
    display: flex;
    align-items: center;
    margin-top: 13px;

    div:nth-child(1){
        font: normal normal bold 19px/22px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 54px;
    }

    div:nth-child(2){
        width: 127px;
        height: 31px;
        background: #FF0000 0% 0% no-repeat padding-box;
        border-radius: 12px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        font: normal normal bold 17px/20px Pretendard;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;

        margin-left: 26px;
    }

    div:nth-child(3){
        width: 30px;
        height: 30px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        opacity: 1;
        border-radius: 50%;
        margin-left: 1096px;
    }

    div:nth-child(4){
        // font: normal normal medium 17px/20px Pretendard;
        font-size: 17px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 6px;
    }

    div:nth-child(5){
        font: normal normal normal 16px/19px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 94px;
    }
`;

export const Wrapper2 = styled.div`
    display: flex;
    align-items: center;
`;

export const Article = styled.div`
    width: 1306px;
    height: 340px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #0000001A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    margin-top: 33px;
    margin-left: 47px;
`;

export const ArticleBox1 = styled.div`
    display: flex;
    margin-top: 40px;
    margin-left: 100px;

    > div {
        &:nth-child(1){
            font: normal normal medium 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
        }

        &:nth-child(2){
            width: 0px;
            height: 20px;
            border: 0.5px solid #707070;
            opacity: 1;
            margin-left: 40.5px;
        }

        &:nth-child(3){
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 53.78px;

            width: 107px;
            height: 22px;
            background: #E9E9E9 0% 0% no-repeat padding-box;
            border-radius: 10px;
            opacity: 1;

            font: normal normal normal 15px/18px Noto Sans KR;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
        }
    }
`;

export const ArticleBox2 = styled.div`
    display: flex;
    margin-top: 33px;
    margin-left: 100px;

    > div {
        &:nth-child(1){
            font: normal normal medium 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
        }

        &:nth-child(2){
            width: 0px;
            height: 20px;
            border: 0.5px solid #707070;
            opacity: 1;
            margin-left: 40.5px;
        }

        &:nth-child(3){
            font: normal normal medium 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-left: 53.5px;
        }
    }
`;

export const ArticleBox3 = styled.div`
    display: flex;
    margin-top: 33px;
    margin-left: 100px;

    > div {
        &:nth-child(1){
            font: normal normal medium 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
        }

        &:nth-child(2){
            width: 0px;
            height: 20px;
            border: 0.5px solid #707070;
            opacity: 1;
            margin-left: 53.5px;
        }

        &:nth-child(3){
            font: normal normal medium 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-left: 53.5px;
        }
    }
`;

export const ArticleBox4 = styled.div`
    display: flex;
    margin-top: 31px;
    margin-left: 100px;
    

    > div {
        &:nth-child(1){
            font: normal normal medium 15px/18px Pretendard;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
        }

        &:nth-child(2){
            width: 0px;
            height: 20px;
            border: 0.5px solid #707070;
            opacity: 1;
            margin-left: 53.5px;
        }

        &:nth-child(3){
            width: 741px;
            height: 83px;
            background: #E9E9E9 0% 0% no-repeat padding-box;
            border-radius: 10px;
            opacity: 1;
            font: normal normal 300 17px/20px Pretendard;
            letter-spacing: 0px;
            color: #707070;
            opacity: 1;
            margin-left: 53.5px;
            padding-top: 10px;
            padding-left: 11px;
        }
    }
`;

export const AddCommentButton = styled.div`
    width: 150px;
    height: 30px;
    background: #848484 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    font: normal normal bold 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;

    margin-top: 112px;
    margin-left: 1139px;
`;


export const AddedFiles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid #000000;
    width: 345px;
    height: 340px;
    margin-top: 33px;

    > div:nth-child(2){
        font: normal normal 600 18px/14px Pretendard;
        font-size: 18px;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-top: 13px;
    }
`;

export const FolderIcon = styled.img.attrs({
    src: Folder,
})`
    width: 20px;
    height: 20px;
    margin-top: 20px;
`;

export const FileBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`;

export const FileIconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    border: 1px solid #B7B7B7;
    border-radius: 18px;
    margin-top: 13px;
`;

export const FileIcon = styled.img.attrs({
    src: Document,
})`
    width: 12px;
    height: 16px;
`;

export const FileName = styled.div`
    margin-left: 14px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: flex-starts;

    > div {

        &:nth-child(1){
            font: normal normal 600 13px/14px Pretendard;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
        }
    }
    
`;

export const PercentBar = styled.div`
    display: flex;
    align-items: center;
    margin-top: 9px;

    > div {
        height: 5px;
        border-radius: 25px;

        &:nth-child(1){
            width: 120px;
            position: relative;
            background-color: #e3e2e2;
        }

        &:nth-child(2){
            width: 60px;
            position: absolute;
            background-color: #707070;
        }
    }

    > span {
        font: normal normal normal 11px/14px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.6;
        margin-left: 10px;
    }
`;

export const AnswerBoard = styled.div`
    width: 1698px;
    height: 345px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0.30000001192092896px solid #B7B7B7;
    opacity: 1;
    margin-top: 17px;
`;

export const Wrapper3 = styled.div`
    display: flex;
    align-items: center;

    div:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 128px;
        height: 31px;
        border: 1px solid #FF0000;
        border-radius: 12px;
        opacity: 1;
        // font: normal normal medium 17px/20px Pretendard;
        font-size: 17px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;

        margin-top: 8.5px;
        margin-left: 145px;
    }

    div:nth-child(2){
        width: 30px;
        height: 30px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        opacity: 1;
        border-radius: 50%;
        margin-left: 1096px;
    }

    div:nth-child(3){
        // font: normal normal medium 17px/20px Pretendard;
        font-size: 17px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 6px;
    }

    div:nth-child(4){
        font: normal normal normal 16px/19px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 94px;
    }
`;

export const AnswerBox = styled.div`
    width: 1306px;
    height: 267px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 3px 3px 5px #0000001A;
    border: 0.25px solid #B7B7B7;
    border-radius: 20px;
    opacity: 1;
    position: relative;

    margin-top: 18.5px;
    margin-left: 47px;
`;

export const AddCommentButton2 = styled.div`
    width: 150px;
    height: 30px;
    background: #FF0000 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    font: normal normal bold 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    
    position: absolute;
    top: 219px;
    // margin-top: 112px;
    margin-left: 1139px;
`;

export const OtherPost = styled.div`
    width: 1698px;
    height: 47px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0.30000001192092896px solid #B7B7B7;
    opacity: 1;
    margin-top: 13px;

    display: flex;
    align-items: center;

    div:nth-child(1){
        font: normal normal bold 19px/22px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 54px;
    }

    div:nth-child(2){
        width: 30px;
        height: 30px;
        background: #E9E9E9 0% 0% no-repeat padding-box;
        opacity: 1;
        border-radius: 50%;
        margin-left: 1249px;
    }

    div:nth-child(3){
        // font: normal normal medium 17px/20px Pretendard;
        font-size: 17px;
        font-family: "Pretendard-medium";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 6px;
    }

    div:nth-child(4){
        font: normal normal normal 16px/19px Pretendard;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        margin-left: 94px;
    }
`;

export const UploadPostButton = styled.div`
    width: 195px;
    height: 39px;
    font: normal normal bold 19px/23px Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FF0000 0% 0% no-repeat padding-box;
    margin-top: 103px;
    margin-bottom: 280px;
    margin-left: 1504px;

    // div {
    //     background: #FF0000 0% 0% no-repeat padding-box;
    //     opacity: 1;
    // }
`;
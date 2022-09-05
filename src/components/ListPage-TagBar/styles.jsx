import styled, { css } from 'styled-components';
import tagbutton from '../../imgs/tagbutton.svg';
import tagbuttonmore from '../../imgs/tagbutton-more.svg';
import plusicon from '../../imgs/tagbutton-more-add.svg';
import sort1 from '../../imgs/sort1.svg';
import sort2 from '../../imgs/sort2.svg';


export const Container = styled.div`
    width: 1920px;
    height: 30px;
    margin-bottom: ${(props) => (!props.ConditionBox ? "25px" : "50px")};
    // margin-bottom: 25px;
    
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 101px;
    // margin-bottom: ${(props) => (!props.isShowCondition ? "25px" : "50px")};
    // margin-bottom: 50px;
    display: flex;
`;
// export const TagButton1 = styled.img.attrs({
//     src: tagbutton,
// })`
//     width: 77px;
//     height: 30px;
//     margin-left: 492px;
// `;

export const Tags = styled.div`
    margin-left: 492px;
    display: flex;
`;

export const TagButton = styled.div`
    width: 94px;
    height: 30px;
    margin-left: 8px;
    background: #0000001F 0% 0% no-repeat padding-box;
    border: 1px solid #FFFFFF;
    border-radius: 16px;
    opacity: 1;
    display: flex;
`;

export const TagButtonText = styled.div`
    font: normal normal normal 14px Pretendard;
    letter-spacing: 0.25px;
    color: #000000DE;
    opacity: 1;
    margin-top: 7px;
    margin-left: 12px;
`;

export const TagButtonDelete = styled.div`
    background: #00000099 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 28px;
    width: 14px;
    height: 14px;
    margin-top: 8px;
    margin-left: 3px;
`;

// export const TagButton2 = styled.div`
//     width: 94px;
//     height: 30px;
//     margin-left: 8px;
//     background: #0000001F 0% 0% no-repeat padding-box;
//     border: 1px solid #FFFFFF;
//     border-radius: 16px;
//     opacity: 1;
//     display: flex;
// `;

// export const TagButton3 = styled.img.attrs({
//     src: tagbutton,
// })`
//     width: 77px;
//     height: 30px;
//     margin-left: 8px;
// `;

// export const MoreButton = styled.div`
//     width: 92px;
//     height: 30px;
//     margin-left: 8px;
//     display: flex;
//     position: relative;
//     cursor: pointer;
// `;

// export const MoreButtonImg = styled.img.attrs({
//     src: tagbuttonmore,
// })`
//     width: 92px;
//     height: 30px;
//     // margin-left: 8px;
// `;


// export const MoreButtonPlusIcon = styled.img.attrs({
//     src: plusicon,
// })`
//     width: 24px;
//     height: 24px;
//     // margin-top: 3px;
//     // margin-left: 8px;
//     position: absolute;
//     left: 8px; 
//     top: 3px;
// `;

// export const MoreButtonText = styled.div`
//     font: normal normal medium 14px/16px Pretendard;
//     letter-spacing: 1.25px;
//     color: #FF0000;
//     text-transform: uppercase;
//     opacity: 1;
//     position: absolute;
//     left: 37px;
//     top: 7px;
// `;

export const MoreButton = styled.div`
    width: 92px;
    height: 30px;
    margin-left: 8px;
    // background: #EE00001F 0% 0% no-repeat padding-box;
    border: 1px solid #FF00001F;
    border-radius: 4px;
    opacity: 1;
    display: flex;
    text-align: center;
    align-items: center;
    cursor: pointer;

    > span {
        text-align: center;
        align-items: center;
        font: normal normal medium 14px/16px Pretendard;
        letter-spacing: 1.25px;
        color: #FF0000;
        text-transform: uppercase;
        opacity: 1;
        margin-left: 36px;
        margin-top: 2px;
    }
`;

export const MoreButtonPlusIcon = styled.img.attrs({
    src: plusicon,
})`
    width: 24px;
    height: 24px;
    // margin-top: 3px;
    margin-left: 8px;
    position: absolute;
    // left: 8px; 
    // top: 3px;
`;

export const LessButton = styled.div`
    width: 92px;
    height: 30px;
    
    // background: #EE00001F 0% 0% no-repeat padding-box;
    border: 1px solid #000000;
    border-radius: 4px;
    opacity: 1;
    display: flex;
    text-align: center;
    align-items: center;
    cursor: pointer;

    position: absolute;
    margin-left: 424px;
    visibility: hidden;
    // visibility: ${(props) => (!props.isShowCondition ? "hidden" : "visible")}
    

    > span {
        text-align: center;
        align-items: center;
        font: normal normal medium 14px/16px Pretendard;
        font-size: 14px;
        letter-spacing: 2.23px;
        color: #000000;
        text-transform: uppercase;
        opacity: 1;
        margin-left: 32px;
    }
`;


export const CancelButton = styled.div`
    width: 92px;
    height: 30px;
    margin-left: 8px;
    // background: #EE00001F 0% 0% no-repeat padding-box;
    border: 1px solid #EE0000;
    border-radius: 4px;
    opacity: 1;
    display: flex;
    text-align: center;
    align-items: center;
    cursor: pointer;

    > span {
        text-align: center;
        align-items: center;
        font: normal normal medium 14px/16px Pretendard;
        font-size: 14px;
        letter-spacing: 2.23px;
        color: #EE0000;
        text-transform: uppercase;
        opacity: 1;
        margin-left: 18px;
    }
`;



export const ConditionBox = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
`;

export const SortButton1 = styled.img.attrs({
    src: sort1,
})`
   width: 71px;
   height: 30px;
   margin-left: 700px;
`;

export const SortButton2 = styled.img.attrs({
    src: sort2,
})`
   width: 71px;
   height: 30px;
   margin-left: 16px;
`;
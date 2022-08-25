import styled from 'styled-components';
import tagbutton from '../../imgs/tagbutton.svg';
import tagbuttonmore from '../../imgs/tagbutton-more.svg';
import plusicon from '../../imgs/tagbutton-more-add.svg';
import sort1 from '../../imgs/sort1.svg';
import sort2 from '../../imgs/sort2.svg';


export const Container = styled.div`
    width: 1920px;
    height: 30px;
    position: absolute;
    top: 101px;
    margin-bottom: 25px;
    display: flex;
`;

export const TagButton1 = styled.img.attrs({
    src: tagbutton,
})`
    width: 77px;
    height: 30px;
    margin-left: 492px;
`;

export const TagButton2 = styled.img.attrs({
    src: tagbutton,
})`
    width: 77px;
    height: 30px;
    margin-left: 8px;
`;

export const TagButton3 = styled.img.attrs({
    src: tagbutton,
})`
    width: 77px;
    height: 30px;
    margin-left: 8px;
`;

export const TagButtonMore = styled.div`
    width: 92px;
    height: 30px;
    margin-left: 8px;
    display: flex;
    position: relative;
`;

export const TagButtonImg = styled.img.attrs({
    src: tagbuttonmore,
})`
    width: 92px;
    height: 30px;
    // margin-left: 8px;
`;

export const TagButtonPlusIcon = styled.img.attrs({
    src: plusicon,
})`
    width: 24px;
    height: 24px;
    // margin-top: 3px;
    // margin-left: 8px;
    position: absolute;
    left: 8px; 
    top: 3px;
`;

export const TagButtonText = styled.div`
    font: normal normal medium 14px/16px Pretendard;
    letter-spacing: 1.25px;
    color: #FF0000;
    text-transform: uppercase;
    opacity: 1;
    position: absolute;
    left: 37px;
    top: 7px;
`;

export const SortButton1 = styled.img.attrs({
    src: sort1,
})`
   width: 71px;
   height: 30px;
   margin-left: 850px;
`;

export const SortButton2 = styled.img.attrs({
    src: sort2,
})`
   width: 71px;
   height: 30px;
   margin-left: 16px;
`;
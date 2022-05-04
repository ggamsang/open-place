import React from 'react';
import styled from 'styled-components';
import img0 from "resources/sample-image-01.png";

const Wrapper = styled.div`
    margin: auto;
    margin-top: 10px;
    width: 360px;
    height: 187px;
    border-radius: 6px;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    ::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    display: flex;
    position: relative;
    .dots {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 162px;
        list-style: none;
        display: flex;
        flex-direction: row;

        li {
            width: 8px;
            height: 8px;
            border-radius: 23px;
            background-color: #ECF1F7;
            margin-right: 8px;
            :last-child {
                margin-right: 0px;
            }
        }
    }
    scroll-snap-type: x mandatory;	
	display: flex;
	-webkit-overflow-scrolling: touch;
	overflow-x: scroll;
`;
const Slide = styled.div`
    min-width: 360px;
    width: 360px;
    height: 187px;
    background-image: url(${prop => prop.url});
    color: #FFF;
    position: relative;
	scroll-snap-align: start;
	text-align: center;
    background-size: cover;
	position: relative;
    .para1 {
        position: absolute;
        left: 17px; 
        top: 65px;       
        font-family: Montserrat;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        text-align: left;
    }
    .para2 {
        width: 99.39px;
        height: 34.79px;
        position: absolute;
        top: 69.61px;
        right: 15.31px;
        border-radius: 33px;
        background-image: linear-gradient(132deg, #9672FB, #D772FB);
        font-family: Pretendard;
        font-weight: 400;
        font-size: 17px;
        line-height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const strDETAILS = "더 알아보기";
const strNewExperience1 = "매일 새로운 경험";
const strNewExperience2 = "OPEN MARKET";
class Slider extends React.Component {
    render() {
        return (<Wrapper>
            <ul className='dots'>
                <li>.</li>
                <li>.</li>
                <li>.</li>
            </ul>
            <Slide url={img0} >
                <div className='para1'>{strNewExperience1}<br />{strNewExperience2}</div>
                <div className='para2'>{strDETAILS}</div>
            </Slide>
            <Slide url={img0} />
            <Slide url={img0} />
            <Slide url={img0} />

        </Wrapper>);
    }
}
export default Slider;
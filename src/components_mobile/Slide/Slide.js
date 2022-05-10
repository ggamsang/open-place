import React from 'react';
import styled from 'styled-components';
import img0 from "resources/sample-image-01.png";
import arrow from "resources/arrow-right.png";

const WIDTH = 335
const Wrapper = styled.div`
    margin: auto;
    margin-top: 10px;
    width: ${WIDTH}px;
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

    .pagination {
        position: fixed;
        padding: 0;
        margin: 0;
        list-style: none;
        width: 56px;
        height: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        transform: translate(255%,2000%);
        li {
            opacity: 0.9;
            background-color: #AAA;
            width: 8px;
            height: 8px;
            border-radius: 100%;
        }
        .active {
            opacity: 1;
            background-color: #ECF1F7;
        }
        // border: 1px solid green;
    }
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
        // width: 156px;
        // height: 44px;
        position: absolute;
        left: 12px;
        top: 113px;       
        font-family: Montserrat;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        text-align: left;
    }
    .para2 {
        position: absolute;
        top: 116px;
        right: 30px;
        font-family: Pretendard;
        font-weight: 500;
        font-size: 17px;
        line-height: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .arrow {
            width: 100%;
            display: flex;
            img {
                margin-top: 2px;
                margin-left: auto;
                width: 18px;
                height: 11px;
            }
        }
    }
`;

const strDETAILS = "더 알아보기";
const strNewExperience1 = "매일 새로운 경험";
const strNewExperience2 = "OPEN MARKET";
class Slider extends React.Component {
    getwidth = () => {
        const node = document.getElementById('slide');
        console.log(node.scrollLeft);
    }
    render() {
        return (
            <Wrapper id="slide" onClick={() => this.getwidth()}>

                <Slide url={img0}>
                    <div className='para1'>
                        {strNewExperience1}<br />
                        {strNewExperience2}
                    </div>
                    <div className='para2'>
                        {strDETAILS}
                        <div className="arrow">
                            <img alt="arrow-button" src={arrow} />
                        </div>
                    </div>
                </Slide>
                <Slide url={img0} />
                <Slide url={img0} />
                <Slide url={img0} />

                <ul className='pagination'>
                    <li className='active'>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                </ul>
            </Wrapper>);
    }
}
export default Slider;
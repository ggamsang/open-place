import React from 'react';
import styled from 'styled-components';
import img0 from "resources/sample-image-01.png";
import arrow from "resources/arrow-right.png";
import { WIDTH } from "constant"

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
    scroll-snap-type: x mandatory;	
	display: flex;
	-webkit-overflow-scrolling: touch;
	overflow-x: scroll;
`;
const PaginationDots = styled.ul`   
    position: absolute;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 56px;
    height: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    left: 50%;
    cursor: pointer;
    transform: translate(-50%, -210%);
    z-index: 70;
    
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
`
const Slide = styled.div`
    min-width: ${WIDTH}px;
    width: 100%;
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
const strNewExperience2 = "OPEN PLACE";

class Slider extends React.Component {
    pages = ['', '', '', '']
    constructor(prop) {
        super(prop);
        this.state = {
            active: 1
        }
    }

    goto = async (slide) => {
        const node = document.getElementById('slide');
        await node.scrollTo({ left: slide * WIDTH, behavior: 'smooth' });
    }

    handleScroll = () => {
        const node = document.getElementById('slide');
        // if (node.scrollLeft % WIDTH === 0) { }
        this.setState({ active: Math.floor(node.scrollLeft / WIDTH) + 1 });
    }

    render() {
        return (<div style={{ position: "relative" }}>

            <Wrapper id="slide" onScroll={() => this.handleScroll()} >
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
                <Slide url={'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'} />
                <Slide url={img0} />
                <Slide url={img0} />

            </Wrapper>

            <PaginationDots>
                {this.pages.map((e, i) =>
                    <li
                        key={i}
                        onClick={() => this.goto(i)}
                        className={i + 1 === this.state.active ? 'active' : ''}>
                        {e}
                    </li>
                )}
            </PaginationDots>
        </div>);
    }
}
export default Slider;
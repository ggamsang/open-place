import React from 'react';
import styled from 'styled-components';
import iconClose from "resources/close.svg";
import iconNoti from "resources/notification.png";
const Wrapper = styled.div`
    width: 280px;
    height: 462px;
    max-width: 280px;
    z-index: 999;
    background-color: #0D0D0D;
    border-radius: 32px;

    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    transform: translate(0, -50px);

    .top {
        height: 85px;
        display: flex;
    }
    .noti {
        width: 30px;
        height: 32px;
        background-image: url(${iconNoti});
        background-size: cover;
        margin: auto;
        // margin-top: 15px;
    }
    .list {
        width: 280px;
        height: ${(53 * 5 + 20 * 4)}px;
        overflow: auto;
        padding: 0;
        margin: 0;
        .element {
            margin: auto;
            width: 247px;
            height: 53px;
            background-color: #CDCDCD;
            border-radius: 32px;
            margin-bottom: 20px;
            :last-child {
                margin-bottom: 0px;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            .title {
                width: 200px;
                inline-size: 190px; 
                overflow: hidden;
                height: 40px;
                // border: 1px solid red;
                text-align: center;
                font-family: Pretendard;
                font-weight: 500;
                font-size: 17px;
                line-height: 40px;
                color: #000000;
            }
        }
    }
`;
const CloseButton = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #F00;
    border-radius: 100%;

    .cross {
        margin: auto;
        width: 10.56px;
        height: 10.56px;
    }

`;

class Alarm extends React.Component {
    handleClose = () => {
        this.props.close();
    }
    render() {
        const { list } = this.props;

        return (
            <Wrapper>
                <div className='top'>
                    <div className='noti' > </div>
                    <CloseButton onClick={() => this.handleClose()}>
                        <img className="cross" src={iconClose} />
                    </CloseButton>
                </div>

                <ul className='list'>
                    {list.map((item, index) =>
                        <li className="element" key={index}>
                            <div className='title'>
                                {item.title}
                            </div>
                            {/* <div> {item.content} </div> */}
                        </li>)}
                </ul>

            </Wrapper>
        );
    }
}

export default Alarm;
import React from 'react';
import styled from 'styled-components';
import noimage from "resources/sample-image-01.png";
import StarRating from "commons/StarRating";
import Tags from "commons/Tags";
import { resolution } from 'commons/resolution';
import Heart from "source/Iconly-heart-white.svg";
import Message from "source/Iconly-message-white.svg";

const Wrapper = styled.div`
    width:${resolution(360)}px;
    height:${resolution(290)}px;

    .thumbnail{
        display:flex;
        flex-direction:column;
        justify-content:flex-end;
        box-sizing:border-box;
        padding:32px 16px;
        width:${resolution(350)}px;
        height:${resolution(210)}px;
        border-radius:0px 20px 20px 0px;
        background-image: url(${prop => prop.bg});
        background-size:cover;
        .row{
            display:flex;
            align-items:center;
            .text{font: normal normal bold 12px/15px Montserrat;color:white;margin-right:8px;}
            .icon{width:${resolution(18)}px;height:${resolution(18)}px;}    
        }
    }
    .summary{
        display:flex;
        align-items:center;
        box-sizing:border-box;
        padding:20px 32px;
        .face{
            width:${resolution(36)}px;
            height:${resolution(36)}px;
            background-color:#efefef;
            background-image: url(${prop => prop.face});
            border-radius:50%;
        }
        .SharerInfo{
            .user{font: normal normal bold 16px/19px Pretendard;}
            .cal{font: normal normal normal 12px/15px Pretendard;opacity: 0.56;}
        }
    }
`;

class Sharer extends React.Component {
    render() {
        const {
            url,
            user,
            like,
            message,
            cal,
            face
        } = this.props;
        console.log(this.props);
        return (
            <Wrapper bg={url || noimage} onClick={()=>window.location.href="/SharerDetail/1"}>
                <div className='thumbnail'>
                    <div className='row'>
                        <div className='text'>{message}</div>
                        <img src={Message} className='icon' style={{marginRight:"20px"}}/>
                        <div className='text' >{like}</div>
                        <img src={Message} className='icon'/>
                    </div>
                </div>
                <div className='summary'>
                    <img src={face} className='face' style={{marginRight:"20px"}}/>
                    <div className='SharerInfo'>
                        <div className='user'>{user}</div>
                        <div className='cal'>{cal}</div>
                    </div>
                </div>

            </Wrapper>
        )
    }
}
export default Sharer;
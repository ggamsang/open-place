import React from 'react';
import styled from 'styled-components';
import noimage from "resources/sample-image-01.png";
import StarRating from "commons/StarRating";
import Tags from "commons/Tags";
import { resolution } from 'commons/resolution';
import heart from 'source/Iconly-heart-red.svg'

const Wrapper = styled.div`
    box-sizing:border-box;*{box-sizing:border-box;}
    height: ${resolution(165)}px;
    background-image: url(${prop => prop.bg});
    background-position: center center;
    background-size: cover;
    padding:16px 21px;
    display:flex;
    align-items:flex-end;
    .summary_wrap{width:100%;}
    .row{
        width:100%;
        display:flex;
    }
    .item-title {
        width:${resolution(132)}px;
        font: normal normal bold 16px/19px Pretendard;
        color:white;
        font-weight:bold;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .imgheart{
        width:23px;
        height:23px;
    }
    .price{
        margin-left:20px;
        width:${resolution(80)}px;
        font: normal normal bold 16px/19px Pretendard;
        color:white;
        font-weight:bold;
    }
    .like{
        font: normal normal bold 12px/15px Pretendard;
        color:white;
        font-weight:bold;
    }
    .rate-and-tags {
        display: flex;
    }
`;

class Item extends React.Component {
    constructor(props){
        super(props);
        this.onClickItem=this.onClickItem.bind(this);
    }
    onClickItem = (event) =>{
        window.location.href="/exp/1"
    }
    render() {
        const {
            url,
            title,
            score,
            tags,
            price,
            like
        } = this.props;
        
        return (
            <Wrapper bg={url || noimage} onClick={this.onClickItem}>
                <div className='summary_wrap'>
                    <div className='row' style={{justifyContent:"space-between"}}>
                        <div className='row'>
                            <div className='item-title'>{title || "title"}</div>
                            <div className='price'>{price || "58000￦"}</div>
                        </div>
                        <img className='imgheart' src={heart}/>
                    </div>
                    <div className='row' style={{justifyContent:"space-between"}}>
                        <div className='rate-and-tags' >
                                <StarRating score={score} />
                                <Tags prestyle={{ "marginLeft": "16px" }} tags={tags || ['tag1', 'tag2', 'tag3']} />
                        </div>
                        <div className='like'>{943||like}</div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
export default Item;
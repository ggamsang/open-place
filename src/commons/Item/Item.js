import React from 'react';
import styled from 'styled-components';
import noimage from "resources/sample-image-01.png";
import StarRating from "commons/StarRating";
import Tags from "commons/Tags";

const Wrapper = styled.div`
    width: 100%;
    height: 211px;
    background-image: url(${prop => prop.bg});
    background-position: center center;
    background-size: cover;
    position: relative;

    .item-title {
        position: absolute;
        width: max-content;
        height: 19px;
        top: 141px;
        left: 21px;

        font-size: 16px;
        text-align: left;
        font-weight: 700;
        font-family: Pretendard;
        color: #FFF;
        line-height: 19px;
    }
    .rate-and-tags {
        position: absolute;
        width: max-content;
        height: 14.19px;
        top: 173px;
        left: 21px;
        display: flex;
    }
`;

class Item extends React.Component {
    render() {
        const {
            url,
            title,
            score,
            tags
        } = this.props;

        return (
            <Wrapper bg={url || noimage}>
                <div className='item-title'>{title || "title"}</div>

                <div className='rate-and-tags'>
                    <StarRating score={score} />

                    <Tags prestyle={{ "marginLeft": "16px" }} tags={tags || ['tag1', 'tag2', 'tag3']} />

                </div>

            </Wrapper>
        )
    }
}
export default Item;
import React from 'react';
import styled from 'styled-components';
import star from "resources/mobiles/redstar.png";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    .text {
        margin-left: 4.21px;
        font-family: Metropolis;
        font-weight: 500;
        font-size: 11px;
        line-height: 11px;
        text-align: left;
        color: #E43903;
    }
`;
const Star = styled.div`
    background-image: url(${prop => prop.src});
    background-color: transparent;
    backgronud-position: center center;
    background-size: cover;
    width: 13px;
    height: 13px;
    max-width: 13px;
    max-height: 13px;

`;
class StarRating extends React.Component {
    render() {
        return (<Wrapper>
            <Star src={star} />
            <div className='text'>{this.props.score}</div>
        </Wrapper>)
    }
}
export default StarRating;
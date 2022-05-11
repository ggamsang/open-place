import React from 'react';
import styled from "styled-components";

const Wrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    li {
        font-size: 12px;
        line-height: 12px;
        font-family: Pretendard;
        font-weight: 300;
        color: #FFF;
        text-aglinment: left;
        margin-left: 4px;
        :first-child {
            margin-left: 0px;
        }
    }
`;

class Tags extends React.Component {
    render() {
        const { tags, prestyle } = this.props;
        return (
            <Wrapper style={prestyle}>
                {tags.map((tag, indx) =>
                    <li key={indx} className='tag'>
                        {tag}
                        {indx < tags.length - 1 &&
                            <font color="#E43903"> ·</font>}
                    </li>)}
            </Wrapper>
        )
    }
}
export default Tags;
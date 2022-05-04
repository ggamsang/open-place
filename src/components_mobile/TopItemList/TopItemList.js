import React from 'react';
import styled from 'styled-components';
import TopItemListContainer from 'containers/TopItemListContainer';

const Wrapper = styled.div`
    margin-top: 5px;
`;
const Title = styled.div`
    margin: auto;
    width: max-content;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #4A4B4D;
    text-align: left;

    margin-bottom: 5px;
`;

const strTopItemList = "인기아이템";

class TopItemList extends React.Component {
    render() {
        return (<Wrapper>
            <Title>{strTopItemList}</Title>
            <TopItemListContainer />
        </Wrapper>);
    }
}
export default TopItemList;
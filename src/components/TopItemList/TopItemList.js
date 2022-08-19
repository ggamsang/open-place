import React from 'react';
import styled from 'styled-components';
import TopItemListContainer from 'containers/TopItemListContainer';

const Wrapper = styled.div`
    margin-top: 5px;
    .list_wrap{
        width:100%;
        box-sizing:border-box;
        padding:0px 20px;
    }
`;
const Title = styled.div`
    margin: auto;

    padding: 18px 0px 9px 0px;

    width: max-content;
    // width: 152px;
    height: 52px;
    text-align: center;
    font: normal normal 900 44px/52px Pretendard;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
`;

const strTopItemList = "탑리스트";

class TopItemList extends React.Component {
    render() {
        return (<Wrapper>
            <Title>{strTopItemList}</Title>
            <div className='list_wrap'>
            <TopItemListContainer />
            </div>
        </Wrapper>);
    }
}
export default TopItemList;
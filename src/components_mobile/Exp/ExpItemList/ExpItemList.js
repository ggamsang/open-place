import React from 'react';
import styled from 'styled-components';
import ScrollList from 'components_mobile/Commons/ScrollList';
import Search from 'components_mobile/Commons/Search';
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
// import { WIDTH } from "constant";
import { goto } from 'smallfuncs';

const Wrapper = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
       display: none;
    }
    margin: auto;
    .blanker {
        height: 44px;
    }
    .gradient {
        width: 100%;
        background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
        background-size: 200% 200%;
        background-position: top right;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            margin: auto;
            margin-top: 11px;
            color: white;
            width: max-content;
            text-align: center;
            font-family: Pretendard;
            font-weight: bold;
            font-size: 20px;
            line-height: 20px;
        }
        .tagBox{
            width:100%;
            box-sizing:border-box;
            padding:12px 20px 12px 20px;
            .tagList{
                box-shadow: 2px 2px 5px #00000029;
                width:100%;
                height:66px;
                display:flex;
                justify-content:center;
                align-items:center;
                background-color:white;
                border-radius:10px;
            }
        }
    }
    .rows {
        width:100%;
        box-sizing:border-box;
        padding:0px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .search-list-wrapper {
        width:100%;
     }
`;

class ExpItemList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        const { list } = this.props;

        return (<Wrapper>

            <div className='gradient'>
                <div className='blanker'>&nbsp;</div>
                <Search />
                <div className='title'>태그리스트</div>
                <div className='tagBox'>
                    <div className='tagList'>

                    </div>
                </div>
            </div>

            <div className='rows' style={{marginTop:"15px",marginBottom:"15px"}}>
                <ButtonNormal
                onClickEvent={() => goto("CREATE-ITEM")}
                width={165}
                height={35}
                radius={10}
                fontSize={15}
                bgColor={"#707070"}
                text="경험 등록하기"
                style={{marginRight:"25px"}}
                />
                <ButtonNormal
                width={165}
                height={35}
                radius={10}
                fontSize={15}
                bgColor={"#707070"}
                text="인기순"
                />
            </div>

            <div className='search-list-wrapper'>
                <ScrollList list={list} />
                {/* <TopItemListContainer /> */}
            </div>

            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>

        </Wrapper>);
    }
}
export default ExpItemList;
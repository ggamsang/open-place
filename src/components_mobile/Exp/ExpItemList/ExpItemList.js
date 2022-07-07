import React from 'react';
import styled from 'styled-components';
import ScrollList from 'components_mobile/Commons/ScrollList';
import Search from 'components_mobile/Commons/Search';
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
// import { WIDTH } from "constant";
import { goto } from 'navigator';
import Item from 'components_mobile/Commons/Item';

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
                width: 100%;
                overflow: auto;
                height:66px;
                display: flex;
                flex-wrap: wrap;
                // justify-content:center;
                // align-items:center;
                // background-color:white;
                -ms-overflow-style: none; /* Internet Explorer 10+ */
                scrollbar-width: none; /* Firefox */
                &::-webkit-scrollbar {
                    display: none;
                }
                border-radius:10px;
                .tag {
                    border-radius: 5px;
                    font-family: Pretendard;
                    background-color: white;
                    width: max-content;
                    height: 0.85rem;
                    font-size: 0.85rem;
                    margin: 5px;
                    padding: 3px 5px;
                }
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
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.getList(0);
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.sort !== prevProps.sort || this.props.cate1 !== prevProps.cate1 || this.props.cate2 !== prevProps.cate2 || this.props.cate3 !== prevProps.cate3 || this.props.keyword !== prevProps.keyword) {
    //       this.getList(0);
    //     }
    // }
    getList = (page) => {
        
        return this.props.getExpListRequest(page,this.props.type, this.props.sort, this.props.keyword);
    }
    render() {
        console.log(this.props)
        const { list_added } = this.props;
        const tags = new Set();
        list_added && list_added.map(item => {
            item.taglist &&
                item.taglist
                    .replace("[", "")
                    .replace("]", "")
                    .split(",")
                    .map(word => tags.has(word) == false && tags.add(word))
        });
        console.log(tags);
        return (<Wrapper>

            <div className='gradient'>
                <div className='blanker'>&nbsp;</div>
                <Search />
                <div className='title'>태그리스트</div>
                <div className='tagBox'>
                    <div className='tagList'>
                        {Array.from(tags).map(word =>
                            <div className='tag' key={word}>{word}</div>)}
                    </div>
                </div>
            </div>

            <div className='rows' style={{ marginTop: "15px", marginBottom: "15px" }}>
                <ButtonNormal
                    onClickEvent={() => goto("CREATE-ITEM")}
                    width={165}
                    height={35}
                    radius={10}
                    fontSize={15}
                    // bgColor={this.props.userInfo ? "#F00" : "#707070"}
                    bgColor={"#707070"}
                    text="경험 등록하기"
                    style={{ marginRight: "25px" }}
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
                <ScrollList list={this.props.list} list_added={this.props.list_added} getList={this.getList} ListComponent={Item} />
                {/* <TopItemListContainer /> */}
            </div>

            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>

        </Wrapper >);
    }
}
export default ExpItemList;
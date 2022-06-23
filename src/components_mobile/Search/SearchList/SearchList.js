import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components_mobile/Commons/Search/SearchForm';
import ScrollList from 'components_mobile/Commons/ScrollList';
// import { WIDTH } from "constant";

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
        height: 100px;
        background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
        background-size: 200% 200%;
        background-position: top right;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            margin: auto;
            margin-top: 18px;
            color: white;
            width: max-content;
            text-align: center;
            font-family: Pretendard;
            font-weight: 500;
            font-size: 20px;
            line-height: 20px;
        }
    }
    .rows {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .margin-top-9 { margin-top: 9px; }
    .margin-top-11 { margin-top: 11px; }

    .search-list-wrapper { }
`;
const Button = styled.button`
  margin: auto;
  width: 155px;
  height: 35px;
  background: ${prop => prop.active ? "#FF0000" : "#707070"};
  box-shadow: 2px 2px 3px #00000019;
  border-radius: 10px;
  border: none;
  outline: none;
  display: flex;
  .text {
    margin: auto;
    width: max-content;
    height: 18px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #FFFFFF;
  }
  .rows {
      display: flex;
      flex-direction: rows;
  }
`;

const dummy = [
    { type: "item", url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ", title: "맛있는 디저트 만들기", score: 4.9, tags: ["카페마스터", "디저트",] },
];

class SearchList extends React.Component {
    render() {
        const { list } = this.props;
        return (<Wrapper>

            <div className='gradient'>
                <div className='blanker'>&nbsp;</div>
                <SearchForm keyword={this.props.keyword} />
            </div>

            <div className='rows margin-top-9'>
                <Button active>
                    <div className='text'>카테고리</div>
                </Button>
                <Button>
                    <div className='text'>최신순</div>
                </Button>
            </div>

            <div className='search-list-wrapper margin-top-11'>
                <ScrollList list={list} />
                {/* <TopItemListContainer /> */}
            </div>

            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>

        </Wrapper>);
    }
}
export default SearchList;
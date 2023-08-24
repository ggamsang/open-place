import React from 'react';
import styled from 'styled-components';
import SearchForm from 'mobile/components_mobile/Commons/Search/SearchForm';
import ScrollList from 'mobile/components_mobile/Commons/ScrollList';
import SortButton from 'mobile/components_mobile/Commons/SortButton/SortButton';
import CategoryButton from 'mobile/components_mobile/Commons/CategoryButton/CategoryButton';
import { goto } from 'navigator';
import { GetCATEGORY, GetSORTYPE } from 'mobile/components_mobile/Commons/Define';
import Item from 'mobile/components_mobile/Commons/Item';
// import { WIDTH } from "constant";

const Wrapper = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
       display: none;
    }
    box-sizing: border-box;
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
        box-sizing:border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding:0px 20px;
    }

    .margin-top-9 { margin-top: 9px; }
    .margin-top-11 { margin-top: 11px; }

    .search-list-wrapper { width:100%;box-sizing:border-box; padding:0px 20px; }
`;

class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.keyword,
            sortType: this.props.sort,
            categoryType: this.props.category
        }
    }
    componentDidMount() {
        this.getList(0);
    }
    getList = (page) => {
        console.log(page,this.state.categoryType)
        return this.props.getExpListRequest(page,GetCATEGORY(this.state.categoryType), 
                                            GetSORTYPE(this.state.sortType), this.state.keyword);
    }
    render() {
        return (<Wrapper>

            <div className='gradient'>
                <div className='blanker'>&nbsp;</div>
                <SearchForm keyword={this.props.keyword} />
            </div>

            <div className='rows margin-top-9'>
                <CategoryButton
                    style={{ paddingRight: "10px" }}
                    value={this.state.categoryType}
                    getValue={(value) => {
                        this.setState({ categoryType: value }, () => {
                            goto("SEARCH", `${this.state.categoryType}/${this.state.sortType}/${this.props.keyword}`)
                        })
                    }}
                />
                <SortButton
                    style={{ paddingLeft: "10px" }}
                    value={this.state.sortType}
                    getValue={(value) => {
                        this.setState({ sortType: value }, () => {
                            goto("SEARCH", `${this.state.categoryType}/${this.state.sortType}/${this.props.keyword}`)
                        })
                    }}
                />
            </div>

            <div className='search-list-wrapper margin-top-11'>
                <ScrollList list={this.props.list} list_added={this.props.list_added} getList={this.getList} ListComponent={Item} />
            </div>

            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>
            <div className='blanker'>&nbsp;</div>

        </Wrapper>);
    }
}
export default SearchList;
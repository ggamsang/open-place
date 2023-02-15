import React from "react";
import styled from "styled-components";
import SearchForm from "desktop/components/Commons/Search/SearchForm";
import ScrollList from "desktop/components/Commons/ScrollList";
import SortButton from "desktop/components/Commons/SortButton/SortButton";
import CategoryButton from "desktop/components/Commons/CategoryButton/CategoryButton";
import { goto } from "navigator";
import { GetCATEGORY, GetSORTYPE } from "desktop/components/Commons/Define";
import Item from "desktop/components/Commons/Item";

export const Wrapper = styled.div`
  .search-list-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;

  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;

  .text {
    margin: auto;
    width: max-content;
    height: 18px;
    text-align: center;
    font: normal normal 700 15px/18px Pretendard;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
`;
export const Categories = styled.div`
  margin: auto;
  margin-bottom: 30px;
  width: max-content;
  height: 59px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 5px #0000001a;
  border: 0.25px solid #b7b7b7;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  box-sizing: border-box;
  padding: 15px 50px;
`;
export const PlayButton = styled(Button)`
  width: 150px;
  height: 30px;
  background: #f59118 0% 0% no-repeat padding-box;
`;
export const LearnButton = styled(Button)`
  width: 150px;
  height: 30px;
  background: #9614fc 0% 0% no-repeat padding-box;
`;
export const MakeButton = styled(Button)`
  width: 150px;
  height: 30px;
  background: #2a71fc 0% 0% no-repeat padding-box;
`;

export const Sorts = styled.div`
  width: max-content;
  margin-left: auto;
  margin-right: 70px;
  margin-bottom: 30px;
`;
export const SortButtonW = styled(Button)`
  .text-sort {
    height: 30px;
    text-align: left;
    font: normal normal 500 25px/30px Pretendard;
    letter-spacing: 0px;
    color: ${(prop) => (prop.selected ? "#FF0000" : "#000000")};
    opacity: 1;
  }
`;

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.keyword,
      sortType: this.props.sort,
      categoryType: this.props.category,
      category: this.props.category || "play",
    };
  }
  componentDidMount() {
    this.getList(0);
  }
  getList = (page) => {
    console.log(page, this.state.categoryType);
    const { category } = this.state;
    return this.props.getExpListRequest(
      page,
      category,
      // GetCATEGORY(this.state.categoryType),
      GetSORTYPE(this.state.sortType),
      this.state.keyword
    );
  };
  onClickCategory = (category) => {
    // setSearchParams && setSearchParams({ category: category, sort: sort });
    // setCategory(category);
    // goto(
    //   "SEARCH",
    //   `category=${category}&sort=${this.state.sortType}&keyword=${this.props.keyword}`
    // );
    this.setState({ category: category }, () => {
      this.getList(0);
    });
  };
  render() {
    console.log(
      GetCATEGORY(this.state.categoryType),
      this.state.categoryType,
      GetSORTYPE(this.state.sortType),
      this.state.sortType,
      this.props.keyword
    );
    const { list_added } = this.props;
    console.log(this.props);
    return (
      <Wrapper>
        <div className="rows margin-top-9">
          <Categories>
            <PlayButton onClick={() => this.onClickCategory("play")}>
              <div className="text">놀기</div>
            </PlayButton>
            <LearnButton onClick={() => this.onClickCategory("learn")}>
              <div className="text">배우기</div>
            </LearnButton>
            <MakeButton onClick={() => this.onClickCategory("make")}>
              <div className="text">만들기</div>
            </MakeButton>
          </Categories>
          {/* <CategoryButton
            style={{ paddingRight: "10px" }}
            value={this.state.categoryType}
            getValue={(value) => {
              this.setState({ categoryType: value }, () => {
                goto(
                  "SEARCH",
                  `category=${this.state.categoryType}&sort=${this.state.sortType}&keyword=${this.props.keyword}`
                );
              });
            }}
          />
          <SortButton
            style={{ paddingLeft: "10px" }}
            value={this.state.sortType}
            getValue={(value) => {
              this.setState({ sortType: value }, () => {
                goto(
                  "SEARCH",
                  `category=${this.state.categoryType}&sort=${this.state.sortType}&keyword=${this.props.keyword}`
                  //   `${this.state.categoryType}/${this.state.sortType}/${this.props.keyword}`
                );
              });
            }}
          /> */}
        </div>

        <div className="search-list-wrapper ">
          {/* <ScrollList
            list={this.props.list}
            list_added={this.props.list_added}
            getList={this.getList}
            ListComponent={Item}
          /> */}
          {list_added?.length > 0 &&
            list_added.map((item) => {
              return <Item key={item.uid} {...item} />;
            })}
        </div>
      </Wrapper>
    );
  }
}
export default SearchList;

import React from "react";
import styled from "styled-components";
import SearchForm from "desktop/components/Commons/Search/SearchForm";
import ScrollList from "desktop/components/Commons/ScrollList";
import SortButton from "desktop/components/Commons/SortButton/SortButton";
import CategoryButton from "desktop/components/Commons/CategoryButton/CategoryButton";
import { goto } from "navigator";
import { GetCATEGORY, GetSORTYPE } from "desktop/components/Commons/Define";
import Item from "desktop/components/Commons/Item";

export const Wrapper = styled.div``;

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

// const Wrapper = styled.div`
//   -ms-overflow-style: none; /* Internet Explorer 10+ */
//   scrollbar-width: none; /* Firefox */
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   box-sizing: border-box;
//   margin: auto;
//   .blanker {
//     height: 44px;
//   }
//   .gradient {
//     width: 100%;
//     height: 100px;
//     background: linear-gradient(69deg, #501b1b, #655ffa, #d30e0e);
//     background-size: 200% 200%;
//     background-position: top right;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     .title {
//       margin: auto;
//       margin-top: 18px;
//       color: white;
//       width: max-content;
//       text-align: center;
//       font-family: Pretendard;
//       font-weight: 500;
//       font-size: 20px;
//       line-height: 20px;
//     }
//   }
//   .rows {
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     padding: 0px 20px;
//   }

//   .margin-top-9 {
//     margin-top: 9px;
//   }
//   .margin-top-11 {
//     margin-top: 11px;
//   }

//   .search-list-wrapper {
//     width: 100%;
//     box-sizing: border-box;
//     padding: 0px 20px;
//   }
// `;

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.keyword,
      sortType: this.props.sort,
      categoryType: this.props.category,
    };
  }
  componentDidMount() {
    this.getList(0);
  }
  getList = (page) => {
    console.log(page, this.state.categoryType);
    return this.props.getExpListRequest(
      page,
      GetCATEGORY(this.state.categoryType),
      GetSORTYPE(this.state.sortType),
      this.state.keyword
    );
  };
  onClickCategory = (category) => {
    // setSearchParams && setSearchParams({ category: category, sort: sort });
    // setCategory(category);
    goto(
      "SEARCH",
      `category=${this.state.categoryType}&sort=${this.state.sortType}&keyword=${this.props.keyword}`
    );
  };
  render() {
    console.log(
      GetCATEGORY(this.state.categoryType),
      this.state.categoryType,
      GetSORTYPE(this.state.sortType),
      this.state.sortType,
      this.props.keyword
    );
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
          <CategoryButton
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
          />
        </div>

        <div className="search-list-wrapper margin-top-11">
          <ScrollList
            list={this.props.list}
            list_added={this.props.list_added}
            getList={this.getList}
            ListComponent={Item}
          />
        </div>
      </Wrapper>
    );
  }
}
export default SearchList;

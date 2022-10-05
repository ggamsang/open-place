import React from "react";
import styled from "styled-components";
import ScrollList from "components/Commons/ScrollList";
// import SearchForm from "components/Commons/Search/SearchForm";
import ButtonNormal from "components/Commons/Button/ButtonNormal";
import { goto } from "navigator";
import Item from "components/Commons/Item";
import SortButton from "components/Commons/SortButton/SortButton";
import { GetSORTYPE } from "components/Commons/Define";
import { LiveExpItemList } from "./LiveExpItemList";
import { Categories } from "./Categories";

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
    background: linear-gradient(69deg, #501b1b, #655ffa, #d30e0e);
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
    .tagBox {
      width: 100%;
      box-sizing: border-box;
      padding: 12px 20px 12px 20px;
      .tagList {
        box-shadow: 2px 2px 5px #00000029;
        width: 100%;
        overflow: auto;
        height: 66px;
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
        border-radius: 10px;
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
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .search-list-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px;
  }
`;

class ExpItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: this.props.sort,
    };
  }
  componentDidMount() {
    this.getList(0);
  }
  getCategories = (type) => {
    alert(type);
  };
  getList = (page) => {
    return this.props.getExpListRequest(
      page,
      this.props.type,
      GetSORTYPE(this.props.sort),
      this.props.keyword
    );
  };
  render() {
    const { list_added } = this.props;
    const tags = new Set();
    list_added &&
      list_added.map((item) => {
        item.taglist &&
          item.taglist
            .replace("[", "")
            .replace("]", "")
            .split(",")
            .map((word) => tags.has(word) === false && tags.add(word));
      });
    return (
      <Wrapper>
        <Categories type={this.props.type} />

        <div className="gradient">
          <div className="blanker">&nbsp;</div>
          <div className="title">태그리스트</div>
          <div className="tagBox">
            <div className="tagList">
              {Array.from(tags).map((word) => (
                <div className="tag" key={word}>
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="rows"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {this.props.token ? (
            <ButtonNormal
              onClickEvent={() => goto("CREATE-ITEM")}
              width={165}
              height={35}
              radius={10}
              fontSize={15}
              bgColor={"#707070"}
              text="경험등록하기"
              style={{ marginRight: "25px" }}
            />
          ) : (
            <div
              style={{ width: "165px", height: "35px", marginRight: "25px" }}
            />
          )}

          <SortButton
            value={this.state.sortType}
            getValue={(value) => {
              this.setState({ sortType: value }, () => {
                const TYPE =
                  this.props.type === "play"
                    ? "PLAY"
                    : this.props.type === "learn"
                    ? "LEARN"
                    : this.props.type === "make"
                    ? "MAKE"
                    : this.props.type;
                goto(TYPE, `${this.state.sortType}/${this.props.keyword}`);
              });
            }}
          />
        </div>

        <div className="search-list-wrapper">
          {/* live game item list */}
          {this.props.type === "play" && <LiveExpItemList />}
          <ScrollList
            list={this.props.list}
            list_added={this.props.list_added}
            getList={this.getList}
            ListComponent={Item}
          />
          {/* <TopItemListContainer /> */}
        </div>

        <div className="blanker">&nbsp;</div>
        <div className="blanker">&nbsp;</div>
      </Wrapper>
    );
  }
}
export default ExpItemList;

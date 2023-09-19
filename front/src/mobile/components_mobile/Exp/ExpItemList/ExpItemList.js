import React from "react";
import styled from "styled-components";
import ScrollList from "mobile/components_mobile/Commons/ScrollList";
// import Search from 'components_mobile/Commons/Search';
import SearchForm from "mobile/components_mobile/Commons/Search/SearchForm";
import ButtonNormal from "mobile/components_mobile/Commons/Button/ButtonNormal";
// import { WIDTH } from "constant";
import { goto } from "navigator";
import Item from "mobile/components_mobile/Commons/Item";
import SortButton from "mobile/components_mobile/Commons/SortButton/SortButton";
import { GetSORTYPE } from "mobile/components_mobile/Commons/Define";

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
      tags: null,
      sortType: 2,
    };
  }
  componentDidMount() {
    this.getList(0);
  }
  getList = (page) => {
    return this.props
      .GetDesignListRequest(
        page,
        GetSORTYPE(this.state.sortType),
        this.props.cate1,
        this.props.keyword
      )
      .then(() => {
        this.GetDesignTagListRequest();
      });
  };
  GetDesignTagListRequest = () => {
    const url = `https://place.opensrcdesign.com/api/design/tags/design/${this.props.cate1}`;
    fetch(url, {
      header: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((r) => r.json())
      .then((r) => this.setState({ tags: r.detail || [] }))
      .catch(console.error);
  };
  render() {
    const { tags } = this.state;
    console.log(tags);

    return (
      <Wrapper>
        <div className="gradient">
          <div className="blanker">&nbsp;</div>
          <SearchForm />
          <div className="title">태그리스트</div>
          <div className="tagBox" style={{ overflow: "auto", padding: "5px" }}>
            {tags?.length > 0 && (
              <div
                className="tagList"
                style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
              >
                {tags.map(({ tag, uid }) => (
                  <div
                    style={{
                      height: "25px",
                      width: "max-content",
                      padding: "3px 5px",
                      borderRadius: "5px",
                      backgroundColor: "white",
                      color: "black",
                    }}
                    key={uid}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
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
            getValue={async (value) => {
              await this.setState({ sortType: value });
              this.getList(0);
            }}
          />
        </div>

        <div className="search-list-wrapper">
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
        <div className="blanker">&nbsp;</div>
      </Wrapper>
    );
  }
}
export default ExpItemList;
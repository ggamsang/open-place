import React from "react";
import styled from "styled-components";
import { GetSORTYPE } from "desktop/components/Commons/Define";
// import ExpList from "desktop/components/ExpList";
import ListPageFilter from "desktop/components/ListPageFilter";
import ScrollList from "desktop/components/Commons/ScrollList";

const ListWrapper = styled.div`
  // max-width: 1920px;
  // min-width: 1300px;
`;

const ListContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

class ExpItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: this.props.sort || "update",
      filter: { sort: "", tags: [] },
      sort: "update",
      fold: false,
    };
  }
  componentDidMount() {
    this.getList(0);
  }
  handleSortChange = async (data) => {
    await this.setState({ sort: data.sort });
    // await this.getList(0);
    return;
  };

  getList = async (page) => {
    if (page === 0) {
      await this.props.setEmptyExpListRequest();
    }

    return this.props.getExpListRequest(
      page,
      this.props.type,
      this.state.sort, // GetSORTYPE(this.state.sortType),
      this.props.keyword
    );
  };

  render() {
    const { type, tag_list } = this.props;
    const { filter, fold } = this.state;
    let tags = new Set();
    tag_list &&
      tag_list.map((item) => {
        item.taglist &&
          item.taglist
            .replace("[", "")
            .replace("]", "")
            .replace(new RegExp('"', "gi"), "")
            .split(",")
            .map((word) => tags.has(word) === false && tags.add(word));
      });
    // console.clear();
    console.log(this.props);

    return (
      <ListWrapper>
        {" "}
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            maxWidth: "50vw",
            flexWrap: "wrap",
            gap: "1rem",
            height: fold ? "25px" : "100%",
            overflow: "hidden",
          }}
        >
          {" "}
          <button onClick={() => this.setState({ fold: !this.state.fold })}>
            {fold ? "펴기" : "접기"}
          </button>
          {[...tags].sort().map((tag, index) => (
            <div
              key={index}
              style={{
                marginLeft: "5px",
                borderRadius: "5px",
                minWidth: "max-content",
                padding: "3px 7px",
                backgroundColor: "#CCC",
                color: "gray",
              }}
            >
              {tag
                .replace(new RegExp('"', "gi"), "")
                .replace("\\", "")
                .replace("\\", "")}
            </div>
          ))}
        </div>
        {/* filter */}
        <ListPageFilter
          tags={[...tags]}
          type={type}
          onSortChange={(d) => this.handleSortChange(d)}
        />
        {/* list */}
        <ListContainer>
          <ScrollList
            {...this.props}
            sort={this.state.sort}
            getList={this.getList}
          />
        </ListContainer>
      </ListWrapper>
    );
  }
}
export default ExpItemList;

import React from "react";
import styled from "styled-components";
import { GetSORTYPE } from "desktop/components/Commons/Define";
import ExpList from "desktop/components/ExpList";
import ListPageFilter from "desktop/components/ListPageFilter";

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
    };
  }
  componentDidMount() {
    this.getList(0);
  }
  handleChange = (data) => {
    // return this.props.getExpListRequest(
    //   0,
    //   this.props.type,
    //   data.sort,
    //   this.props.keyword
    // );
    // return;
    // this.setState({ sortType: data.sort }, () => {
    //   console.log(this.state);
    // });
    // this.getList(0);
    this.setState({ ...this.state.filter, ...data });
  };

  getList = (page) => {
    return this.props.getExpListRequest(
      page,
      this.props.type,
      this.state.sortType, //GetSORTYPE(this.state.sortType),
      this.props.keyword
    );
  };

  render() {
    const { list_added, type } = this.props;
    const { filter } = this.state;
    let tags = new Set();
    list_added &&
      list_added.map((item) => {
        item.taglist &&
          item.taglist
            .replace("[", "")
            .replace("]", "")
            .replace(new RegExp('"', "gi"), "")
            .split(",")
            .map((word) => tags.has(word) === false && tags.add(word));
      });
    console.log([...tags]);

    return (
      <ListWrapper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[...tags].sort().map((tag, index) => (
            <div
              key={index}
              style={{
                marginLeft: "5px",
                borderRadius: "5px",
                width: "max-content",
                padding: "3px 7px",
                backgroundColor: "#CCC",
                color: "gray",
              }}
            >
              {tag.replace(new RegExp('"', "gi"), "")}
            </div>
          ))}
        </div>
        {/* filter */}
        <ListPageFilter
          tags={[...tags]}
          type={type}
          onChange={(d) => this.handleChange(d)}
        />
        {/* list */}
        <ListContainer>
          <ExpList type={type} {...filter} />
        </ListContainer>
      </ListWrapper>
    );
  }
}
export default ExpItemList;

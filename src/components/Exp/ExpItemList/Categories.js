import React from "react";
import host from "config";
import { GET } from "constant";

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  getCategoryNameFromType = () =>
    this.props.type === "make"
      ? "만들기"
      : this.props.type === "learn"
      ? "배우기"
      : this.props.type === "play"
      ? "놀기"
      : null;

  GetList = (categoryName) => {
    const url = `${host}/defaultList/category`;
    fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        if (data) {
          const found = data.filter((cate) => cate.name === categoryName);
          if (found && found.length > 0) {
            const rootId = found[0].uid;
            const depth1 = data.filter((cate) => cate.parent == rootId);
            if (depth1 && depth1.length > 0) {
              this.setState({ list: depth1 });
            }
          }
        }
      })
      .catch((error) => alert(error));
  };
  async componentDidMount() {
    const rootCategoryName = await this.getCategoryNameFromType();
    this.GetList(rootCategoryName);
  }
  componentWillUnmount() {}
  render() {
    const { list } = this.state;

    return (
      list.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {list.map((item, index) => (
            <div
              key={index}
              style={{ width: "max-content", position: "relative" }}
            >
              {item.name}
            </div>
          ))}
        </div>
      )
    );
  }
}

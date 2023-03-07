import React from "react";
import { Pagination } from "semantic-ui-react";
// import Pagination from 'semantic-ui-react-button-pagination';
import { goto } from "navigator";
// import styled from "styled-components";
import DateFormat from "modules/DateFormat";
import * as styled from "./styles";

const dummy = [
  {
    header: "말머리",
    title: "제목예시",
    url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
    author: "국민대CRC",
    date: "2022-05-19",
  },
];
const OtherPost = ({ key, title, nickname, create_time, url }) => {
  return (
    <styled.OtherPost key={key} url={url}>
      <div>{title}</div>
      <div>
        <div className="thumb"></div>
        <div>{nickname}</div>
      </div>
      <div>{DateFormat(create_time)}</div>
    </styled.OtherPost>
  );
};
class ArticleList extends React.Component {
  componentDidMount() {
    this.props.GetTotalCount();
    this.props.GetList(0);
  }
  handleClick = async (e, page) => {
    this.props.GetTotalCount();
    await this.props.GetList(page.activePage - 1);
  };
  componentDidUpdate(props) {
    if (props.sort !== this.props.sort) {
    }
  }
  render() {
    const { articles = dummy, total } = this.props;
    console.log(this.props);

    return (
      <React.Fragment>
        <styled.TitleUserDate>
          <span>제목</span>
          <span>글쓴이</span>
          <span>작성일</span>
        </styled.TitleUserDate>

        {articles?.map((item, index) => (
          <li key={index} onClick={() => goto("READ", item.uid)}>
            <OtherPost {...item} />
          </li>
        ))}

        <styled.PaginationWrapper>
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={Math.round(total / 10 + 0.5)}
            onPageChange={(e, page) => {
              this.props.GetList(page.activePage - 1);
            }}
          />
        </styled.PaginationWrapper>
      </React.Fragment>
    );
  }
}
export default ArticleList;

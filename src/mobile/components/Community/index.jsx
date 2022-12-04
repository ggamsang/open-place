import React from "react";
import styled from "styled-components";
import ArticleListContainer from "../../containers/ArticleListContainer";
import NoticeListContainer from "../../containers/NoticeListContainer";
import { WIDTH } from "../../../constants";
import SearchForm from "../../components/Commons/Search/SearchForm";

const Wrapper = styled.div`
  .blanker {
    height: 44px;
  }
  .gradient {
    width: 100%;
    height: 131px;
    background: linear-gradient(69deg, #501b1b, #655ffa, #d30e0e);
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
  .top13 {
    margin-top: 13px;
  }
  .article-list-wrapper {
    margin: auto;
    margin-top: 10px;
    margin-bottom: 50px;
    width: ${WIDTH}px;
  }
`;
const Button = styled.button`
  margin: auto;
  width: 155px;
  height: 35px;
  background: ${(prop) => (prop.active ? "#FF0000" : "#707070")};
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
    color: #ffffff;
  }
`;

class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardType: "free" /* "notice" */,
    };
  }
  clickedButtonBSD = () => {
    this.setState({ boardType: "free" });
  };
  clickedButtonNotice = () => {
    this.setState({ boardType: "notice" });
  };

  render() {
    const { boardType } = this.state;

    return (
      <Wrapper>
        <div className="gradient">
          <div className="blanker">&nbsp;</div>
          <SearchForm />
          {boardType === "free" && <div className="title">커뮤니티</div>}
          {boardType === "notice" && <div className="title">공지사항</div>}
        </div>

        <>
          <div className="top13 rows">
            <Button
              active={boardType === "free"}
              onClick={this.clickedButtonBSD}
            >
              <div className="text">자유게시판</div>
            </Button>
            <Button
              active={boardType === "notice"}
              onClick={this.clickedButtonNotice}
            >
              <div className="text">공지사항</div>
            </Button>
          </div>

          <div className="article-list-wrapper">
            {boardType === "free" && <ArticleListContainer />}
            {boardType === "notice" && <NoticeListContainer />}
          </div>
        </>
      </Wrapper>
    );
  }
}

export default Community;

import React, { Component } from "react";
import styled from "styled-components";
import ButtonOSD from "./ButtonOSD";
import NoticeDialog from "./NoticeDialog";
import BoardDialog from "./BoardDialog";
import DueDateDialog from "./DueDateDialog";
import ExportExcelFile from "./ExportExcelFile";
// import host from "config";
import { alert } from "components/Commons/Alert/Alert";

const Wrapper = styled.div`
  display: flex;
  font-size: 16px;

  .more {
    margin-left: 25px;
    font-size: 1.2rem;
    color: #f00;
    cursor: pointer;
  }
  .new-notice {
    margin-left: 15px;
    font-size: 0.9rem;
    background-color: #f00;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-weight: 500;
    padding: 2px 5px;
    line-height: 1rem;
  }
  .bg_green {
    background-color: #1e9b79;
  }
  .bg_black {
    background-color: #000000;
  }
  .marginRight2 {
    margin-right: 38px;
  }
  .button_ {
    width: 142px;
    height: 41px;
    display: flex;
    font-size: 20px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    color: white;
    box-shadow: 8px 8px 8px #0000002b;
    cursor: pointer;
  }
  @media only screen and (min-width: 0px) and (max-width: 1366px) {
    .button_ {
      width: max-content;
      padding: 1px;
      height: 41px;
      font-size: 15px;
    }
    .marginRight2 {
      margin-right: 10px;
    }
  }
`;

const Wrapper_mobile = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  .marginLeft {
    margin-left: 10px;
  }
  .marginRight {
    margin-right: 10px;
  }
  .button {
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    font-weight: 500;
    background-color: #1e9b79;
  }
  .black {
    background-color: black;
  }
`;
const ButtonPlaceStyle = styled.button`
  border: none;
  outline: none;
  background: none;

  width: 131px;
  height: 55px;
  border: 1px solid #000000;
  border-radius: 4px;
  opacity: 1;
  // margin-top: 224px;
  // margin-left: 555px;
  display: flex;
  margin-right: 15px;
  // position: absolute;
  // right: 160px;
  // bottom: 20px;

  > span {
    width: max-content;
    margin: auto;
    font: normal normal 500 26px/30px Pretendard;
    color: #000000;
    opacity: 1;
  }
`;
export default class GroupNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dialog
      notice: false,
      board: false,
      // export
      submitStatus: false,
      data: null,
    };
  }
  closeNoticeDialog = () => {
    this.setState({ notice: false });
  };
  closeBoardDialog = () => {
    this.setState({ board: false });
  };
  getExportFile = async () => {
    this.props.loading(true);
    this.props
      .GetHaveGroupInDesignRequest(this.props.token, this.props.GroupDetail.uid)
      .then(async (data) => {
        console.log(data);
        await this.setState({
          data: data.data.map((item, index) => {
            item.problem_name = JSON.parse(item.content).name;
            return item;
          }),
        });
        this.props.loading(false);
        await this.setState({ submitStatus: true });
        setTimeout(() => {
          this.setState({ submitStatus: false });
        }, 500);
      });
  };

  render() {
    const { owner_id, GroupDetail, userInfo, token, hasProgrammingDesign } =
      this.props;
    const { /*dialog*/ notice, board, /**/ submitStatus, data, due } =
      this.state;
    const user_id = userInfo && userInfo.uid;
    console.log(this.props);
    return (
      <React.Fragment>
        {notice ? (
          <NoticeDialog
            user_id={user_id}
            group_owner_id={owner_id} //GroupDetail.user_id}
            token={token}
            group_id={this.props.id}
            open={notice}
            close={this.closeNoticeDialog}
          />
        ) : null}
        {board ? (
          <BoardDialog
            userInfo={userInfo}
            token={token}
            group_id={this.props.id}
            open={board}
            close={this.closeBoardDialog}
          />
        ) : null}

        <Wrapper>
          <ButtonPlaceStyle
            onClick={() => this.setState({ notice: true, board: false })}
          >
            <span>공지사항</span>
          </ButtonPlaceStyle>
          <ButtonPlaceStyle
            onClick={() => this.setState({ notice: false, board: true })}
          >
            <span>게시판</span>
          </ButtonPlaceStyle>
          {/* className="button_ bg_green marginRight2" */}
        </Wrapper>
      </React.Fragment>
    );
  }
}

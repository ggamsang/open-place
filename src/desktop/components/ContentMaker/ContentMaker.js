import React from "react";
import { FaRedo, FaTrash } from "react-icons/fa";
import update from "react-addons-update";
import styled from "styled-components";
import { FILE, TEXT, LINK } from "constant";
import FileController from "./FileController";
import TextController from "./TextController";

const ControllerWrap = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  border: 1px solid #707070;
  // padding: 25px;
  margin-bottom: 30px;
  .innerBox {
    display: flex;
    justify-content: space-between;
  }
  & .initWrap {
    & > ul {
      display: flex;
      // box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.1);
    }
    & > span {
      color: #878d91;
    }
  }
  &:hover {
    background-color: #fafafa;
    & .initWrap {
      & > ul {
        display: flex;
      }
      & > span {
        color: #878d91;
      }
    }
  }
  .contentWrap {
    position: relative;
    min-height: 50px;
  }
  .icons {
    position: absolute;
    right: 10%;
    top: 10%;
  }
`;
const NewController = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  font-size: 22px;
  color: black;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
`;

class AddContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: null, content: "", order: null };
  }
  addContent = async (type) => {
    if (type === FILE) {
      await this.setState({
        type,
        order: this.props.order,
        content: "",
        initClick: true,
      });
      setTimeout(() => {
        this.setState({ initClick: false });
      }, 100);
    } else {
      await this.setState({ type, order: this.props.order, content: "" });
      this.returnData();
    }
  };
  changeType = () => {
    this.props.change && this.props.change();
  };
  returnData = async (data) => {
    if (data) {
      await this.setState({
        type: null,
        order: this.props.order,
        content: "",
        initClick: false,
      });
      this.props.getValue(data);
    } else {
      if (this.props.getValue) this.props.getValue(this.state);
    }
  };
  render() {
    return (
      <ControllerWrap>
        <div className="innerBox">
          <NewController
            className="first txt"
            onClick={() => this.addContent(FILE)}
            style={{ width: "max-content", height: "29px", minWidth: "116px" }}
          >
            파일 등록하기
          </NewController>
          <NewController
            className="txt"
            onClick={() => this.addContent(TEXT)}
            style={{ width: "max-content", height: "29px", minWidth: "134px" }}
          >
            텍스트 입력하기
          </NewController>
          <NewController
            onClick={() => this.addContent(LINK)}
            style={{ width: "max-content", height: "29px", minWidth: "134px" }}
          >
            하이퍼링크 등록하기
          </NewController>

          {this.props.order === 0 ? (
            <NewController
              className="txt complecated"
              width="max-content"
              height="29px"
            >
              <div onClick={this.changeType} className="txt">
                템플릿 선택하기
              </div>
              {/* <Tip>
                <sup>&nbsp;?</sup>
                <div className="wrapper">
                  <div className="tip-txt">
                    <font style={{ color: "pink" }}>*&nbsp;</font>...</div>
                </div>
              </Tip> */}
            </NewController>
          ) : null}
        </div>
        {this.state.type === FILE && (
          <FileController item={this.state} getValue={this.returnData} />
        )}
      </ControllerWrap>
    );
  }
}

export default class ContentMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      is_project: false,
      current_order: null,
    };
  }
  onClickedTrash = async (e) => {
    const idx = parseInt(e.currentTarget?.parentNode?.parentNode?.id);
    if (idx === undefined) {
      return;
    }
    const { contents } = this.state;
    await contents.splice(idx, 1);
    const _contents = contents.map((content, i) => ({ ...content, order: i }));
    this.setState({ contents: _contents });
  };
  onClickedReset = (e) => {
    this.setState({ contents: [], is_project: false, current_order: null });
  };
  onAddValue = async (data) => {
    const { contents } = this.state;
    console.log(data);
    await contents.push(data);
    console.log(contents);
    await this.setState({ contents: contents });
    if (data.type === TEXT) {
      this.setState({ current_order: contents.length - 1 });
    }
    // let copyContent = [...this.state.contents];
    // let copyData = { ...data };

    // copyData.initClick = true;
    // for (let item of copyContent) {
    //   if (
    //     item.type === FILE &&
    //     item.fileUrl == null &&
    //     item.type === FILE &&
    //     item.content === ""
    //   ) {
    //     await copyContent.splice(item.order, 1, null);
    //   }
    // }
    // await copyContent.splice(copyData.order, 0, copyData);
    // let newContent = copyContent.filter((item) => {
    //   return item !== null;
    // });
    // newContent = await Promise.all(
    //   newContent.map(async (item, index) => {
    //     item.order = await index;
    //     delete item.target;
    //     if (item.type === FILE) delete item.initClick;
    //     if (item.order !== copyData.order) delete item.initClick;
    //     return item;
    //   })
    // );
    // await this.setState({ contents: newContent });
  };
  onChangeValue = async (data, order) => {
    this.setState({
      contents: update(this.state.contents, {
        [order]: { contents: { $set: data.content } },
      }),
    });
  };
  handleTextContBlur = async () => {
    this.setState({ current_order: null });
  };
  handleClickedTextViewer = (e) => {
    const target = e.targetNode.parentNode.parentNode.id;
    alert(target);
    return;
    this.setState({ current_order: null });
  };
  render() {
    const { contents, is_project, current_order } = this.state;

    return (
      <>
        <div
          onClick={this.onClickedReset}
          style={{
            width: "max-content",
            marginLeft: "auto",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          <FaRedo size="1.5rem" /> 작업취소
        </div>
        <div>
          {is_project ? (
            <></>
          ) : (
            <>
              {contents.map((item, order) => (
                <ControllerWrap key={order} id={order}>
                  <div className="contentWrap">
                    {item.type === FILE ? (
                      <FileController
                        item={item}
                        name="source"
                        initClick={this.state.click}
                        getValue={this.onChangeFile}
                        setController={this.setController}
                      />
                    ) : null}
                    {order},{current_order},{item.content}
                    {item.type === TEXT &&
                      (current_order == order ? (
                        <TextController
                          item={item}
                          // name={item.name}
                          // initClick={this.state.click}
                          getValue={(data) => this.onChangeValue(data, order)}
                          onBlur={this.handleTextContBlur}
                        />
                      ) : (
                        <div
                          onClick={this.j}
                          style={{ height: "10px", backgroundColor: "red" }}
                          dangerouslySetInnerHTML={{
                            __html: item.content,
                          }}
                        />
                      ))}
                    {item.type === LINK && <></>}
                    <FaTrash
                      className="icons"
                      size="1.5rem"
                      color="#E03C3C"
                      onClick={this.onClickedTrash}
                    />
                  </div>
                </ControllerWrap>
              ))}
              <AddContent getValue={this.onAddValue} order={contents.length} />
            </>
          )}
        </div>
      </>
    );
  }
}

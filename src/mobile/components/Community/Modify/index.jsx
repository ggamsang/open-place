import React, { useState, useRef, useMemo } from "react";
import styled from "styled-components";
import SearchForm from "../../../components/Commons/Search/SearchForm";
import { WIDTH } from "src/constants";
import { goto } from "../../../../utils/navigator";
import { Editor } from "../../../commons/Editor";
import { InputFile } from "../../../components/Commons/Input/InputFile";

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
const WriteForm = styled.form`
  // *{border: 1px dashed red;}
  margin: auto;
  margin-top: 14px;
  width: ${WIDTH}px;

  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 12px 12px 12px 12px;
    background-color: #ffffff;
    border: 1px solid #e9e9e9;
    border-radius: 15px;
    box-shadow: 2px 3px 5px -3px rgba(0, 0, 0, 0.65);
    -webkit-box-shadow: 2px 3px 5px -3px rgba(0, 0, 0, 0.65);

    input {
      background-color: #e9e9e9;
      width: 275px;
      height: 31px;
      border: none;
      border-radius: 10px;
      box-sizing: border-box;
    }
    textarea {
      display: flex;
      margin: auto;
      margin-top: 13px;
      resize: none;
      background-color: #e9e9e9;
      min-width: 311px;
      width: 311px;
      min-height: 237px;
      border: none;
      border-radius: 10px;
      padding: 5px;
      box-sizing: border-box;
    }
    .label {
      margin: auto;
      min-width: 36px;
      height: 18px;
      text-align: center;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      font-family: Pretendard;
      letter-spacing: 0px;
      color: #000000;
    }
    .title {
    }
    .content {
    }
  }
  .button-wrapper {
  }
  .t-area-wrapper {
    position: relative;
    margin-top: 20px;
  }
  .floating-text {
    position: absolute;
    left: 40%;
    top: 40%;
  }
`;

const config = {
  readonly: false,
  height: 275,
  uploader: {
    insertImageAsBase64URI: true,
  },
  allowResizeX: false,
  allowResizeY: false,
  enableDragAndDropFileToEditor: true,

  tabIndex: 0,
  language: "ko",
  i18n: "ko",
  useSplitMode: false,
  showXPathInStatusbar: false,
  direction: "ltr",
  resize: false,
  toolbarButtonSize: "small",
};
export default class CommunityModify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      couldwrite: false,
      title: "",
      content: "",
      head: "",
      files: [],
    };
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (JSON.stringify(prevProps.detail) != JSON.stringify(this.props.detail)) {
      console.log("-----", this.props);
      this.setState(
        {
          title: this.props.detail.title,
          content: this.props.detail.text,
          files: JSON.parse(this.props.detail.files),
        },
        () => console.log(this.state)
      );
    }
  }

  onChangeValueTitle = async (e) => {
    await this.setState({ title: e.target.value });
    if (this.state.content !== "" && this.state.title !== "") {
      this.setState({ couldwrite: true });
    } else {
      this.setState({ couldwrite: false });
    }
  };
  onChangeValueHead = async (e) => {
    await this.setState({ head: e.target.value });
  };
  onChangeContent = async (value) => {
    console.log(value);
    await this.setState({ content: value });
    if (this.state.content !== "" && this.state.title !== "") {
      this.setState({ couldwrite: true });
    } else {
      this.setState({ couldwrite: false });
    }
  };
  hideFloatingText = (e) => {
    if (this.state.content === "") {
      const node = document.getElementById("floating-text");
      if (node) {
        node.style.display = "none";
      }
    }
  };
  checkToShowFloatingText = (e) => {
    if (this.state.content === "") {
      const node = document.getElementById("floating-text");
      if (node) {
        node.style.display = "block";
      }
    }
  };
  onCancelWrite = (e) => {
    e.preventDefault();
    goto("COMMUNITY");
  };
  onModify = (e) => {
    e.preventDefault();
    const { content, title, head, files } = this.state;
    const data = {
      text: content,
      title: title,
      head: head,
      files: JSON.stringify(files),
    };
    console.log(data);
    this.props.Modify(data).then(goto("COMMUNITY"));
  };
  onFileChange = async (files) => {
    this.setState({
      files: [].concat(files),
    });
  };
  render() {
    return (
      <Wrapper>
        <div className="gradient">
          <div className="blanker">&nbsp;</div>
          <SearchForm />
          <div className="title">게시글 등록하기</div>
        </div>
        <WriteForm>
          <div className="form">
            <div className="label">게시글 작성</div>

            <div className="rows top13">
              <div className="label">
                제목<font color="red">*</font>
              </div>

              <div>
                <input
                  value={this.state.title}
                  onChange={this.onChangeValueTitle}
                />
              </div>
            </div>
            <div className="t-area-wrapper">
              <Editor
                value={this.state.content}
                config={config}
                onChange={(value) => this.onChangeContent(value)}
              />
            </div>
            <div className="wrapper flex" style={{ marginTop: "10px" }}>
              <InputFile
                files={this.state.files}
                display={true}
                getValue={(value) => this.onFileChange(value)}
                accept=""
              />
            </div>
          </div>
          <div className="button-wrapper rows top13">
            <Button
              disabled={!this.state.couldwrite}
              onClick={this.onModify}
              active={this.state.couldwrite}
            >
              <div className="text">수정하기</div>
            </Button>

            <Button onClick={this.onCancelWrite}>
              <div className="text">취소하기</div>
            </Button>
          </div>
        </WriteForm>
      </Wrapper>
    );
  }
}

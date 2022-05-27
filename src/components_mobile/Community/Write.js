import React from 'react';
import styled from 'styled-components';
import Search from 'components_mobile/Search';
import ArticleListContainer from "containers/ArticleListContainer"
import { WIDTH } from 'constant';

const Wrapper = styled.div`
  .blanker {
    height: 44px;
  }
  .gradient {
    width: 100%;
    height: 131px;
    background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
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
  background: ${prop => prop.active ? "#FF0000" : "#707070"};
  box-shadow: 2px 2px 3px #00000019;
  border-radius: 10px;
  opacity: 1;
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
    color: #FFFFFF;
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
    background-color: #FFFFFF;
    border: 1px solid #E9E9E9;
    border-radius: 15px;
    box-shadow: 2px 3px 5px -3px rgba(0,0,0,0.65);
    -webkit-box-shadow: 2px 3px 5px -3px rgba(0,0,0,0.65);

    input {
      background-color: #E9E9E9; 
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
      background-color: #E9E9E9; 
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
  }
  .floating-text {
    position: absolute;
    left: 40%;
    top: 40%;
  }
`;

export class CommunityWrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardType: "free", /* "notice" */
      pageType: "list",/* write */

      // write
      couldwrite: false,
      title: "",
      content: "",
      // 
    };
  }
  onChangeValueTitle = async (e) => {
    await this.setState({ title: e.target.value });
    if (this.state.content !== "" && this.state.title !== "") {
      this.setState({ couldwrite: true });
    }
    else {
      this.setState({ couldwrite: false })
    }
  }
  onChangeValueContent = async (e) => {
    await this.setState({ content: e.target.value });
    if (this.state.content !== "" && this.state.title !== "") {
      this.setState({ couldwrite: true });
    } else {
      this.setState({ couldwrite: false })
    }
  }
  clickedButtonBSD = () => {
    this.setState({ boardType: "free" });
  }
  clickedButtonNotice = () => {
    this.setState({ boardType: "notice" });
  }
  hideFloatingText = (e) => {
    if (this.state.content === "") {
      const node = document.getElementById("floating-text");
      if (node) {
        node.style.display = "none";
      }
    }
  }
  checkToShowFloatingText = (e) => {
    if (this.state.content === "") {
      const node = document.getElementById("floating-text");
      if (node) {
        node.style.display = "block";
      }
    }
  }
  onCancelWrite = () => {
    this.setState({ pageType: "list", content: "", title: "", couldwrite: false });
  }
  onWrite = (e) => {
    e.preventDefault();
    const data = { content: this.state.content, title: this.state.title };
    console.log({ data });
  }

  render() {
    const { boardType, pageType } = this.state;
    console.log(this.state.content);

    return (<Wrapper>

      <div className='gradient'>
        <div className='blanker'>&nbsp;</div>
        <Search />
        {pageType === "list"
          ? <div className='title'>커뮤니티</div>
          : <div className='title'>게시글 등록하기</div>}
      </div>

      {pageType === "list"
        ? <>
          <div className='top13 rows'>

            <Button
              active={boardType === "free"}
              onClick={this.clickedButtonBSD}>
              <div className="text">자유게시판</div>
            </Button>
            <Button
              active={boardType === "notice"}
              onClick={this.clickedButtonNotice}>
              <div className="text">공지사항</div>
            </Button>
          </div>

          <div className='article-list-wrapper'>
            <ArticleListContainer boardType={boardType} />
          </div>
        </>

        : <>
          {/* form */}
          <WriteForm>
            <div className='form'>
              <div className='label'>게시글 작성</div>

              <div className='rows top13'>
                <div className='label'>
                  제목<font color="red">*</font>
                </div>

                <div>
                  <input
                    value={this.state.title}
                    onChange={this.onChangeValueTitle} />
                </div>
              </div>

              <div className='t-area-wrapper'>
                <div className='floating-text' id='floating-text'>
                  <div className='label'>
                    내용<font color="red">*</font>
                  </div>
                </div>

                <textarea
                  value={this.state.content}
                  onFocus={this.hideFloatingText}
                  onBlur={this.checkToShowFloatingText}
                  onChange={this.onChangeValueContent} />
              </div>

            </div>
            <div className='button-wrapper rows top13'>
              <Button
                disabled={!this.state.couldwrite}
                onClick={this.onWrite}
                active={this.state.couldwrite}>

                <div className="text">등록하기</div>
              </Button>

              <Button
                onClick={this.onCancelWrite}>

                <div className="text">취소하기</div>
              </Button>
            </div>
          </WriteForm>
        </>}

    </Wrapper>);
  }
}
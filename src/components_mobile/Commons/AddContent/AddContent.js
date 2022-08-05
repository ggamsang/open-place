import React, { Component } from 'react';
import styled from 'styled-components';
// import { resolution } from 'commons/resolution';
// import Button from 'commons/Button';
// import SunEditor from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

import { Editor } from 'commons/Editor/Editor';

const Wrap = styled.div`
    box-sizing: border-box;
    *{box-sizing: border-box;}
    width: 100%;
    background-color: white;
    padding: 10px;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 10px;
    margin-bottom: 20px;
    color:black;
    .button_grey {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #F7F7F7;
        margin-bottom: 9px;
    }
    .button_red {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: red;
    }
    .red {font: normal normal bold 15px/18px Noto Sans KR; color:red; }
    .black { font: normal normal medium 15px/18px Noto Sans KR; color:#707070; }
    .white { font: normal normal medium 15px/18px Noto Sans KR; color:white; }
`;

const config = {
    readonly: false,
    height: 275,
    uploader: {
        insertImageAsBase64URI: true
    },
    allowResizeX: false,
    allowResizeY: false,
    enableDragAndDropFileToEditor: true,

    tabIndex: 0,
    language: 'ko',
    i18n: 'ko',
    useSplitMode: false,
    showXPathInStatusbar: false,
    direction: 'ltr',
    resize: false,
    toolbarButtonSize: 'small',
}
class AddContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
        }
        this.onChangeContent = this.onChangeContent.bind(this);
    }

    onChangeContent = async (value) => {
        await this.setState({ content: value });
    }

    render() {
        // const warning = this.props.warning;
        const style = {
            fontFamily: "Pretendard", fontWeight: "bold", color: "white",
            display: "flex", justfyContent: "center", flexDirection: "column",
            width: "100%", marginBottom: "20px"
        };

        return (
            <div style={style}>
                <div style={{ marginBottom: "10px" }}>경험 컨텐츠 입력</div>
                <Wrap>
                    <Editor
                        value={this.state.content}
                        config={config}
                        onChange={(value) => this.onChangeContent(value)} />
                </Wrap>
            </div>
        )
    }
}

export default AddContent;


/* <div style={style}>
경험 컨텐츠 입력
<Wrap>
    <div onClick={this.props.onAddFile} className='button_grey red'>파일 등록</div>
    <div onClick={this.props.onAddText} className='button_grey red'>텍스트 입력</div>
    <div onClick={this.props.onAddTemplate} className='button_grey red'>템플릿 선택하기</div>
    <div onClick={this.props.onCancel} className='button_grey black'>작업 취소</div>
    <div onClick={this.props.onModify} className='button_red white'>등록하기</div>
    <SunEditor />
</Wrap>
<Button active onClick={this.props.onModify}>
    <div className='text'>등록하기</div>
</Button>
</div> */
import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

const Wrap = styled.div`
    box-sizing:border-box;
    *{box-sizing:border-box;}
    width:100%;
    background-color:white;
    padding:10px;
    box-shadow: 2px 2px 5px #00000029;
    border-radius: 10px;
    margin-bottom:20px;
    .button_grey{
        width:100%;
        height:30px;
        display:flex;justify-content:center;align-items:center;
        border-radius:5px;
        background-color:#F7F7F7;
        margin-bottom:9px;
    }
    .button_red{
        width:100%;
        height:30px;
        display:flex;justify-content:center;align-items:center;
        border-radius:5px;
        background-color:red;
    }
    .red{font: normal normal bold 15px/18px Noto Sans KR; color:red;}
    .black{font: normal normal medium 15px/18px Noto Sans KR; color:#707070;}
    .white{font: normal normal medium 15px/18px Noto Sans KR; color:white;}
    
`
class AddContent extends Component {

    constructor(props){
        super(props);
    }

    render() {
    const warning = this.props.warning;
    return (
        <React.Fragment>
            <Wrap>
                <div onClick={this.props.onAddFile} className='button_grey red'>파일 등록</div>
                <div onClick={this.props.onAddText} className='button_grey red'>텍스트 입력</div>
                <div onClick={this.props.onAddTemplate} className='button_grey red'>템플릿 선택하기</div>
                <div onClick={this.props.onCancel} className='button_grey black'>작업 취소</div>
                <div onClick={this.props.onModify} className='button_red white'>등록하기</div>
            </Wrap>
        </React.Fragment>
    )
  }
}

export default AddContent;

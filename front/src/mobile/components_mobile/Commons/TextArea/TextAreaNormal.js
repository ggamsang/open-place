import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'mobile/commons/resolution';

const TextAreaField = styled.textarea`
    box-sizing:border-box;

    width:${resolution(props=>props.width==null?"100%":props.width+"px")};
    height:${resolution(props=>props.height)}px;
    min-width:${resolution(props=>props.width)}px;
    max-width:${resolution(props=>props.width)}px;
    max-height:${resolution(props=>props.height)}px;
    background-color:${props=>props.color==null?'white':props.color};
    font-family:Noto Sans KR;
    display:flex;
    align-items:center;
    font-size:${resolution(props=>props.fontSize==null?"17":props.fontSize)}px;
    color:${props=>props.warning==true?"red":props.fontColor==null?"black":props.fontColor};
    border-radius:${props=>props.radius==null?"0":props.radius}px;
    padding:10px;
    outline:none;
    border:${props=>props.warning === true ? "1px solid red" : "none"};
    ::placeholder{
        color:#707070;
    }
    resize:none;
`

class TextAreaNormal extends Component {
    constructor(props){
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    onChangeValue=async(event)=>{
        this.props.onChangeValue && await this.props.onChangeValue(event);
    }
    render() {
    const warning = this.props.warning;
    return (
        <React.Fragment>
            <TextAreaField
                onChange={this.onChangeValue}
                value={this.props.value||""}
                placeholder={this.props.placeholder}
                type={this.props.type==null?"text":this.props.type}
                style={this.props.style}
                width={this.props.width}
                height={this.props.height}
                color={this.props.color}
                fontSize={this.props.fontSize}
                fontColor={this.props.fontColor}
                radius={this.props.radius}
                warning={warning}
            />
        </React.Fragment>
    )
  }
}

export default TextAreaNormal;

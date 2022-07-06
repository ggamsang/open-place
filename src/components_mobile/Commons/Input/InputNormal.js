import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
import { keyframes } from 'styled-components';

const boxFade = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`
const Wrap = styled.div`
    width:${resolution(props => props.width == null ? "100%" : props.width + "px")};
    // width:max-content;
    // height:max-content;
    position:relative;
    .clear{
        display:${props => props.warning == true ? "block" : "none"};
        width:${resolution(12)}px;
        height:${resolution(12)}px;
        position:absolute;
        z-index:10;
        top:${resolution(props => (props.height - 16) / 2)}px;
        right:5px;
        color:${props => props.warning == true ? "red" : "black"};
    }
`
const InputField = styled.input`
    box-sizing:border-box;
    width:${resolution(props => props.width == null ? "100%" : props.width + "px")};
    height:${resolution(props => props.height)}px;
    max-width:${resolution(props => props.width == null ? "100%" : props.width + "px")};
    max-height:${resolution(props => props.height)}px;
    background-color:${props => props.color == null ? 'white' : props.color};
    display:flex;
    align-items:center;
    font-size:${resolution(props => props.fontSize == null ? "17" : props.fontSize)}px;
    color:${props => props.warning == true ? "red" : props.fontColor == null ? "black" : props.fontColor};
    border-radius:${props => props.radius == null ? "0" : props.radius}px;
    padding-left:10px;
    outline:none;
    border:${props => props.warning == true ? "1px solid red" : "none"};
    ::placeholder{
        color:${props => props.placeholderColor == null ? "#C3CCDB" : props.placeholderColor};
    }
`

class InputNormal extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const warning = this.props.warning;
        return (
            <React.Fragment>
                <Wrap width={this.props.width} warning={warning} height={this.props.height}>
                    <InputField
                        disabled={this.props.disable}
                        onChange={this.props.onChangeValue}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        type={this.props.type == null ? "text" : this.props.type}
                        style={this.props.style}
                        width={this.props.width}
                        height={this.props.height}
                        color={this.props.color}
                        fontSize={this.props.fontSize}
                        fontColor={this.props.fontColor}
                        radius={this.props.radius}
                        placeholderColor={this.props.placeholderColor}
                        warning={warning}
                        onKeyPress={this.props.onKeyPress}
                    />
                    <div onClick={this.props.onClear} className="clear" >X</div>
                </Wrap>
            </React.Fragment>
        )
    }
}

export default InputNormal;

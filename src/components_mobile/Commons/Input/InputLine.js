import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';
// import { keyframes } from 'styled-components';

const Wrap = styled.div`
    width:max-content;
    height:max-content;
    position:relative;
    .clear{
        display:${props => props.warning === true ? "block" : "none"};
        height:${resolution(12)}px;
        width:${resolution(12)}px;
        position:absolute;
        z-index:10;
        top:${resolution(props => (props.height - 16) / 2)}px;
        right:5px;
        color:${props => props.warning === true ? "red" : "black"};
    }

`
const InputField = styled.input`
    width:${resolution(props => props.width - 10)}px;
    height:${resolution(props => props.height)}px;
    max-width:${resolution(props => props.width)}px;
    max-height:${resolution(props => props.height)}px;
    background-color:transparent;
    display:flex;
    align-items:center;
    font-size:${resolution(props => props.fontSize === null ? "17" : props.fontSize)}px;
    color:${props => props.fontColor === null ? "black" : props.fontColor};
    padding-left:${props => props.paddingLeft === null ? "10" : props.paddingLeft}px;
    outline:none;
    border:none;
    border-bottom:2px solid ${props => props.bgColor === null ? "black" : props.bgColor};
    ::placeholder{
        color:#999999;
    }
`

class InputLine extends Component {
    render() {
        const warning = this.props.warning;
        return (
            <React.Fragment>
                <Wrap warning={warning} height={this.props.height}>
                    <InputField
                        onChange={this.props.onChangeValue}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        type={this.props.type === null ? "text" : this.props.type}
                        style={this.props.style}
                        width={this.props.width}
                        height={this.props.height}
                        color={this.props.color}
                        fontSize={this.props.fontSize}
                        fontColor={this.props.fontColor}
                        radius={this.props.radius}
                        paddingLeft={this.props.paddingLeft}
                        bgColor={this.props.bgColor}
                        warning={warning}
                    />
                    <div onClick={this.props.onClear} className="clear" >X</div>
                </Wrap>
            </React.Fragment>
        )
    }
}

export default InputLine;

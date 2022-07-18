import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

const CustomButton = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
  width:${resolution(props => props.width)}px;
  height:${resolution(props => props.height)}px;
  background-color:${props => props.bgColor == null ? "red" : props.bgColor};
  border:${props => props.border == null ? "none" : props.border};
  border-radius:${props => props.radius == null ? 0 : props.radius}px;
  .text{
    color:${props => props.color == null ? 'white' : props.color};
    font-family:Pretendard;
    font-weight:medium;
    font-size:${resolution(props => props.fontSize == null ? 18 : props.fontSize)}px;
  }
  cursor: pointer;
`

class ButtonNormal extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent = async () => {
    // this.props.onClickEvent();
    this.props.onClickEvent && await this.props.onClickEvent();
  }

  render() {

    const button_text = this.props.text;
    return (
      <CustomButton
        onClick={this.props.onClick || this.onClickEvent}
        disabled={this.props.disabled}
        style={this.props.style}
        width={this.props.width}
        height={this.props.height}
        bgColor={this.props.bgColor}
        color={this.props.color}
        fontSize={this.props.fontSize}
        radius={this.props.radius}
        border={this.props.border}
        className={this.props.className}
      >
        <div className='text'>{button_text}</div>
      </CustomButton>
    )
  }
}
export default ButtonNormal;
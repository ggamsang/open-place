import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

const CustomButton = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
  width:${resolution(props=>props.width)}px;
  height:${resolution(props=>props.height)}px;
  background-color:${props=>props.bgColor==null?"red":props.bgColor};
  border-radius:${props=>props.radius==null?0:props.radius}px;
  .text{
    color:${props=>props.color==null?'white':props.color};
    font-family:Pretendard;
    font-weight:medium;
    font-size:${resolution(props=>props.fontSize==null?18:props.fontSize)}px;
  }
`

class ButtonNormal extends Component {

  constructor(props){
    super(props);
    this.state={};
    this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent=()=>{
    this.props.onClickEvent();
  }

  render() {
    
    const button_text = this.props.text;
    return (
      <CustomButton 
              onClick={this.onClickEvent}

              style={this.props.style}
              width={this.props.width} 
              height={this.props.height}
              bgColor={this.props.bgColor}
              color={this.props.color}
              fontSize={this.props.fontSize}
              radius={this.props.radius}
              >
        <div className='text'>{button_text}</div>
      </CustomButton>
    )
  }
}
export default ButtonNormal;
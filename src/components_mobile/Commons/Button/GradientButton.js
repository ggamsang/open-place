import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

const CustomButton = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
  width:${resolution(props=>props.width)}px;
  height:${resolution(props=>props.height)}px;
  background: linear-gradient(${props=>props.deg==null?'0':props.deg}deg,
                              ${props=>props.front},
                              ${props=>props.end});
  border-radius:${props=>props.radius==null?0:props.radius}px;

  box-shadow:0px 15px 30px #1466CC29;

  .text{
    color:${props=>props.color==null?'white':props.color};
    font-family:Pretendard;
    font-weight:medium;
    font-size:${resolution(props=>props.fontSize==null?18:props.fontSize)}px;
  }
`

class GradientButton extends Component {

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
              deg={this.props.deg}
              front={this.props.front}
              end={this.props.end}
              color={this.props.color}
              fontSize={this.props.fontSize}
              radius={this.props.radius}
              >
        <div className='text'>{button_text}</div>
      </CustomButton>
    )
  }
}
export default GradientButton;
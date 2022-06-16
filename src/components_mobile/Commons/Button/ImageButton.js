import React, { Component } from 'react';
import styled from 'styled-components';
import { resolution } from 'commons/resolution';

const CustomButton = styled.div`
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    background-color:${props=>props.color==null?"white":props.color};
    background-image:url(${props=>props.src});
    background-size:cover;
    background-position:center center;
    border-radius:${props=>props.radius==null?0:props.radius}px;
    box-shadow:0px 9px 20px #1877F23D;
`

class ImageButton extends Component {

  constructor(props){
    super(props);
    this.state={};
    this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent=async()=>{
    // this.props.onClickEvent();
    this.props.onClickEvent && await this.props.onClickEvent();
  }

  render() {
    return (
      <CustomButton
        onClick={this.onClickEvent}
        style={this.props.style}
        width={this.props.width}
        height={this.props.height}
        color={this.props.color}
        radius={this.props.radius}
        src={this.props.src}
      />
    )
  }
}
export default ImageButton;
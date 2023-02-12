import React, { Component } from "react";
import styled from "styled-components";
import { resolution } from "desktop/commons/resolution";
import OWD_logo_small from "resources/OWD_logo_small.png";
const Wrapper = styled.div`
  width: ${resolution(259)}px;
  height: ${resolution(309)}px;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: ${resolution(259)}px;
    height: ${resolution(259)}px;
    object-fit: contain;
  }
  .text {
    overflow-wrap: break-word;
    text-align: center;
    width: 100%;
    height: ${resolution(80)}px;
    position: absolute;
    bottom: 0px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: ${resolution(32)}px;
    color: white;
    text-shadow: 5px 5px 6px #00000029;
  }
`;
const WrapperImage = styled.div`
  width: ${resolution(207)}px;
  height: ${resolution(207)}px;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: ${resolution(207)}px;
    height: ${resolution(207)}px;
    object-fit: contain;
  }
  .text {
    overflow-wrap: break-word;
    text-align: center;
    width: 100%;
    height: ${resolution(80)}px;
    position: absolute;
    bottom: 0px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: ${resolution(32)}px;
    color: white;
    text-shadow: 5px 5px 6px #00000029;
  }
`;
const WrapperSmall = styled.div`
  width: ${resolution(137)}px;
  height: ${resolution(137)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .text {
    position: absolute;
    bottom: 0px;
    font-family: Montserrat;
    font-size: ${resolution(16)}px;
    color: white;
    text-shadow: 5px 5px 6px #00000029;
  }
`;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent = () => {
    this.props.onClickEvent();
  };

  render() {
    return (
      <React.Fragment>
        {this.props.type === "big_image" ? (
          <WrapperImage onClick={this.onClickEvent}>
            <img alt="logo" style={this.props.style} src={OWD_logo_small} />
          </WrapperImage>
        ) : this.props.type === "big" ? (
          <Wrapper onClick={this.onClickEvent}>
            <img alt="logo" style={this.props.style} src={OWD_logo_small} />
            <div className="text">{this.props.text}</div>
          </Wrapper>
        ) : this.props.type === "small" ? (
          <WrapperSmall onClick={this.onClickEvent}>
            <img alt="logo" style={this.props.style} src={OWD_logo_small} />
            <div className="text">{this.props.text}</div>
          </WrapperSmall>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Logo;

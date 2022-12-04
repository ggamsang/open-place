import React, { Component } from "react";
import sLogo from "./../../../imgs/OWD_logo_small.png";
import * as styled from "./styles";

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
          <styled.WrapperImage onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
          </styled.WrapperImage>
        ) : this.props.type === "big" ? (
          <styled.Wrapper onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
            <div className="text">{this.props.text}</div>
          </styled.Wrapper>
        ) : this.props.type === "small" ? (
          <styled.WrapperSmall onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
            <div className="text">{this.props.text}</div>
          </styled.WrapperSmall>
        ) : this.props.type === "mini" ? (
          <styled.WrapperMini onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
            <div className="text">{this.props.text}</div>
          </styled.WrapperMini>
        ) : this.props.type === "tiny" ? (
          <styled.WrapperTiny onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
            <div className="text">{this.props.text}</div>
          </styled.WrapperTiny>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Logo;

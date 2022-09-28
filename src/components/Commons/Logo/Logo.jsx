import React, { Component } from "react";
import sLogo from "./../../../imgs/OWD_logo_small.png";
import { Wrapper_image, Wrapper, Wrapper_small } from "./styles";

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
          <Wrapper_image onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
          </Wrapper_image>
        ) : this.props.type === "big" ? (
          <Wrapper onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
            <div className="text">{this.props.text}</div>
          </Wrapper>
        ) : this.props.type === "small" ? (
          <Wrapper_small onClick={this.onClickEvent}>
            <img style={this.props.style} src={sLogo} />
            <div className="text">{this.props.text}</div>
          </Wrapper_small>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Logo;

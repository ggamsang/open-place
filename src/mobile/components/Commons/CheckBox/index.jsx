import React, { Component } from "react";
import styled from "styled-components";
import { resolution } from "../../../commons/resolution";
import CheckIcon from "../../../../imgs/check_green.svg";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.color === null ? "white" : props.color)};
  font-size: ${(props) => (props.fontSize === null ? 13 : props.fontSize)}px;

  .text {
    margin-left: ${(props) =>
      props.marginRight === null ? 10 : props.marginRight}px;
  }
`;
const CheckBox = styled.div`
  width: 20px;
  height: 16px;
  min-width: 20px;
  min-height: 16px;
  position: relative;

  .nemo {
    position: absolute;
    width: ${resolution((props) =>
      props.width === null ? 16 : props.width
    )}px;
    max-width: ${resolution((props) =>
      props.width === null ? 16 : props.width
    )}px;
    height: ${resolution((props) =>
      props.height === null ? 16 : props.height
    )}px;
    max-height: ${resolution((props) =>
      props.height === null ? 16 : props.height
    )}px;

    background-color: #e5f0fe;
    border: 1px solid #b5d0f3;
    border-radius: 3px;
  }
  .check {
    position: absolute;
    img {
      width: ${resolution((props) =>
        props.width === null ? 18 : props.width
      )}px;
      height: ${resolution((props) =>
        props.height === null ? 18 : props.height
      )}px;
    }
  }
`;

class CheckBoxNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent = () => {
    this.props.onClickEvent();
  };

  render() {
    return (
      <Wrapper style={this.props.style} onClick={this.onClickEvent}>
        <CheckBox
          id={this.props.id}
          width={this.props.width}
          height={this.props.height}
          marginRight={this.props.marginRight}
          value={this.props.value}
        >
          <div className="nemo" />
          <div className="check">
            {this.props.value === true ? (
              <img alt="icon" src={CheckIcon} />
            ) : null}
          </div>
        </CheckBox>
        <div className="text">{this.props.text}</div>
      </Wrapper>
    );
  }
}
export default CheckBoxNormal;

import React, { Component } from "react";
import styled from "styled-components";
import { resolution } from "../../../commons/resolution";
import CheckIcon from "src/imgs/check_green.svg";
// import { keyframes } from 'styled-components';

const Wrap = styled.div`
  width: ${resolution((props) => (props.width === null ? 300 : props.width))}px;
  height: ${resolution((props) =>
    props.height === null ? 300 : props.height
  )}px;
  max-width: ${resolution((props) =>
    props.width === null ? 300 : props.width
  )}px;
  max-height: ${resolution((props) =>
    props.height === null ? 300 : props.height
  )}px;

  border-radius: 3px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .checked {
    opacity: ${(props) => (props.checked === true ? "1" : "0")};
    width: 16px;
    height: 16px;
    max-width: 16px;
    max-height: 16px;
    background-image: url(${CheckIcon});
    background-repeat: no-repeat;
    margin-right: 15px;
  }
  .combo {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
const InputField = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  min-width: 50%;
  border-right: 1px solid white;
  padding-left: 10px;
  ::placeholder {
    color: black;
  }
`;
// const InputRegionNumber = styled.input`
//     border:none;
//     outline:none;
//     background-color:transparent;
// `
const selectList = ["gmail.com", "naver.com", "nate.com", "hanmail.com"];
export class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_adr: "",
      email_id: "",
    };
    this.onSelectEmail = this.onSelectEmail.bind(this);
  }

  onSelectEmail = (event) => {
    this.setState({ email_adr: event.target.value });
  };

  render() {
    // const warning = this.props.warning;
    return (
      <React.Fragment>
        <Wrap
          width={this.props.width}
          height={this.props.height}
          checked={this.props.checked}
        >
          <InputField
            placeholder="이메일을 입력하세요"
            onChange={this.props.onChangeValue}
            value={this.props.value}
          />
          <select
            className="combo"
            onChange={this.onSelectEmail}
            value={this.state.email_adr}
          >
            {selectList.map((item, index) => {
              return <option value={index}>{item}</option>;
            })}
          </select>
          <div className="checked" />
        </Wrap>
      </React.Fragment>
    );
  }
}
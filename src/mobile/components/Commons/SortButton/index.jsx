import React, { Component } from "react";
import styled from "styled-components";
import { ButtonNormal } from "../Button";
import { SORTTYPE } from "../Define";

const Sort = styled.div`
  box-sizing: border-box;
  width: 165px;
  height: 35px;
  position: relative;
  .button_ {
  }
`;

class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: this.props.value,
      drop: false,
    };
    this.onClickButton = this.onClickButton.bind(this);
  }
  returnData = async (e) => {
    this.props.getValue && (await this.props.getValue(this.state.sortType));
  };
  onClickButton = (event) => {
    this.setState(
      {
        sortType:
          this.state.sortType === SORTTYPE.LIKE
            ? SORTTYPE.UPDATE
            : SORTTYPE.LIKE,
      },
      () => this.returnData(this.state.sortType)
    );
  };

  render() {
    return (
      <React.Fragment>
        <Sort style={this.props.style}>
          <ButtonNormal
            width={165}
            height={35}
            radius={10}
            fontSize={15}
            bgColor={"red"}
            text={`${
              SORTTYPE.LIKE === this.state.sortType ? "인기순" : "최신순"
            }`}
            onClickEvent={this.onClickButton}
            className="button_"
          />
        </Sort>
      </React.Fragment>
    );
  }
}

export default SortButton;

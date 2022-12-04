import React, { Component } from "react";
import styled from "styled-components";
import { ButtonNormal } from "../Button";
import { CATEGORY } from "../Define";

const Category = styled.div`
  box-sizing: border-box;
  width: 165px;
  height: 35px;
  position: relative;
  .button_ {
  }
`;

class CategoryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryType: this.props.value,
    };
    this.onClickButton = this.onClickButton.bind(this);
  }
  returnData = async (e) => {
    this.props.getValue && (await this.props.getValue(this.state.categoryType));
  };
  onClickButton = (event) => {
    this.setState(
      {
        categoryType:
          this.state.categoryType === CATEGORY.PLAY
            ? CATEGORY.LEARN
            : this.state.categoryType === CATEGORY.LEARN
            ? CATEGORY.MAKE
            : this.state.categoryType === CATEGORY.MAKE
            ? CATEGORY.PLAY
            : CATEGORY.PLAY,
      },
      () => this.returnData(this.state.categoryTypeƒ)
    );
  };

  render() {
    return (
      <React.Fragment>
        <Category style={this.props.style}>
          <ButtonNormal
            width={165}
            height={35}
            radius={10}
            fontSize={15}
            bgColor={"#707070"}
            text={`${
              this.state.categoryType === CATEGORY.PLAY
                ? "놀기"
                : this.state.categoryType === CATEGORY.LEARN
                ? "배우기"
                : this.state.categoryType === CATEGORY.MAKE
                ? "만들기"
                : "놀기"
            }`}
            onClickEvent={this.onClickButton}
            className="button_"
          />
        </Category>
      </React.Fragment>
    );
  }
}

export default CategoryButton;

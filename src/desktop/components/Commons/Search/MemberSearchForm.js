import React, { Component } from "react";
import { MemberSearch as Search } from "desktop/components/Search";
import { connect } from "react-redux";
import * as styled from "./styles";
// import { resolution } from "desktop/commons/resolution";
// import back_arrow from "resources/Iconly-Bold-left-arrow.svg";

// import styled from "styled-components";
// const SearchBox = styled.div`
//   * {
//     border-box: box-sizing;
//   }
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .arrow_box {
//     width: ${resolution(27)}px;
//     display: flex;
//     justify-content: center;
//     margin-right: 10px;
//   }
//   .alarm_box {
//     box-sizing: border-box;
//     width: ${resolution(34)}px;
//     display: flex;
//     justify-content: center;
//     margin-left: 10px;
//   }
//   .img_arrow {
//     width: ${resolution(27)}px;
//     height: ${resolution(19)}px;
//   }

//   .searchWrap {
//     box-sizing: border-box;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;

class MemberSearchForm extends Component {
  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

  onClickEvent = () => {
    this.props.onClickEvent();
  };
  onClickBack = () => {
    window.history.go(-1);
  };
  componentDidUpdate(props) {
    if (this.props.active && props.active !== this.props.active) {
      return true;
    }
  }

  render() {
    const { token } = this.props;
    return (
      <React.Fragment>
        <styled.MessageBox>
          <span>닉네임/메일주소</span>
          <styled.FindPeople>
            <Search
              token={token}
              width={642}
              keyword={this.props.keyword}
              placeholder={"대화상대 찾기"}
              disabled_filter={this.props.disabled_filter}
            />
          </styled.FindPeople>
          {/* <styled.FindButton>
            <span>찾아보기</span>
          </styled.FindButton> */}
        </styled.MessageBox>
        {/* <SearchBox>
          {this.props.isMain === null && (
            <div onClick={this.onClickBack} className="arrow_box">
              <img alt="arrow" className="img_arrow" src={back_arrow} />
            </div>
          )}
          <div className="searchWrap">

          </div>
        </SearchBox> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Authentication.status.isLoggedIn,
    token: state.Authentication.status.token,
  };
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MemberSearchForm);

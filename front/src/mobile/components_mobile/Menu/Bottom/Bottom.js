import React from "react";
import styled from "styled-components";
import shapeRectangle from "resources/mobiles/Rectangle.svg";
import shapeLogin from "resources/mobiles/login.svg";
import shapeSignup from "resources/mobiles/signup.svg";
import logo from "resources/mobiles/logo_xxxhdpi.png";
// import arrow from "resources/mobiles/Iconly-Bold-light-outline-arrow.svg";
import arrow from "resources/mobiles/Iconly-Bold-left-arrow.svg";
import { WIDTH } from "constant";

import profile from "resources/mobiles/Profile.svg";
import {
  IconPLAY,
  IconLEARN,
  IconMAKE,
  IconCOMMUNITY,
} from "resources/mobiles/iconPack";
import { Fade } from "react-reveal";
import { goto } from "navigator";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .absolute {
    position: absolute;
  }

  * {
    padding: 0;
    margin: 0;
  }
  .left-upper {
    width: 113px;
    height: 26px;
    background: transparent linear-gradient(287deg, #ff6969 0%, #ff3131 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 30px 0px;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;
  }
  .left-lower {
    width: 113px;
    height: 26px;
    background: #000000be 0% 0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 0px 30px;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;
  }
  .right-lower {
    width: 113px;
    height: 26px;
    background: transparent linear-gradient(287deg, #ff6969 0%, #ff3131 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 30px 0px;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;
  }
  .right-upper {
    width: 113px;
    height: 26px;
    background: #000000be 0% 0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 0px 30px;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;
  }
  .login {
    pading: 0;
    margin: 0;
    width: 113px;
    height: 26px;
    background-image: url(${shapeLogin});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup {
    width: 113px;
    height: 26px;
    background-image: url(${shapeSignup});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;

    .profile {
      width: 11px;
      height: 13px;
      background-size: cover;
      background-image: url(${profile});
      background-position: center center;
      margin-right: 8.5px;
    }

    span {
      width: max-content;
      color: white;
      font-family: Pretendard;
      font-weight: black;
      font-size: 11px;
      text-align: center;
    }
  }
  .background {
    width: ${WIDTH}px;
    height: 55px;
    // background-image: url(${shapeRectangle});
    // background-position: center center;
    // background-repeat: no-repeat;
    position: relative;
    border-radius: 27.5px;
    background-color: rgba(13, 13, 13, 0.82);
  }
  .logo {
    position: absolute;
    width: 85px;
    height: 85px;
    transform: translate(-50%, -20%);
    z-index: 9999;
    &.notloggedin {
      top: -30%;
    }
  }
  .arrow-resize {
    width: 75px;
    height: 75px;
    transform: translate(-50%, -20%);
    &.notloggedin {
      top: -2O%;
    }
  }
  ul {
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      margin: auto;
    }
  }
  .row {
    width: ${WIDTH}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // force react-reveal z-index
    .react-reveal {
      z-index: 9999;
      margin-left: auto;
    }
  }

  .right-margin42 {
    margin-right: 40px;
  }
  .left-margin42 {
    margin-left: 40px;
  }
  .right-margin22 {
    margin-right: 22px;
  }
  .left-margin22 {
    margin-left: 22px;
  }
  .left-margin35 {
    margin-left: 35px;
  }
  .right-margin35 {
    margin-right: 35px;
  }
  span {
    font-family: Pretendard;
    font-weight: 700;
    font-size: 11px;
    text-align: center;
    line-height: 14px;
    color: #fff;
  }
  .topmargin3 {
    margin-top: 3px;
  }
  .bottommargin {
    margin-bottom: 23px;
  }
  .send-left {
    margin-left: auto;
  }
`;

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainmenu: true,
    };
  }
  gotoTop = () => {
    const template =
      document.getElementById("body") || document.documentElement;
    template && template.scrollTo({ top: 0, behavior: "smooth" });
  };
  toggleMainMenu = (_) => {
    this.setState({ mainmenu: !this.state.mainmenu });
  };
  render() {
    console.log(this.props.login);
    return (
      <Wrapper>
        {this.props.login ? (
          <div className="row">
            {/* LOGIN */}
            <div>
              <div className="left-upper" onClick={this.toggleMainMenu}>
                {this.state.mainmenu ? (
                  <span>메뉴닫기</span>
                ) : (
                  <span>메뉴보기</span>
                )}
              </div>
              <div className="left-lower" onClick={() => goto("CREATE-ITEM")}>
                <span>+경험등록하기</span>
              </div>
            </div>

            <Fade>
              <div>
                {this.props.up && !this.props.force ? (
                  <img
                    alt="icon"
                    onClick={() => this.gotoTop()}
                    className="logo arrow-resize"
                    src={arrow}
                  />
                ) : (
                  <img
                    alt="icon"
                    onClick={() => goto("MAIN")}
                    className="logo"
                    src={logo}
                  />
                )}
              </div>
            </Fade>

            <div className="send-left">
              <div className="right-upper" onClick={() => goto("WRITE")}>
                <span>게시글 등록하기</span>
              </div>
              <div className="right-lower" onClick={() => goto("MYDETAIL")}>
                <div className="profile" />
                <span>마이페이지</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div>
              <div className="right-upper" onClick={() => goto("LOGIN")}>
                <span>로그인</span>
              </div>
            </div>

            <Fade>
              <div>
                {this.props.up && !this.props.force ? (
                  <img
                    alt="icon"
                    onClick={() => this.gotoTop()}
                    className="logo arrow-resize"
                    src={arrow}
                  />
                ) : (
                  <img
                    alt="icon"
                    onClick={() => goto("MAIN")}
                    className="logo"
                    src={logo}
                  />
                )}
              </div>
            </Fade>

            <div className="send-left">
              <div className="left-upper" onClick={() => goto("SIGNUP")}>
                <div className="profile" />
                <span>회원가입</span>
              </div>
            </div>
          </div>
        )}

        {this.state.mainmenu && (
          <div className="row background topmargin3">
            <ul className="row">
              <li
                onClick={() => goto("PLAY" /*"1/null"*/)}
                className="left-margin35"
              >
                <IconPLAY />
              </li>
              <li onClick={() => goto("LEARN" /* "1/null"*/)}>
                <IconLEARN />
              </li>
            </ul>
            <ul className="row">
              <li onClick={() => goto("MAKE" /* "1/null"*/)}>
                <IconMAKE />
              </li>
              <li onClick={() => goto("COMMUNITY")} className="right-margin35">
                <IconCOMMUNITY />
              </li>
            </ul>
          </div>
        )}
      </Wrapper>
    );
  }
}

export default Bottom;

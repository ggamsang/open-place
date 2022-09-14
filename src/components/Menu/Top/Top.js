import React from "react";
import styled from "styled-components";
import shapeRectangle from "resources/Rectangle.svg";
import shapeLogin from "resources/login.svg";
import shapeSignup from "resources/signup.svg";
import logo from "resources/logo_xxxhdpi.png";
// import arrow from "resources/Iconly-Bold-light-outline-arrow.svg";
import arrow from "resources/Iconly-Bold-left-arrow.svg";
import { WIDTH } from "constant";

import profile from "resources/Profile.svg";
import {
  IconPLAY,
  IconLEARN,
  IconMAKE,
  IconCOMMUNITY,
} from "resources/iconPack";
import { Fade } from "react-reveal";
import { goto } from "navigator";
import SearchForm from "components/Commons/Search/SearchForm";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .absolute {
    position: absolute;
  }
  .profile {
    width: 11px;
    height: 13px;
    background-size: cover;
    background-image: url(${profile});
    background-position: center center;
    margin-right: 8.5px;
  }
  * {
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
    // width: ${WIDTH}px;
    height: 55px;
    // background-image: url(${shapeRectangle});
    // background-position: center center;
    // background-repeat: no-repeat;
    position: relative;
    border-radius: 27.5px;
    background-color: rgba(13, 13, 13, 0.82);
  }
  .logo {
    width: 85px;
    height: 85px;
    z-index: 9999;
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
    // width: ${WIDTH}px;
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

  .make-button {
    border: none;
    outline: none;
    width: 159px;
    height: 43px;
    background: transparent linear-gradient(270deg, #0062ff 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    border-radius: 0px 22px 22px 0px;
    opacity: 1;
    p {
      margin: 12px 30px 12px 87px;
      width: max-content;
      // width: 42px;
      height: 19px;
      text-align: center;
      font: normal normal 900 16px/19px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  .learn-button {
    border: none;
    outline: none;
    height: 43px;
    background: transparent linear-gradient(270deg, #8800ff 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    border-radius: 0px 22px 22px 0px;
    opacity: 1;
    p {
      margin: 12px 30px 12px 87px;
      width: max-content;
      // width: 42px;
      height: 19px;
      text-align: center;
      font: normal normal 900 16px/19px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  .play-button {
    border: none;
    outline: none;
    height: 43px;
    background: transparent linear-gradient(270deg, #ff8900 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    border-radius: 0px 22px 22px 0px;
    opacity: 1;
    p {
      margin: 12px 30px 12px 87px;
      width: max-content;
      // width: 42px;
      height: 19px;
      text-align: center;
      font: normal normal 900 16px/19px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  .signup-button {
    border: none;
    outline: none;
    width: 156px;
    height: 42px;
    background: transparent linear-gradient(110deg, #f8f8f8 0%, #ff0000 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 30px 0px;
    opacity: 1;
    p {
      margin: auto;
      width: max-content;
      // width: 42px;
      height: 19px;
      text-align: center;
      font: normal normal 900 16px/19px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  .login-button {
    border: none;
    outline: none;
    width: 156px;
    height: 42px;
    background: #848484 0% 0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 30px 0px;
    opacity: 1;
    p {
      margin: auto;
      width: max-content;
      // width: 42px;
      height: 19px;
      text-align: center;
      font: normal normal 900 16px/19px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  .create-button {
    border: none;
    outline: none;
    width: 156px;
    height: 42px;
    background: transparent linear-gradient(110deg, #f8f8f8 0%, #001dff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 30px 0px;
    opacity: 1;
    p {
      margin: auto;
      width: max-content;
      // width: 42px;
      height: 19px;
      text-align: center;
      font: normal normal 900 16px/19px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  .nick-button {
    border: none;
    outline: none;
    width: 156px;
    height: 42px;
    background: transparent linear-gradient(110deg, #f8f8f8 0%, #ff0000 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 1px 1px 3px #00000029;
    border-radius: 30px 0px;
    opacity: 1;
    .wrap {
      display: flex;
      flex-direction: row;
    }
    img {
      width: 43px;
      height: 43px;
      background-size: cover;
      background-position: center center;
      border-radius: 100%;
    }
    p {
      margin: auto;
      width: max-content;
      height: 19px;
      text-align: center;
      font: normal normal 900 16px/19px Pretendard;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  .goto-right {
    margin-left: auto;
    margin-right: 27px;
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
    const { userInfo, login } = this.props;
    // console.log({ userInfo });
    return (
      <Wrapper>
        <Fade>
          <div>
            <img
              alt="icon"
              onClick={() => goto("MAIN")}
              className="logo"
              src={logo}
            />
          </div>
        </Fade>

        <SearchForm />

        <div>
          <button
            className="make-button"
            onClick={() => goto("MAKE", "1/null")}
          >
            <p>만들기</p>
          </button>
          <button
            className="learn-button"
            onClick={() => goto("LEARN", "1/null")}
          >
            <p>배우기</p>
          </button>
          <button
            className="play-button"
            onClick={() => goto("PLAY", "1/null")}
          >
            <p>놀기</p>
          </button>
        </div>
        <div className="goto-right row">
          {login ? (
            <React.Fragment>
              {/* <div className='login' onClick={() => goto("CREATE-ITEM")}>
                        <span>+경험등록하기</span>
                    </div>
                    <div className='login' onClick={() => goto("WRITE")}>
                        <span>게시글 등록하기</span>
                    </div>
                    <div className='signup' onClick={() => goto("MYDETAIL")}>
                        <div className='profile' />
                        <span>마이페이지</span>
                    </div> */}
              <button
                className="create-button"
                onClick={() => goto("CREATE-ITEM")}
              >
                <p>등록</p>
              </button>

              <button className="nick-button" onClick={() => goto("MYDETAIL")}>
                <div className="wrap">
                  <img src={userInfo?.l_img} />
                  <p>{userInfo?.nick_name || "닉네임"}</p>
                </div>
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <button className="signup-button" onClick={() => goto("SIGNUP")}>
                <p>회원가입</p>
              </button>
              <button className="login-button" onClick={() => goto("LOGIN")}>
                {/* <div className='profile' /> */}
                <p>로그인</p>
              </button>
            </React.Fragment>
          )}
        </div>
        {/* {this.state.mainmenu
                && <div className='row background topmargin3'>
                    <ul className='row'>
                        <li onClick={() => goto("PLAY", "1/null")} className='left-margin35'><IconPLAY /></li>
                        <li onClick={() => goto("LEARN", "1/null")}><IconLEARN /></li>
                        <li onClick={() => goto("MAKE", "1/null")}><IconMAKE /></li>
                        <li onClick={() => goto("COMMUNITY")} className='right-margin35'><IconCOMMUNITY /></li>
                    </ul>
                </div>} */}
      </Wrapper>
    );
  }
}

export default Bottom;

import React, { Component } from "react";
import { connect } from "react-redux";
import { goto } from "navigator";
import GetQueryString from "modules/GetQueryString";
import { alert } from "components/Commons/Alert/Alert";
import * as styled from "./styles";
import AlarmContainer from "containers/Header/AlarmContainer";
import Message from "components/Header/Message";
// import Socket from "modules/Socket";
import io from "socket.io-client";
// import host from "config";

const isOpen = (ws) => ws.readyState === ws.OPEN;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: decodeURIComponent(GetQueryString("keyword") || ""),
      alarm: {},
    };
    this.socket = null;
  }
  activateNotification = () => {
    if (this.props.userInfo == null) return;

    this.socket = io("https://place.opensrcdesign.com")
      .on("conn", (msg) => {
        console.log(msg);
      })
      .on("getNoti", (alarm) => {
        this.setState({ alarm: alarm });
      });
    this.socket.emit("INIT", this.props.userInfo.uid);
    console.log(this.socket);
  };
  componentDidMount() {
    this.activateNotification();
  }
  setKeyword = (keyword) => this.setState({ keyword: keyword });
  render() {
    const { loggedIn, userInfo } = this.props;
    const { keyword } = this.state;
    console.log(this.props, this.state);
    return (
      <styled.Container>
        <div style={{ marginLeft: "20px" }}>
          <styled.Logo type="mini" onClick={() => goto("MAIN")} />
        </div>

        <styled.Play onClick={() => goto("PLAY")}>
          <styled.PlayText>놀기</styled.PlayText>
        </styled.Play>

        <styled.Learn onClick={() => goto("LEARN")}>
          <styled.LearnText>배우기</styled.LearnText>
        </styled.Learn>

        <styled.Make onClick={() => goto("MAKE")}>
          <styled.MakeText>만들기</styled.MakeText>
        </styled.Make>

        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            position: "relative",
            marginLeft: "9px",
          }}
        >
          <styled.SearchExp
            value={keyword}
            onKeyUp={(e) =>
              e.key === "Enter" &&
              (keyword.trimStart().trimEnd() === ""
                ? alert("검색키워드를 입력하세요")
                : true)
                ? goto("SEARCH", "keyword=" + keyword)
                : null
            }
            placeholder={"경험 찾아보기"}
            onChange={(e) => this.setKeyword(e.target.value.replace(".", ""))}
          />
          <i
            style={{
              color: "#848484",
              zIndex: "997",
              opacity: ".9",
              fontSize: "32px",
              position: "absolute",
              right: "38px",
              top: "5px",
            }}
            className="material-icons"
            onClick={this.openAlarmList}
          >
            search
          </i>
          {/* <styled.SearchExpText opacit y={keyword ? 1 : 0.5}> */}
          {/* 경험 찾아보기  */}
          {/* </styled.SearchExpText> */}
        </div>

        {loggedIn && this.props.userInfo ? (
          <React.Fragment>
            <AlarmContainer alarm={this.state.alarm} Socket={this.socket} />
            <Message noti={this.state.alarm} Socket={this.socket} />
            {/* {userInfo && <NotificationContainer />} */}
            {/* <styled.EmailIcon onClick={() => goto("MESSAGE")} /> */}
            <styled.RegistBox>
              <styled.Register onClick={() => goto("CREATE-ITEM-DESKTOP")}>
                {/* <RegisterIcon /> */}
                {/* <i
                  style={{
                    color: "#FFFFFF",
                    zIndex: "997",
                    opacity: ".9",
                    fontSize: "10px",
                  }}
                  className="material-icons"
                >
                  plus
                </i> */}
                <styled.RegisterText>+ 등록하기</styled.RegisterText>
              </styled.Register>
              <styled.Nickname onClick={() => goto("MY-PAGE")}>
                <styled.NicknameIcon src={userInfo?.l_img} />
                <styled.NicknameText>
                  {userInfo?.nickName || "닉네임"}
                </styled.NicknameText>
              </styled.Nickname>
            </styled.RegistBox>
          </React.Fragment>
        ) : (
          <styled.RegistBox>
            <styled.Register onClick={() => goto("SIGNUP")}>
              <styled.RegisterText>회원가입</styled.RegisterText>
            </styled.Register>

            <styled.Login onClick={() => goto("SIGNIN")}>
              <styled.LoginIcon />
              <styled.LoginText>로그인</styled.LoginText>
            </styled.Login>
          </styled.RegistBox>
        )}
      </styled.Container>
    );
  }
}

class ClientTemplate extends Component {
  render() {
    const { userInfo, isLoggedIn } = this.props;
    return (
      <styled.Wrapper>
        <Header
          /*keyword={keyword}*/
          loggedIn={isLoggedIn}
          userInfo={userInfo}
        />
        {/* <Navbar /> */}
        {this.props.children &&
          React.cloneElement(this.props.children, {
            loggedIn: isLoggedIn,
            userInfo: userInfo,
          })}
      </styled.Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Authentication.status.isLoggedIn,
  userInfo: state.Authentication.status.userInfo,
  valid: state.Authentication.status.valid,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ClientTemplate);

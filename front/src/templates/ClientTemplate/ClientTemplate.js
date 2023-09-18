import React, { Component } from "react";
import { connect } from "react-redux";
import { goto } from "navigator";
import GetQueryString from "modules/GetQueryString";
import { alert } from "components/Commons/Alert/Alert";
import * as styled from "./styles";
import AlarmContainer from "containers/Header/AlarmContainer";
import Message from "components/Header/Message";
import io from "socket.io-client";
// import Socket from "modules/Socket";
// import host from "config";
import { Menu, Person, PersonAdd, PlusOne } from "@mui/icons-material";
import { common } from "@mui/material/colors";
//for modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import noface from "source/thumbnail.png";
import { version } from "../../../package.json";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  bgcolor: "background.paper",
  // border: "1px solid #EFEFEF",
  boxShadow: "0px 3px 6px #000000",
  display: "flex",
  justifyContent: "center",
  // p: 4,

  // margin-top: 50px !important;
  // margin-bottom: 50px !important;
  // min-width:85%;
  // height: max-content;
  // background: #FFFFFF 0% 0% no-repeat padding-box;
  // box-shadow:
  // border-radius: 10px;
  // opacity: 1;
};
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: decodeURIComponent(GetQueryString("keyword") || ""),
      alarm: {},
      modal: false,
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
  setVisibleMenuModal = () => this.setState({ modal: !this.state.modal });
  setKeyword = (keyword) => this.setState({ keyword: keyword });

  render() {
    const { loggedIn, userInfo } = this.props;
    const { keyword, modal } = this.state;
    console.log(this.props, this.state);

    return (
      <React.Fragment>
        {modal && (
          <Modal open={modal} onClose={() => this.setState({ modal: false })}>
            <Box sx={style}>
              <Button onClick={() => goto("PLAY")}>놀기</Button>
              <Button onClick={() => goto("LEARN")}>배우기</Button>
              <Button onClick={() => goto("MAKE")}>만들기</Button>
            </Box>
          </Modal>
        )}

        <styled.Container>
          <div style={{ marginLeft: "20px" }}>
            <a onClick={() => goto("MAIN")} style={{ cursor: "pointer" }}>
              <styled.Logo type="mini" />
            </a>
          </div>
          <div className="hamburger">
            <Menu
              fontSize="large"
              sx={{ color: common.black }}
              onClick={() => this.setVisibleMenuModal()}
            />
          </div>
          <div className="row mainmenu">
            <styled.Play onClick={() => goto("PLAY")}>
              <styled.PlayText>놀기</styled.PlayText>
            </styled.Play>

            <styled.Learn onClick={() => goto("LEARN")}>
              <styled.LearnText>배우기</styled.LearnText>
            </styled.Learn>

            <styled.Make onClick={() => goto("MAKE")}>
              <styled.MakeText>만들기</styled.MakeText>
            </styled.Make>
          </div>

          <div
            style={{
              // border: "1px solid red",
              display: "flex",
              position: "relative",
              marginLeft: "9px",
              width: "100%",
            }}
            className="search"
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
                left: "5px",
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
                <styled.Register
                  className="smaller"
                  onClick={() => goto("CREATE-ITEM-DESKTOP")}
                >
                  {/* <PlusOne fontSize="large" sx={{ color: common.white }} /> */}
                  <b style={{ color: "white" }}>+</b>
                  <styled.RegisterText className="hide-when-narrow">
                    등록하기
                  </styled.RegisterText>
                </styled.Register>
                <styled.Nickname
                  className="smaller"
                  onClick={() => goto("MY-PAGE")}
                >
                  <styled.NicknameIcon
                    src={userInfo?.thumbnail?.l_img || noface}
                  />
                  <styled.NicknameText className="hide-when-narrow">
                    {userInfo?.nickName || "닉네임"}
                  </styled.NicknameText>
                </styled.Nickname>
              </styled.RegistBox>
            </React.Fragment>
          ) : (
            <styled.RegistBox>
              <styled.Register
                className="smaller"
                onClick={() => goto("SIGNUP")}
              >
                <PersonAdd fontSize="large" sx={{ color: common.white }} />

                <styled.RegisterText className="hide-when-narrow">
                  회원가입
                </styled.RegisterText>
              </styled.Register>

              <styled.Login className="smaller" onClick={() => goto("SIGNIN")}>
                {/* <styled.LoginIcon /> */}
                <Person fontSize="large" sx={{ color: common.white }} />
                <styled.LoginText className="hide-when-narrow">
                  로그인
                </styled.LoginText>
              </styled.Login>
            </styled.RegistBox>
          )}
        </styled.Container>
      </React.Fragment>
    );
  }
}
// 가장 작은 디바이스: < 576px
// 모바일 디바이스: <= 768px
// 태블릿 디바이스: 768px < x <= 992px
// 데스크탑: 992px < x <= 1200px
// 큰 화면 데스크탑: 1200px <

class ClientTemplate extends Component {
  render() {
    const { userInfo, isLoggedIn } = this.props;
    console.log(this.props);
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
        <span
          style={{ width: "max-content", marginLeft: "auto", color: "#777" }}
        >
          v.{version}
        </span>
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

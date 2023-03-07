import React, {Component} from "react";
import * as styled from './styles';
import { goto } from "navigator";
import NotificationContainer from "desktop/containers/NotificationContainer";
// import zoom from "resources/zoom.png";
// import { Icon } from "semantic-ui-react";
import GetQueryString from "modules/GetQueryString";



class Header extends React.Component {
  


  constructor(props) {
    super(props);
    this.state = {
      keyword: decodeURIComponent(GetQueryString("keyword") || ""),
      istoggled: false,
    };

    
    
  }
  setKeyword = (keyword) => this.setState({ keyword: keyword });
  // setIsToggled = () => this.setState({ isToggled: !this.state.isToggled });
  setIsToggled = () => { this.setState(prevState => ({istoggled: !!!prevState.istoggled}))}

  render() {
    const { loggedIn, userInfo } = this.props;
    const { keyword } = this.state;
    const { istoggled } = this.state;


    console.log(istoggled);
    


    return (
      <styled.Container>
        <div style={{ marginLeft: "20px" }}>
          <styled.Logo type="mini" onClick={() => goto("MAIN")} />
        </div>
        <styled.Header istoggled={istoggled}>
          {/* <nav className="navbar" style={{ display: istoggled ? "block" : "none" }}> */}
          <nav className="navbar" >
            {/* <ul className="header-ul" style={{ display: "flex", padding: "0px", listStyle: "none" }}> */}
            <ul className="header-ul">
              {/* <li>
              <div style={{ marginLeft: "20px" }}>
                <styled.Logo type="mini" onClick={() => goto("MAIN")} />
              </div>
            </li> */}
              <li>
                <styled.Play onClick={() => goto("PLAY")}>
                  <styled.PlayText>놀기</styled.PlayText>
                </styled.Play>
              </li>
              <li>
                <styled.Learn onClick={() => goto("LEARN")}>
                  <styled.LearnText>배우기</styled.LearnText>
                </styled.Learn>
              </li>
              <li>
                <styled.Make onClick={() => goto("MAKE")}>
                  <styled.MakeText>만들기</styled.MakeText>
                </styled.Make>
              </li>
            </ul>
            <styled.SearchBarDiv
            // style={{
            //   // border: "1px solid red",
            //   display: "flex",
            //   position: "relative",
            //   // flex:1,
            //   marginLeft: "9px",
            //   maxWidth: "750px",
            //   minWidth: "250px",
            //   width: "100%",
            //   // border: "1px solid black",
            // }}
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
                onChange={(e) => this.setKeyword(e.target.value.replace(".", ""))}
              />
              <styled.SearchExpText opacity={keyword ? 1 : 0.5}>
                경험 찾아보기
              </styled.SearchExpText>
            </styled.SearchBarDiv>
            <div style={{
              maxWidth: "150px",
              width: "100%",
              // border: "1px solid black",
            }}></div>
          </nav>
          <styled.Menu onClick={() => { this.setIsToggled(); }}/>
        </styled.Header>

        {/* <div style={{ marginLeft: "20px" }}>
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
            onChange={(e) => this.setKeyword(e.target.value.replace(".", ""))}
          />
          <styled.SearchExpText opacity={keyword ? 1 : 0.5}>
            경험 찾아보기
          </styled.SearchExpText>
        </div>  */}

        {loggedIn ? (
          <>
            {/* <NotificationIcon /> */}
            {userInfo && <NotificationContainer />}
            <styled.EmailIcon onClick={() => goto("MESSAGE")} />
            <styled.RegistBox>
              <styled.Register onClick={() => goto("CREATE-ITEM-DESKTOP")}>
                {/* <RegisterIcon /> */}
                <styled.RegisterText>경험등록</styled.RegisterText>
              </styled.Register>
              <styled.Nickname onClick={() => goto("MY-PAGE")}>
                <styled.NicknameIcon src={userInfo?.l_img} />
                <styled.NicknameText>{userInfo?.nick_name || "닉네임"}</styled.NicknameText>
              </styled.Nickname>
            </styled.RegistBox>
          </>
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


export default Header;

import React from "react";
import styled from "styled-components";
import { goto } from "navigator";
import logoRed from "resources/logo.png";
import nicknameprofileimg from "resources/NicknameProfileImg.png";
import notifications from "resources/notifications.png";
import email from "resources/email.png";
import NotificationContainer from "desktop/containers/NotificationContainer";
// import zoom from "resources/zoom.png";
// import { Icon } from "semantic-ui-react";
import LoginProfileIcon from "resources/profile_icon_183860.svg"
const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img.attrs({
  src: logoRed,
})`
  width: 99px;
  height: 99px;
  margin-left: 27px;
`;
const Play = styled.button`
  width: 159px;
  height: 43px;
  background: transparent linear-gradient(270deg, #ff8900 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
`;
const PlayText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  // margin-top: 1px;
  margin-left: 94px;
`;
const Learn = styled.button`
  background: transparent linear-gradient(270deg, #8800ff 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
  width: 159px;
  height: 43px;
  cursor: pointer;
  border: 0;
  outline: 0;
`;
const LearnText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  // margin-top: 1px;
  margin-left: 87px;
`;
const Make = styled.button`
  background: transparent linear-gradient(270deg, #0062ff 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 22px 22px 0px;
  opacity: 1;
  width: 159px;
  height: 43px;
  cursor: pointer;
  border: 0;
  outline: 0;
`;
const MakeText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  // margin-top: 1px;
  margin-left: 87px;
`;
const SearchExp = styled.input`
  background: #848484 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 1;
  width: 740px;
  height: 43px;
  cursor: pointer;
  border: 0;
  outline: 0;
  // margin-left: 9px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding-left: 35px;
  font: normal normal 500 16px/19px Pretendard;
`;
const SearchExpText = styled.div`
  font: normal normal 900 16px/19px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: right;
  position: absolute;
  right: 23px;
  top: 11px;
  z-index: 2;
  cursor: default;
  opacity: ${(prop) => prop.opacity || 1};
`;
const Register = styled.button`
  width: 156px;
  height: 42px;
  border-radius: 22px;
  background: #ff181b 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-right: 4px;
`;
const RegisterText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-right: 0px;
`;
const Login = styled.button`
  width: 156px;
  height: 42px;
  border-radius: 22px;
  background: #848484 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
  margin-right: 27px;
  position: relative;
`;
const LoginText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-right: 0px;
  margin-left: 21.1px;
`;
const LoginIcon = styled.div`
  width: 20px;
  height: 25px;
  position: absolute;
  top: 9.75px;
  left: 32.2px;
  // background-color: white;
  background-image: url(${LoginProfileIcon});
  background-size: cover;
  background-position: center center;
`;
const RegistBox = styled.div`
  display: flex;
  position: relative;
  font-size: 16px;
  margin-left: auto;
  margin-right: 27px;
`;
const NotificationIcon = styled.img.attrs({
  src: notifications,
})`
  width; 44.09px;
  height: 44.09px;
  margin-left: 66.69px;
`;
const EmailIcon = styled.img.attrs({
  src: email,
})`
  width: 44px;
  height: 45px;
  margin-left: 33.22px;
`;
const Nickname = styled.button`
  width: 156px;
  height: 42px;
  border-radius: 22px;
  background: #848484 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
  border: 0;
  outline: 0;
  // margin-right: 27px;
  position: relative;
`;
const NicknameIcon = styled.img.attrs({
  // src: nicknameprofileimg,
})`
  width: 43px;
  height: 43px;
  position: absolute;
  top: 0px;
  left: 0px;
  // background-color: white;
  border-radius: 100%;
  background-image: url(${(props) => props.src || nicknameprofileimg});
`;
const NicknameText = styled.div`
  font: normal normal 900 18px/21px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-right: 0px;
  margin-left: 31.38px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }
  setKeyword = (keyword) => this.setState({ keyword: keyword });
  render() {
    const { loggedIn, userInfo } = this.props;
    const { keyword } = this.state;

    return (
      <Container>
        <div style={{ marginLeft: "20px" }}>
          <Logo type="mini" onClick={() => goto("MAIN")} />
        </div>

        <Play onClick={() => goto("PLAY")}>
          <PlayText>놀기</PlayText>
        </Play>

        <Learn onClick={() => goto("LEARN")}>
          <LearnText>배우기</LearnText>
        </Learn>

        <Make onClick={() => goto("MAKE")}>
          <MakeText>만들기</MakeText>
        </Make>

        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            position: "relative",
            marginLeft: "9px",
          }}
        >
          <SearchExp
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
          <SearchExpText opacity={keyword ? 1 : 0.5}>
            경험 찾아보기
          </SearchExpText>
        </div>

        {loggedIn ? (
          <>
            {/* <NotificationIcon /> */}
            {userInfo && <NotificationContainer />}
            <EmailIcon onClick={() => goto("MESSAGE")} />
            <RegistBox>
              <Register onClick={() => goto("CREATE-ITEM-DESKTOP")}>
                {/* <RegisterIcon /> */}
                <RegisterText>경험등록</RegisterText>
              </Register>
              <Nickname onClick={() => goto("MY-PAGE")}>
                <NicknameIcon src={userInfo?.l_img} />
                <NicknameText>{userInfo?.nick_name || "닉네임"}</NicknameText>
              </Nickname>
            </RegistBox>
          </>
        ) : (
          <RegistBox>
            <Register onClick={() => goto("SIGNUP")}>
              <RegisterText>회원가입</RegisterText>
            </Register>

            <Login onClick={() => goto("SIGNIN")}>
              <LoginIcon />
              <LoginText>로그인</LoginText>
            </Login>
          </RegistBox>
        )}
      </Container>
    );
  }
}

export default Header;

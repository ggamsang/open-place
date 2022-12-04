import React, { useState } from "react";
import Logo from "../../../components/Commons/Logo";
import * as styled from "./styles";
import { InputNormal } from "../../../components/Commons/Input";
import { goto } from "../../../utils/navigator";
import cookie from "react-cookies";
import CheckBoxNormal from "../../../components/Commons/CheckBoxNormal";
import GradientButton from "../../../components/Commons/Button/GradientButton";
import ImageButton from "../../../components/Commons/Button/ImageButton";
const Login = { ready: "READY", failed: "FAILED", success: "SUCCESS" };

function SignInPage() {
  const [login, setLoginState] = useState(Login.ready);
  const [user_id, setUserId] = useState(cookie.load("saveid") || "");
  const [password, setPassword] = useState(cookie.load("savepassword") || "");
  const [saveID, setSaveId] = useState(
    cookie.load("saveid") != null ? true : false
  );
  const [saveLogin, setSaveLogin] = useState(
    cookie.load("savepassword") != null ? true : false
  );
  const handleChangeId = (e) => setUserId(e.target.value);
  const onClickedClear = () => {
    setUserId("");
    setLoginState(Login.ready);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      if (user_id && password != "") {
        SignIn();
      }
    }
  };
  const onClickedLogin = () => {
    SignIn();
  };
  const SignIn = () => {
    if (saveID === true) {
      cookie.save("saveid", user_id, {
        path: "/",
      });
    }
    //로그인저장
    if (saveLogin === true) {
      cookie.save("saveid", user_id, {
        path: "/",
      });
      cookie.save("savepassword", password, {
        path: "/",
      });
    }
    setLoginState(Login.ready);

    // SignInRequest({ id: user_id, password: password });
    // this.props.SignInRequest &&
    //   this.props
    //     .SignInRequest({ id: user_id, password: password })
    //     .then((data) => {
    //       if (data.success) {
    //         // SetSession(TokenName);
    //         this.setState({ login: Login.success });
    //         goto("MAIN");
    //       } else {
    //         this.setState({ login: Login.failed });
    //       }
    //     });
    return;
  };
  const handleChangePassword = (e) => setPassword(e.target.value);
  const onClickedClearPassword = () => {
    setPassword("");
    setLoginState(Login.ready);
  };
  const onCheckSaveLogin = () => {
    !saveLogin &&
      cookie.remove("saveid", { path: "/" }) &&
      cookie.remove("savepassword", { path: "/" });
    setSaveLogin(!saveLogin);
  };
  const onCheckSaveID = () => {
    !saveID && cookie.remove("saveid", { path: "/" });
    setSaveId(!saveID);
  };
  return (
    <styled.Wrapper>
      <div
        className="box alignCenter justifyCenter"
        style={{ paddingTop: "39px" }}
      >
        <Logo
          type="big_image"
          onClickEvent={() => (window.location.href = "/")}
        />
      </div>

      <styled.Warning warning={login === Login.failed}>
        {login === Login.failed && (
          <Fade>
            <div>{"아이디 혹은 비밀번호가 틀립니다."}</div>
          </Fade>
        )}
      </styled.Warning>

      <div className="box column alignCenter">
        <div className="inputBox">
          <InputNormal
            style={{ boxSizing: "border-top", marginBottom: "12px" }}
            onChangeValue={handleChangeId}
            onClear={onClickedClear}
            value={user_id}
            placeholder={"아이디를 입력하세요"}
            onKeyPress={handleEnterKey}
            width={328}
            height={48}
            fontSize={17}
            color={"#EAF2FE"}
            radius={3}
            warning={login === Login.failed}
          />
          <InputNormal
            type="password"
            onChangeValue={handleChangePassword}
            onClear={onClickedClearPassword}
            value={password}
            placeholder={"비밀번호를 입력하세요"}
            onKeyPress={handleEnterKey}
            width={328}
            height={48}
            fontSize={17}
            color={"#EAF2FE"}
            radius={3}
            warning={login === Login.failed}
          />
        </div>

        <div
          className="checkBoxRow"
          style={{
            marginBottom: `${login === Login.failed ? "20px" : "53px"}`,
          }}
        >
          <CheckBoxNormal
            id="saveid"
            style={{ marginRight: "15px" }}
            text="로그인 유지"
            value={saveID}
            onClickEvent={onCheckSaveID}
          />
          <CheckBoxNormal
            id="savelogin"
            style={{ marginLeft: "15px" }}
            text="아이디 저장"
            value={saveLogin}
            onClickEvent={onCheckSaveLogin}
          />
        </div>
        {login === Login.failed ? (
          <React.Fragment>
            <Fade>
              <GradientButton
                onClickEvent={() => goto("FINDPW")}
                style={{ marginBottom: "12px" }}
                text="아이디/비밀번호 찾기"
                width={240}
                height={42}
                front={"#365AF1"}
                end={"#FF4343"}
                deg={240}
                radius={28}
              />
              <GradientButton
                onClickEvent={onClickedLogin}
                style={{ marginBottom: "12px" }}
                text="로그인"
                width={240}
                height={42}
                front={"#FF4343"}
                end={"#365AF1"}
                deg={270}
                radius={28}
              />
              <GradientButton
                onClickEvent={() => goto("SIGNUP")}
                style={{ marginBottom: "12px" }}
                text="회원가입"
                width={240}
                height={42}
                front={"#365AF1"}
                end={"#FF4343"}
                deg={270}
                radius={28}
              />
            </Fade>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <GradientButton
              onClickEvent={onClickedLogin}
              style={{ marginBottom: "20px" }}
              text="로그인"
              width={292}
              height={52}
              front={"#FF4343"}
              end={"#365AF1"}
              deg={270}
              radius={28}
            />
            <GradientButton
              onClickEvent={() => goto("SIGNUP")}
              style={{ marginBottom: "20px" }}
              text="회원가입"
              width={292}
              height={52}
              front={"#365AF1"}
              end={"#FF4343"}
              deg={270}
              radius={28}
            />
          </React.Fragment>
        )}
        {/* <GradientButton
            onClickEvent={() => goto("SIGNUP")}
            style={{ marginBottom: "20px" }}
            text="아이디/비밀번호 찾기"
            width={292}
            height={52}
            front={'#365AF1'}
            end={'#FF4343'}
            deg={270}
            radius={28} />
          <GradientButton
            onClickEvent={() => this.onClickLogin()}
            style={{ marginBottom: "20px" }}
            text="로그인"
            width={292}
            height={52}
            front={'#FF4343'}
            end={'#365AF1'}
            deg={270}
            radius={28} />
          <GradientButton
            onClickEvent={() => goto("SIGNUP")}
            style={{ marginBottom: "20px" }}
            text="회원가입"
            width={292}
            height={52}
            front={'#365AF1'}
            end={'#FF4343'}
            deg={270}
            radius={28} /> */}
        <div className="login_button_wrap">
          <ImageButton
            style={{ marginRight: "6px", marginLeft: "6px" }}
            width={50}
            height={50}
            color={"#1877F2"}
            radius={25}
          />
          <ImageButton
            style={{ marginRight: "6px", marginLeft: "6px" }}
            width={50}
            height={50}
            color={"#F14336"}
            radius={25}
          />
        </div>
      </div>
    </styled.Wrapper>
  );
}

export default SignInPage;

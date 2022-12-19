import React from "react";
import { useState } from "react";
import Logo from "../Logo";
import { Wrapper } from "./styles";
import { InputLine, InputPhone, InputNormal } from "../Input";
import GradientButton from "../Button/GradientButton";
import CheckBoxNormal from "../CheckBoxNormal";
import host from "../../../config";
import { SetSession } from "../../../mobile/modules";
import { TokenName } from "../../../constants";
import { goto } from "../../../utils/navigator";

const SignUp = () => {
  const [tab, setTab] = useState(2);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phoneChecked, setPhoneChecked] = useState(false);
  const [phone, setPhone] = useState("");
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nick_name, setNickName] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const handleFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhoneNumber = (e) => {
    const { value } = e.target;
    setPhone(value.length <= 8 ? value : "");
    setPhoneChecked(value.length >= 8 ? true : false);
  };
  const onClickedSelfAuthenication = () => {
    setTab(2);
  };
  const gotoSignIn = () => (window.location.href = "/signin");
  const onClickedAlreadyHave = () => gotoSignIn();
  const onClickedLogo = () => gotoSignIn();
  const handleChangeId = (e) => setUserId(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePassword2 = (e) => setPassword2(e.target.value);
  const handleChangeNickname = (e) => setNickName(e.target.value);
  const onClickedAllAgree = () => {
    setAgreeAll(!agreeAll);
    setAgree1(!agreeAll);
    setAgree2(!agreeAll);
  };
  const onClickedAgree1 = () => setAgree1(!agree1);
  const onClickedAgree2 = () => setAgree2(!agree2);
  const SignUp = () => {
    if (user_id === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (!agree1 || !agree2) {
      alert("이용약관을 동의해주세요.");
      return;
    }

    if (password != password2) {
      alert("비밀번호를 확인하여주세요.");
      return;
    }

    if (nick_name === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }

    const data = {
      id: user_id,
      password: password,
      nick_name: nick_name,
    };
    function SignUpRequest(data) {
      const url = `${host}/user/signUp`;
      const request = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      };
      return fetch(url, request)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.success) {
            SetSession(TokenName, res.detail.token);
          }
          return res;
        })
        .catch((err) => {
          return { detail: err, success: false };
        });
    }

    // ---- sign up request ---- //
    SignUpRequest(data).then((res) => {
      if (res.success) {
        alert("회원가입을 축하드립니다.");
        goto("MAIN");
      } else {
        console.error(res.detail);
        alert("회원가입실패");
      }
    });
    // ----               ---- //
  };

  return (
    <Wrapper>
      {/* logo */}
      <div className="box alignCenter justifyCenter">
        <Logo onClickEvent={onClickedLogo} type="small" text={"OPEN PLACE"} />
      </div>

      {/*본인인증 */}
      {tab === 1 && (
        <div className="box column alignCenter">
          <div className="inputBox">
            <div style={{ marginTop: "20px" }} className="label">
              이름
            </div>
            <InputLine
              onChange={handleFirstName}
              placeholder="이름"
              value={first_name}
              paddingLeft={0}
              width={328}
              height={40}
              fontSize={14}
              radius={3}
            />
            <div style={{ marginTop: "20px" }} className="label">
              성
            </div>
            <InputLine
              onChange={handleLastName}
              placeholder="성"
              value={last_name}
              paddingLeft={0}
              width={328}
              height={40}
              fontSize={14}
              radius={3}
            />
            <div style={{ marginTop: "33px" }} />
            <InputPhone
              onChange={handlePhoneNumber}
              value={phone}
              width={303}
              height={40}
              checked={phoneChecked}
            />
          </div>
          <div style={{ marginTop: "30px" }} className="buttonWrap">
            <GradientButton
              onClickEvent={onClickedSelfAuthenication}
              text="본인인증하기"
              width={292}
              height={52}
              front={"#FF4343"}
              end={"#365AF1"}
              deg={270}
              radius={28}
            />
            <div className="text_">이미 계정이 있으신가요?</div>
            <GradientButton
              onClickEvent={onClickedAlreadyHave}
              style={{ marginBottom: "20px" }}
              text="로그인"
              width={292}
              height={52}
              front={"#FF4343"}
              end={"#365AF1"}
              deg={270}
              radius={28}
            />
          </div>
        </div>
      )}

      {/*  */}
      {tab === 2 && (
        <div className="box column alignCenter">
          <div className="inputBox" style={{ marginTop: "32px" }}>
            <InputNormal
              style={{ marginBottom: "16px" }}
              onChange={handleChangeId}
              value={user_id}
              placeholder={"아이디를 입력하세요"}
              width={328}
              height={48}
              fontSize={17}
              color={"#EAF2FE"}
              radius={3}
            />

            <InputNormal
              style={{ marginBottom: "16px" }}
              onChange={handleChangePassword}
              value={password}
              placeholder={"비밀번호를 입력하세요"}
              width={328}
              height={48}
              fontSize={17}
              color={"#EAF2FE"}
              radius={3}
            />

            <InputNormal
              style={{ marginBottom: "16px" }}
              onChangeValue={handleChangePassword2}
              value={password2}
              placeholder={"비밀번호를 한번 더 입력하세요"}
              width={328}
              height={48}
              fontSize={17}
              color={"#EAF2FE"}
              radius={3}
            />

            <InputNormal
              style={{ marginBottom: "16px" }}
              onChange={handleChangeNickname}
              value={nick_name}
              placeholder={"닉네임 입력하세요"}
              width={328}
              height={48}
              fontSize={17}
              color={"#EAF2FE"}
              radius={3}
            />
          </div>
          <div className="checkBoxWrap">
            <div style={{ margin: "auto", width: "328px" }}>
              <CheckBoxNormal
                style={{ marginLeft: "0px", marginBottom: "13px" }}
                text="전체동의"
                value={agreeAll}
                onClickEvent={onClickedAllAgree}
              />
              <CheckBoxNormal
                style={{ marginLeft: "0px", marginBottom: "13px" }}
                text="이용약관"
                value={agree1}
                onClickEvent={onClickedAgree1}
              />
              <CheckBoxNormal
                style={{ marginLeft: "0px", marginBottom: "13px" }}
                text="개인정보 수집 및 이용"
                // text="개인정보 수집 및 이용 (선택)"
                value={agree2}
                onClickEvent={onClickedAgree2}
              />
            </div>
          </div>
          <div className="buttonWrap">
            <GradientButton
              onClickEvent={SignUp}
              text="가입하기"
              width={292}
              height={52}
              front={"#365AF1"}
              end={"#FF4343"}
              deg={270}
              radius={28}
            />
            <div className="text_">이미 계정이 있으신가요?</div>
            <GradientButton
              onClickEvent={gotoSignIn}
              style={{ marginBottom: "20px" }}
              text="로그인"
              width={292}
              height={52}
              front={"#FF4343"}
              end={"#365AF1"}
              deg={270}
              radius={28}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default SignUp;

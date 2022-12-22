import React, { useEffect, useState } from "react";
import { goto } from "../../utils/navigator";
import Logo from "../Commons/Logo";
import * as styled from "./styles";

const Header = (props) => {
  const [keyword, setKeyword] = useState("");
  const [loggedIn, setLoggedIn] = useState(props?.loggedIn);

  useEffect(() => {
    setLoggedIn(props?.loggedIn);
  }, [props]);

  return (
    <styled.Container>
      <div style={{ marginLeft: "20px" }}>
        <Logo type="mini" onClickEvent={() => goto("MAIN")} />
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
        {/* <i class="search icon"></i> */}
        {/* <styled.SearchExpIcon /> */}
        <styled.SearchExp
          value={keyword}
          onKeyUp={(e) =>
            e.key === "Enter" &&
            (keyword.trimStart().trimEnd() === ""
              ? alert("검색키워드를 입력하세요")
              : true)
              ? goto("SEARCH", keyword)
              : null
          }
          onChange={(e) => setKeyword(e.target.value.replace(".", ""))}
        />
        <styled.SearchExpText opacity={keyword ? 1 : 0.5}>
          경험 찾아보기
        </styled.SearchExpText>
      </div>
      {loggedIn ? (
        <>
          <styled.NotificationIcon />
          <styled.EmailIcon onClick={() => goto("MESSAGE")} />
          <styled.RegistBox>
            <styled.Register onClick={() => goto("CREATE-ITEM-DESKTOP")}>
              {/* <styled.RegisterIcon /> */}
              <styled.RegisterText>경험등록</styled.RegisterText>
            </styled.Register>
            <styled.Nickname onClick={() => goto("MY-PAGE")}>
              <styled.NicknameIcon src={props?.userInfo?.l_img} />
              <styled.NicknameText>
                {props?.userInfo?.nick_name || "닉네임"}
              </styled.NicknameText>
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
};

export default Header;

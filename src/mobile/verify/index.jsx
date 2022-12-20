// import {
//   AUTH_CHECK_TOKEN,
//   AUTH_CHECK_TOKEN_FAILURE,
//   AUTH_CHECK_TOKEN_SUCCESS,
// } from "../actions/ActionTypes";
// import host from "../../config";
// import { authGET, TokenName } from "../../constants";
// import { GetSession, SetSession } from "../modules";
// import { goto } from "../../utils/navigator";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// export default function NeedToLogin(props) {
//   const dispatch = useDispatch();
//   const [giveTry, setGiveTry] = useState(false);
//   // const state = useSelector(state => state.Authentication.status)

//   useEffect(() => {
//     if (giveTry === false) {
//       dispatch({ type: AUTH_CHECK_TOKEN });
//       GetSession(TokenName)
//         .then((token) => {
//           // console.log(token);
//           fetch(`${host}/user/check`, authGET(token))
//             .then((res) => res.json())
//             .then((res) => {
//               if (res.success) {
//                 const { info, token: newtoken } = res;
//                 dispatch({
//                   type: AUTH_CHECK_TOKEN_SUCCESS,
//                   payload: { info, newtoken },
//                 });
//               } else {
//                 dispatch({
//                   type: AUTH_CHECK_TOKEN_FAILURE,
//                 });
//                 alert("잘못된 접근입니다.\n로그인 후 다시 시도해주세요.");
//                 SetSession(TokenName, null);
//                 goto("LOGIN");
//               }
//             });
//         })
//         .catch(() => {
//           alert("로그인이 필요한 페이지입니다.");
//           goto("LOGIN");
//         });
//       setGiveTry(true);
//     }
//   }, [dispatch, giveTry]);

//   return giveTry ? (
//     props
//   ) : (
//     <Wrapper>
//       <div className="gradient"></div>
//       <h4> 유저정보를 확인하고 있습니다. </h4>
//     </Wrapper>
//   );
// }
import styled from "styled-components";
import React, { useState } from "react";
import { useEffect } from "react";
import { TokenName } from "../../constants";
import { goto } from "../../utils/navigator";
import { GetSession } from "../modules";
const Wrapper = styled.div`
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  margin: auto;
  .blanker {
    height: 44px;
  }
  .gradient {
    width: 100%;
    height: 100px;
    background: linear-gradient(69deg, #501b1b, #655ffa, #d30e0e);
    background-size: 200% 200%;
    background-position: top right;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      margin: auto;
      margin-top: 18px;
      color: white;
      width: max-content;
      text-align: center;
      font-family: Pretendard;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
    }

    margin-bottom: 20px;
  }
`;
export default function NeedToLogin(child) {
  const [valid, setValid] = useState(null);

  useEffect(() => {
    GetSession(TokenName)
      .then((token) => {
        if (token) {
          setValid(true);
        } else {
          setValid(false);
          alert("유효하지않는 인증정보입니다. 다시로그인해주세요.");
          goto("SIGNIN");
        }
      })
      .catch((e) => {
        setValid(false);
        alert("로그인해주세요.");
        goto("SIGNIN");
      });
  }, []);

  return valid === null ? (
    <Wrapper>
      <div className="gradient"></div>
      <h4> 유저정보를 확인하고 있습니다. </h4>
    </Wrapper>
  ) : valid === true ? (
    child
  ) : (
    <Wrapper>
      <div className="gradient"></div>
      <h4>잘못된 접근입니다.</h4>
    </Wrapper>
  );
}

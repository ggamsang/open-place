import * as types from "./ActionTypes";
import host from "../../config";
import { SetSession } from "../modules";
import { authGET, TokenName } from "../../constants";

// action creators
const SignIn = () => ({ type: types.AUTH_SIGNIN });
const SignOut = () => ({ type: types.AUTH_SIGNOUT });
const SignInSuccess = (token) => ({
  type: types.AUTH_SIGNIN_SUCCESS,
  token: token,
});
const SignInFailure = (detail) => ({
  type: types.AUTH_SIGNIN_FAILURE,
  success: false,
  detail: detail,
});
// const SignInIsNotMember = () => ({ type: AUTH_SIGNIN_IS_NOT_MEMBER, success: false, });
// const SignInIsNotPassword = () => ({ type: AUTH_SIGNIN_IS_NOT_PASSWORD, success: false, });
const CheckToken = () => ({ type: types.AUTH_CHECK_TOKEN });
const CheckTokenSuccess = (info, token) => ({
  type: types.AUTH_CHECK_TOKEN_SUCCESS,
  payload: { info, token },
});
const CheckTokenFailure = () => ({ type: types.AUTH_CHECK_TOKEN_FAILURE });
const CheckEmail = () => ({ type: types.AUTH_CHECK_EMAIL });
const CheckEmailSuccess = () => ({
  type: types.AUTH_CHECK_EMAIL_SUCCESS,
  checkEmail: true,
});
const CheckEmailFailure = (err) => ({
  type: types.AUTH_CHECK_EMAIL_FAILURE,
  checkEmail: false,
  error: err,
});
const CheckNickName = () => ({ type: types.AUTH_CHECK_NICKNAME });
const CheckNickNameSuccess = () => ({
  type: types.AUTH_CHECK_NICKNAME_SUCCESS,
  checkNickName: true,
});
const CheckNickNameFailure = (err) => ({
  type: types.AUTH_CHECK_NICKNAME_FAILURE,
  checkNickName: false,
  error: err,
});
export const SetActive = (active) => ({ type: types.SET_ACTIVE, active });

// api
export function SignOutRequest() {
  return (dispatch) => {
    SetSession(TokenName, null);
    return dispatch(SignOut());
  };
}
export function SignInRequest(data) {
  return (dispatch) => {
    dispatch(SignIn());
    const url = `${host}/user/signIn`;
    const opt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    return fetch(url, opt)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const { token } = res.detail;
          SetSession(TokenName, token);
          dispatch(SignInSuccess(token));
          return res;
        } else {
          dispatch(SignInFailure(res.detail));
          return res;
        }
      })
      .catch((error) => dispatch(SignInFailure(error)));
  };
}
export function CheckTokenRequest(token) {
  return (dispatch) => {
    dispatch(CheckToken());
    return (
      fetch(`${host}/user/check`, authGET(token))
        // { headers: { 'x-access-token': token, 'Content-Type': 'application/json' } })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          return res.success
            ? dispatch(CheckTokenSuccess(res.info, token))
            : dispatch(CheckTokenFailure());
        })
        .catch((_) => dispatch(CheckTokenFailure()))
    );
  };
}
export function CheckEmailRequest(email) {
  return (dispatch) => {
    dispatch(CheckEmail());
    return fetch(`${host}/users/checkEmail`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          return dispatch(CheckEmailSuccess());
        } else {
          return dispatch(CheckEmailFailure(res.error));
        }
      })
      .catch((err) => dispatch(CheckEmailFailure(err)));
  };
}
export function CheckNickNameRequest(token, nick_name) {
  return (dispatch) => {
    dispatch(CheckNickName());
    const url = `${host}/user/checkNickName`;
    return fetch(url, {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ nick_name: nick_name }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          return dispatch(CheckNickNameSuccess());
        } else {
          return dispatch(CheckNickNameFailure(res.error));
        }
      })
      .catch((err) => dispatch(CheckNickNameFailure(err)));
  };
}

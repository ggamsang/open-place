import * as types from "actions/ActionTypes";
import host from "config"
import { SetSession } from "modules/Sessions"
import { TokenName } from "constant";

// action creators
const SignIn = () => ({ type: types.AUTH_SIGNIN });
const SignOut = () => ({ type: types.AUTH_SIGNOUT });
const SignInSuccess = (token) => ({ type: types.AUTH_SIGNIN_SUCCESS, token: token });
const SignInFailure = (detail) => ({ type: types.AUTH_SIGNIN_FAILURE, success: false, detail: detail });
// const SignInIsNotMember = () => ({ type: AUTH_SIGNIN_IS_NOT_MEMBER, success: false, });
// const SignInIsNotPassword = () => ({ type: AUTH_SIGNIN_IS_NOT_PASSWORD, success: false, });
const CheckToken = () => ({ type: types.AUTH_CHECK_TOKEN });
const CheckTokenSuccess = (info, token) => ({ type: types.AUTH_CHECK_TOKEN_SUCCESS, info, token });
const CheckTokenFailure = () => ({ type: types.AUTH_CHECK_TOKEN_FAILURE });
const CheckEmail = () => ({ type: types.AUTH_CHECK_EMAIL });
const CheckEmailSuccess = () => ({ type: types.AUTH_CHECK_EMAIL_SUCCESS, checkEmail: true });
const CheckEmailFailure = (err) => ({ type: types.AUTH_CHECK_EMAIL_FAILURE, checkEmail: false, error: err });
const CheckNickName = () => ({ type: types.AUTH_CHECK_NICKNAME });
const CheckNickNameSuccess = () => ({ type: types.AUTH_CHECK_NICKNAME_SUCCESS, checkNickName: true });
const CheckNickNameFailure = (err) => ({ type: types.AUTH_CHECK_NICKNAME_FAILURE, checkNickName: false, error: err });
export const SetActive = (active) => ({ type: types.SET_ACTIVE, active })

// api
export function SignOutRequest() {
  return (dispatch) => {
    return dispatch(SignOut())
  }
}
export function SignInRequest(data) {
  // console.log(`${host}/user/signIn`, data)
  return (dispatch) => {
    dispatch(SignIn());
    return fetch(`${host}/user/signIn`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          const { token } = res.detail;
          SetSession(TokenName, token);
          dispatch(SignInSuccess(token));
          return res;
        } else {
          dispatch(SignInFailure(res.detail))
          return res;
        }
      })
      .catch(error => dispatch(SignInFailure(error)))
  }
}
export function CheckTokenRequest(token) {
  return (dispatch) => {
    dispatch(CheckToken());
    return fetch(`${host}/users/check`, { headers: { 'x-access-token': token, 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(res => res.success ? dispatch(CheckTokenSuccess(res.info, token)) : dispatch(CheckTokenFailure()))
      .catch(_ => dispatch(CheckTokenFailure()));
  };
}
export function CheckEmailRequest(email) {
  return (dispatch) => {
    dispatch(CheckEmail());
    return fetch(`${host}/users/checkEmail`, { headers: { 'Content-Type': 'application/json' }, method: "POST", body: JSON.stringify(email) })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          return dispatch(CheckEmailSuccess());
        } else {
          return dispatch(CheckEmailFailure(res.error));
        }
      })
      .catch(err => dispatch(CheckEmailFailure(err)));
  };
}
export function CheckNickNameRequest(NickName) {
  return (dispatch) => {
    dispatch(CheckNickName());
    return fetch(`${host}/users/checkNickName`, { headers: { 'Content-Type': 'application/json' }, method: "POST", body: JSON.stringify(NickName) })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          return dispatch(CheckNickNameSuccess());
        } else {
          return dispatch(CheckNickNameFailure(res.error));
        }
      })
      .catch(err => dispatch(CheckNickNameFailure(err)));
  };
}

import * as types from "../ActionTypes";
import host from "../../../config";
import { SetSession } from "../../modules";
import { TokenName } from "../../../constants";

export function SignInRequest(data) {
  return (dispatch) => {
    dispatch(SignIn());
    return fetch(`${host}/users/signIn`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(function (res) {
        console.log(res);
        if (res.isMember && res.isPassword) {
          SetSession(TokenName, res.token);
          return dispatch(SignInSuccess(res.token));
        } else {
          if (!res.isMember) {
            return dispatch(SignInIsNotMember());
          } else if (!res.isPassword) {
            return dispatch(SignInIsNotPassword());
          }
        }
      })
      .catch((error) => {
        return dispatch(SignInFailure());
      });
  };
}

export function SignIn() {
  return {
    type: types.AUTH_SIGNIN,
  };
}

export function SignInIsNotMember() {
  return {
    type: types.AUTH_SIGNIN_IS_NOT_MEMBER,
    success: false,
  };
}

export function SignInIsNotPassword() {
  return {
    type: types.AUTH_SIGNIN_IS_NOT_PASSWORD,
    success: false,
  };
}

export function SignInSuccess(token) {
  return {
    type: types.AUTH_SIGNIN_SUCCESS,
    success: true,
    token: token,
  };
}

export function SignInFailure() {
  return {
    type: types.AUTH_SIGNIN_FAILURE,
    success: false,
  };
}

export function SignOutRequest() {
  return (dispatch) => {
    return dispatch(SignOut());
  };
}

export function SignOut() {
  return {
    type: types.AUTH_SIGNOUT,
  };
}

export function SignUpRequest(data) {
  return (dispatch) => {
    dispatch(SignUp());
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
        dispatch(SignUpSuccess());
        return res;
      })
      .catch((err) => {
        return dispatch(SignUpFailure(err));
      });
  };
}

export function SignUp() {
  return { type: types.AUTH_SIGNUP };
}
export function SignUpSuccess() {
  return { type: types.AUTH_SIGNUP_SUCCESS };
}
export function SignUpFailure() {
  return { type: types.AUTH_SIGNUP_FAILURE };
}

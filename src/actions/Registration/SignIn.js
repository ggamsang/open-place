import * as types from "actions/ActionTypes";
import { SetSession } from "modules/Sessions";
import host from "config";
import { TokenName } from "constant";

export function SignInRequest(data) {
    return (dispatch) => {
        dispatch(SignIn());
        return fetch(`${host}/users/signIn`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify(data) })
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
                if (res.isMember && res.isPassword) {
                    SetSession(TokenName, res.token);
                    return dispatch(SignInSuccess(res.token));
                } else {
                    if (!res.isMember) {
                        return dispatch(SignInIsNotMember())
                    } else if (!res.isPassword) {
                        return dispatch(SignInIsNotPassword())
                    }
                };
            }).catch((error) => {
                return dispatch(SignInFailure());
            })
    }
};

export function SignIn() {
    return {
        type: types.AUTH_SIGNIN
    }
};

export function SignInIsNotMember() {
    return {
        type: types.AUTH_SIGNIN_IS_NOT_MEMBER,
        success: false,
    }
};

export function SignInIsNotPassword() {
    return {
        type: types.AUTH_SIGNIN_IS_NOT_PASSWORD,
        success: false,
    }
}

export function SignInSuccess(token) {
    return {
        type: types.AUTH_SIGNIN_SUCCESS,
        success: true,
        token: token
    }
};

export function SignInFailure() {
    return {
        type: types.AUTH_SIGNIN_FAILURE,
        success: false
    }
};

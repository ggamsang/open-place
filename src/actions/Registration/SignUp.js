import * as types from "actions/ActionTypes";
import host from "config";
import { SetSession } from "modules/Sessions";
import { TokenName } from "constant";

export function SignUpRequest(data) {
    return (dispatch) => {
        dispatch(SignUp());
        const url = `${host}/user/signUp`
        const request = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(data)
        }
        return fetch(url, request)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.success) {
                    SetSession(TokenName, res.detail.token);
                }
                dispatch(SignUpSuccess());
                return res;
            })
            .catch(err => {
                return dispatch(SignUpFailure(err));
            });
    }
}

export function SignUp() { return { type: types.AUTH_SIGNUP } };
export function SignUpSuccess() { return { type: types.AUTH_SIGNUP_SUCCESS } };
export function SignUpFailure() { return { type: types.AUTH_SIGNUP_FAILURE } };

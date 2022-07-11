// import React from 'react'
// import { connect } from 'react-redux'
// import { SetSession, GetSession } from "modules/Sessions"
// import { CheckTokenRequest } from 'actions/Authentication'

// export default function NeedToLogin(Component) {
//     class AuthenticatedComponent extends React.Component {
//         // componentWillMount() {
//         //     const { TokenName } = require("constant");
//         //     if (this.props.token != null) {
//         //         SetSession(TokenName, this.props.token)
//         //     }
//         //     GetSession(TokenName)
//         //         .then(token => {
//         //             this.props.CheckTokenRequest(token)
//         //                 .then((data) => {
//         //                     if (data.type === "AUTH_CHECK_TOKEN_FAILURE") {
//         //                         const { TokenName } = require("constant");
//         //                         SetSession(TokenName, null)
//         //                         return this._checkAndRedirect();
//         //                     }
//         //                     return this._checkAndRedirect();
//         //                 })
//         //         })
//         //         .catch(err => {
//         //             console.error(err);
//         //             this._checkAndRedirect();
//         //         });
//         // }
//         // async _checkAndRedirect() {
//         //     if (!this.props.valid) {
//         //         this.props.history.push("/signin");
//         //     }
//         // }
//         render() {
//             return (
//                 <div className="authenticated">
//                     {this.props.valid ? <Component {...this.props} /> : null}
//                 </div>
//             )
//         }
//     }
//     const mapStateToProps = (state) => {
//         return {
//             token: state.Authentication.status.token,
//             valid: state.Authentication.status.valid
//         };
//     };
//     const mapDispatchToProps = (dispatch) => {
//         return {
//             CheckTokenRequest: (token) => {
//                 return dispatch(CheckTokenRequest(token));
//             }
//         };
//     };
//     return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
// };

import { AUTH_CHECK_TOKEN, AUTH_CHECK_TOKEN_FAILURE, AUTH_CHECK_TOKEN_SUCCESS } from "actions/ActionTypes";
import host from "config";
import { authGET, TokenName } from "constant";
import { GetSession, SetSession } from "modules/Sessions";
import { goto } from "navigator";
import { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import styled from "styled-components";

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
        background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
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
export default function NeedToLogin(props) {
    const [giveTry, setGiveTry] = useState(false);
    // const state = useSelector(state => state.Authentication.status)
    const dispatch = useDispatch();

    useEffect(() => {
        if (giveTry == false) {
            dispatch({ type: AUTH_CHECK_TOKEN, });
            GetSession(TokenName)
                .then(token => {
                    console.log(token);
                    fetch(`${host}/user/check`, authGET(token))
                        .then(res => res.json())
                        .then(res => {
                            if (res.success) {
                                const { info, token: newtoken } = res;
                                dispatch({
                                    type: AUTH_CHECK_TOKEN_SUCCESS,
                                    payload: { info, newtoken }
                                });
                            } else {
                                dispatch({
                                    type: AUTH_CHECK_TOKEN_FAILURE
                                });
                                alert("잘못된 접근입니다.\n로그인 후 다시 시도해주세요.");
                                SetSession(TokenName, null);
                                goto("LOGIN");
                            }
                        })
                })
                .catch(() => {
                    alert('로그인이 필요한 페이지입니다.');
                    goto("LOGIN");
                })
            setGiveTry(true);
        }
    });

    return (
        giveTry
            ? props
            : <Wrapper>
                <div className='gradient'></div>
                <h4> 유저정보를 확인하고 있습니다. </h4>
            </Wrapper>);
}
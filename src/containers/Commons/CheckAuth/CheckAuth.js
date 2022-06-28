import React, { Component } from "react";
import { connect } from "react-redux";
import { CheckTokenRequest, SetActive } from "actions/Authentication";
import { SignOutRequest } from "actions/Registration";
import { SetSession, GetSession } from "modules/Sessions";
import { Dimmer, Loader } from "semantic-ui-react";
import { TokenName } from "constant";

export default function CheckAuth(Components) {
    class AuthenticatedComponent extends Component {
        state = {
            loading: true
        }
        componentDidMount() {
            this.checkAuth();
        }
        componentDidUpdate(nextProps) {
            if (this.props.token !== nextProps.token) {
                this.checkAuth();
            }
        }

        async checkAuth() {
            if (this.props.token != null) {
                SetSession(TokenName, this.props.token);
            }
            GetSession(TokenName)
                .then((token) => {
                    this.props.CheckTokenRequest(token)
                        .then(async data => {
                            // console.log('check token request then ', data);
                        })
                        .catch(async e => {
                            // console.log('check token request catch', e);
                        });
                }).catch(async data => {
                    // console.log('aaaaaa check token request catch', data);
                    this.props.SignOutRequest();
                })
                .finally(() => {
                    this.setState({ loading: false });
                });
        }

        render() {
            return !this.state.loading
                ? <Components {...this.props} />
                : <Dimmer active>
                    <Loader />
                </Dimmer>
        }
    }
    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.Authentication.status.isLoggedIn,
            token: state.Authentication.status.token,
            loading: state.Authentication.status.loading,
            userInfo: state.Authentication.status.userInfo,
            userInfo: state.Authentication.status.valid,
            isActive: state.Authentication.isActive
        };
    };
    const mapDispatchToProps = (dispatch) => {
        return {
            CheckTokenRequest: (token) => {
                return dispatch(CheckTokenRequest(token));
            },
            SignOutRequest: () => {
                return dispatch(SignOutRequest());
            },
            SetActive: (active) => {
                return dispatch(SetActive(active))
            }
        };
    };

    // return withRouter(
    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)
    // );
};

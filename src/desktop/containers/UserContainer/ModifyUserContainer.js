import React from 'react';
import { connect } from 'react-redux';
import ModifyUser from 'desktop/components/User/ModifyUser';
import { updateUserRequest } from "actions/User/User"
import { CheckNickNameRequest } from "actions/Authentication"

class ModifyUserContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <React.Fragment>
                <ModifyUser {...this.props} />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
    isLoggedIn: state.Authentication.status.isLoggedIn,
    user_detail: state.User.status.user_detail,
    checkNickName: state.Authentication.checkStatus.checkNickName,

});
const mapDispatchToProps = (dispatch) => {
    return ({
        updateUserRequest: (user_id, data, token) => dispatch(updateUserRequest(user_id, data, token)),
        CheckNickNameRequest: (token, nickname) => dispatch(CheckNickNameRequest(token, nickname)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyUserContainer);

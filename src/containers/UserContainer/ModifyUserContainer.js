import React from 'react';
import { connect } from 'react-redux';
import ModifyUser from 'components_mobile/User/ModifyUser';
import { updateUserRequest } from "actions/User/User"

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
});
const mapDispatchToProps = (dispatch) => {
    return ({
        updateUserRequest: (user_id, data, token) => dispatch(updateUserRequest(user_id, data, token)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyUserContainer);

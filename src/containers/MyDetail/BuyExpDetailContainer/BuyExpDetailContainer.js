import React from 'react';
import { connect } from 'react-redux';
import { getUserBoughtExpDetailRequest } from 'actions/User/MyDetail';
import { Dimmer, Loader } from 'semantic-ui-react';
import BoughtExpDetail from 'components_mobile/Exp/BoughtExpDetail';

class BuyExpDetailContainer extends React.Component {
    componentDidUpdate(props) {
        if (props.token == null && (this.props.token !== props.token)) {
            this.props.getUserBoughtExpDetailRequest(this.props.token, this.props.payment_id);
        }
    }
    render() {
        console.log('buy exp detail', this.props);
        return (<>
            {this.props.detail
                ? <BoughtExpDetail {...this.props} />
                : <Dimmer>
                    <Loader />
                </Dimmer>}
        </>);
    }
}

const mapStateToProps = (state) => ({
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
    detail: state.ExpBought.status.detail,
});
const mapDispatchToProps = (dispatch) => ({
    getUserBoughtExpDetailRequest: (token, id) =>
        dispatch(getUserBoughtExpDetailRequest(token, id)),
});

export default
    connect(mapStateToProps, mapDispatchToProps)(BuyExpDetailContainer);
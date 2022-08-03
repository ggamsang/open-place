import React from 'react';
import { connect } from 'react-redux';
import { getExpDetailRequest, BuyExpRequest } from "actions/Exp/ExpDetail"
import { GetCurrentMyPointRequest, } from "actions/MyPoint";
import { Dimmer, Loader } from 'semantic-ui-react';
import Buy from 'components_mobile/Exp/Buy';

class BuyContainer extends React.Component {
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.userInfo) !== JSON.stringify(this.props.userInfo)) {
            this.props.userInfo && this.props.getExpDetailRequest(this.props.item_id, this.props.userInfo.uid);
        }
        if (prevProps.token !== this.props.token && this.props.token != null) {
            this.props.GetCurrentMyPointRequest(this.props.token);
        }
    }
    render() {
        return (<>
            {this.props.expDetail
                ? <Buy {...this.props} buy={BuyExpRequest} />
                : <Dimmer>
                    <Loader />
                </Dimmer>}
        </>);
    }
}

const mapStateToProps = (state) => ({
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
    expDetail: state.ExpDetail.status.expDetail,
    current_point: state.MyPoint.status.current_point,
});
const mapDispatchToProps = (dispatch) => ({
    GetCurrentMyPointRequest: (token) => dispatch(GetCurrentMyPointRequest(token)),
    getExpDetailRequest: (item_id, user_id) => dispatch(getExpDetailRequest(item_id, user_id)),
});

export default
    connect(mapStateToProps, mapDispatchToProps)(BuyContainer);
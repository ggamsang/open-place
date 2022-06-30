import React from "react";
import { connect } from "react-redux";
import ReviewList from "components_mobile/Review/ReviewList";

class ReviewContainer extends React.Component {
    componentDidMount() {
        // 구매이력조회 CheckIBoughtThisItemRequest(token, item_id)

        // ...

    }
    render() {
        return (<ReviewList {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.Authentication.status.userInfo,
    token: state.Authentication.status.token,
    // bought: state.ExpDetail.status.bought,
});
const mapDispatchToProps = (dispatch) => ({
    // CheckIBoughtThisItemRequest: (token, item_id) =>
    //      dispatch(CheckIBoughtThisItemRequest(token, item_id)),
});

export default
    connect(mapStateToProps, mapDispatchToProps)
        (ReviewContainer);

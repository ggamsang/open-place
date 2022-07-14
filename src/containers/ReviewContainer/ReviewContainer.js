import React from "react";
import { connect } from "react-redux";
import ReviewList from "components_mobile/Review/ReviewList";
import { GetExpReviewListRequest, DeleteExpReviewRequest, UpdateExpReviewRequest } from "actions/Review";

class ReviewContainer extends React.Component {
    componentDidMount() {
        // 구매이력조회
        // CheckIBoughtThisItemRequest(token, item_id)
        // ...
        (this.props.ExpDetail !== null && this.props.ExpDetail.length !== 0)
            && this.props.GetExpReviewListRequest(this.props.ExpDetail.uid);
    }
    modifyReview = (id, data) => {
        ;
    };
    deleteReview = id => {
        const { token, ExpDetail } = this.props;
        const rconfirm = window.confirm("선택하신 리뷰를 삭제하시겠습니까?");
        if (rconfirm)
            this.props.DeleteExpReviewRequest(id, token)
                .then(data =>
                    data.success &&
                    this.props.GetExpReviewListRequest(ExpDetail.uid))
    }
    render() {
        return (<ReviewList {...this.props} delete={this.deleteReview} />);
    }
}

const mapStateToProps = (state) => ({
    ExpDetail: state.ExpDetail.status.expDetail,
    userInfo: state.Authentication.status.userInfo,
    token: state.Authentication.status.token,
    reviews: state.Review.status.reviews,
});

const mapDispatchToProps = (dispatch) => ({
    // CheckIBoughtThisItemRequest: (token, item_id) =>
    //      dispatch(CheckIBoughtThisItemRequest(token, item_id)),
    // UpdateExpReviewRequest: ()
    GetExpReviewListRequest: (item_id) =>
        dispatch(GetExpReviewListRequest(item_id)),
    DeleteExpReviewRequest: (id, token) =>
        dispatch(DeleteExpReviewRequest(id, token)),
});

export default
    connect(mapStateToProps, mapDispatchToProps)
        (ReviewContainer);

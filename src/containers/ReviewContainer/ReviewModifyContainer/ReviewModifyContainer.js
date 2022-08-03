import React from "react";
import { connect } from "react-redux";
import { UpdateExpReviewRequest, GetExpReviewListRequest } from "actions/Review";
import ReviewModifyModal from "components_mobile/Review/ReviewModifyModal";

class ReviewModifyContainer extends React.Component {
    componentDidMount() {
        // this.props.GetExpReviewRequest(this.props.id);
    }
    submit = (id, data) =>
        this.props.UpdateExpReviewRequest(this.props.token, id, data)
            .then(data => {
                if (data.success) {
                    this.props.GetExpReviewListRequest(this.props.expDetail.uid);
                    this.props.close();
                }
            });

    render() {
        return (<>
            <ReviewModifyModal submit={this.submit} {...this.props} />
        </>);
    }
}
const mapStateToProps = (state) => ({
    // detail: state.Review.status.detail,
    expDetail: state.ExpDetail.status.expDetail,
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
    GetExpReviewListRequest: (id) => dispatch(GetExpReviewListRequest(id)),
    // GetExpReviewRequest: (id) => dispatch(GetExpReviewRequest(id)),
    UpdateExpReviewRequest: (token, id, data) => dispatch(UpdateExpReviewRequest(token, id, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewModifyContainer);
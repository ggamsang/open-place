import React from "react";
import { connect } from "react-redux";
import { CreateExpReviewRequest, GetExpReviewListRequest } from "actions/Review";
import ReviewWriteModal from "mobile/components_mobile/Review/ReviewWriteModal";

class ReviewWriteContainer extends React.Component {

    submit = data =>
        this.props.CreateExpReviewRequest(this.props.token, data)
            .then(data => {
                if (data.success) {
                    this.props.GetExpReviewListRequest(this.props.expDetail.uid);
                    this.props.close();
                }
            });

    render() {
        return (<React.Fragment>
            <ReviewWriteModal submit={this.submit} {...this.props} />
        </React.Fragment>);
    }
}
const mapStateToProps = (state) => ({
    expDetail: state.ExpDetail.status.expDetail,
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
    GetExpReviewListRequest: (id) => dispatch(GetExpReviewListRequest(id)),
    CreateExpReviewRequest: (token, data) => dispatch(CreateExpReviewRequest(token, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewWriteContainer);
import ReviewWrite from "components_mobile/Review/ReviewWrite";
import React from "react";
import { connect } from "react-redux";

class ReviewWriteContainer extends React.Component {
    render() {
        return (<>
            <ReviewWrite {...this.props} />
        </>);
    }
}
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewWriteContainer);
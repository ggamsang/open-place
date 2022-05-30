import React from 'react';
import { connect } from 'react-redux';
import CommentList from "components_mobile/CommentList";

class CommentListContainer extends React.Component {
    render() {
        return (<>
            <CommentList {...this.props} />
        </>)
    }
}

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = () => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);
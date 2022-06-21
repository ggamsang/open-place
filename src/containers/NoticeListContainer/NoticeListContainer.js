import React from 'react';
import { connect } from 'react-redux';
import NoticeList from "components_mobile/NoticeList";
import {
    GetNoticeListRequest,
    GetTotalNoticeCountRequest
} from "actions/Notice";

class NoticeListContainer extends React.Component {
    GetList = (page) => {
        this.props.GetNoticeListRequest(page);
    }
    GetTotalCount = () => {
        this.props.GetTotalNoticeCountRequest();
    }

    render() {
        return (<React.Fragment>
            <NoticeList
                {...this.props}
                GetTotalCount={this.GetTotalCount}
                GetList={this.GetList} />

        </React.Fragment>)
    }
}

const mapStateToProps = (state) => ({
    Notices: state.Community.status.Notices,
    total: state.Community.status.total,
});
const mapDispatchToProps = (dispatch) => ({
    GetNoticeListRequest: (page) => dispatch(GetNoticeListRequest(page)),
    GetTotalNoticeCountRequest: () => dispatch(GetTotalNoticeCountRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NoticeListContainer);
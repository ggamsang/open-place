import React from 'react';
import { connect } from 'react-redux';
import NoticeList from "../../components/NoticeList";
import {
    GetNoticeListRequest,
    GetTotalNoticeCountRequest
} from "../../actions/Notice";

class NoticeListContainer extends React.Component {
    GetList = (page) =>
        this.props.GetNoticeListRequest(page);

    GetTotalCount = () =>
        this.props.GetTotalNoticeCountRequest();


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
    notices: state.Notice.status.notices,
    total: state.Notice.status.total,
});
const mapDispatchToProps = (dispatch) => ({
    GetNoticeListRequest: (page) => dispatch(GetNoticeListRequest(page)),
    GetTotalNoticeCountRequest: () => dispatch(GetTotalNoticeCountRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NoticeListContainer);
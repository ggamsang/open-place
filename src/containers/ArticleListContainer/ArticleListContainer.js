import React from 'react';
import { connect } from 'react-redux';
import ArticleList from "components/ArticleList";
import {
    GetArticleListRequest,
    GetTotalArticleCountRequest
} from "actions/Community";

class ArticleListContainer extends React.Component {
    GetList = (page) => {
        this.props.GetArticleListRequest(page);
    }
    GetTotalCount = () => {
        this.props.GetTotalArticleCountRequest();
    }

    render() {
        return (<React.Fragment>
            <ArticleList
                {...this.props}
                GetTotalCount={this.GetTotalCount}
                GetList={this.GetList} />

        </React.Fragment>)
    }
}

const mapStateToProps = (state) => ({
    articles: state.Community.status.articles,
    total: state.Community.status.total,
});
const mapDispatchToProps = (dispatch) => ({
    GetArticleListRequest: (page) => dispatch(GetArticleListRequest(page)),
    GetTotalArticleCountRequest: () => dispatch(GetTotalArticleCountRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
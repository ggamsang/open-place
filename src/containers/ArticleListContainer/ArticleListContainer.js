import React from 'react';
import { connect } from 'react-redux';
import ArticleList from "components_mobile/ArticleList";

class ArticleListContainer extends React.Component {
    render() {
        return (<>
            <ArticleList />
        </>)
    }
}

const mapStateToProps = () => {
    return {}
}
const mapDispatchToProps = () => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
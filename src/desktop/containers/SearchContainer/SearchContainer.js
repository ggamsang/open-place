import React from 'react';
import SearchList from "desktop/components/Search/SearchList";
import {getExpListRequest} from "actions/Exp/ExpList"
import { connect } from "react-redux";

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: null }
    }
    componentDidMount() {
    }
    render() {
        console.log(this.props.keyword);
        const { list } = this.state;
        return ( <SearchList {...this.props} list={list} sort={this.props.sort} categoty={this.props.category} keyword={this.props.keyword} />)
    }
}
const mapStateToProps = (state) => ({
    list: state.ExpList.status.exp_list,
    list_added: state.ExpList.status.exp_list_added,
})

const mapDispatchToProps = (dispatch) => ({
    getExpListRequest:(page,category,sort,keyword)=>dispatch(getExpListRequest(page,category,sort,keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
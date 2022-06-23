import React from 'react';
import SearchList from "components_mobile/Search/SearchList";
import { GET } from 'constant';
import host from 'config';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: null }
    }
    componentDidMount() {
        if (this.props.keyword) {
            const url = `${host}/search/${this.props.keyword}`
            fetch(url, GET)
                .then(res => res.json())
                .then(data => this.setState({ list: data.detail }))
                .catch(err => console.err(err));
        }
    }
    onOpen = () => {

    }
    onClose = () => {

    }

    render() {
        const { list } = this.state;
        return (<>
            <SearchList list={list} keyword={this.props.keyword} />
        </>)
    }
}

export default SearchContainer;
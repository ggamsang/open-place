import React from 'react';
import SearchList from "components_mobile/Search/SearchList";

class SearchContainer extends React.Component {
    // constructor(props) { super(props); }
    componentDidMount() { }
    onOpen = () => { }
    onClose = () => { }

    render() {
        return (<>
            <SearchList keyword={this.props.keyword} />
        </>)
    }
}

export default SearchContainer;
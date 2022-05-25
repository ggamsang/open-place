import React from 'react';
import SearchList from "components_mobile/Search/SearchList";

class SearchContainer extends React.Component {
    // constructor(props) { super(props); }
    componentDidMount() { }
    onOpen = () => { }
    onClose = () => { }

    render() {
        console.log(this.props.keyword);

        return (<>
            <SearchList />
        </>)
    }
}

export default SearchContainer;
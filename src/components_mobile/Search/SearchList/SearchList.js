import React from 'react';
import styled from 'styled-components';
import { WIDTH } from "constant";

const Wrapper = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
    margin: auto;
    width: ${WIDTH}px;
`;

class SearchList extends React.Component {
    render() {
        const { list } = this.props;

        return (<Wrapper>

        </Wrapper>);
    }
}
export default SearchList;
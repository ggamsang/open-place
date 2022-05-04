import React from 'react';
import styled from 'styled-components';
import Item from "commons/Item";

const Wrapper = styled.div`
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;

class ScrollList extends React.Component {
    render() {
        const { list } = this.props;
        console.log({ list })
        return (<Wrapper>
            {list && list.length > 0 && list.map((item, index) =>
                item.type === "item"
                    ? <Item key={index} {...item} />
                    // :item.type==="something else"? <SomethingElse/>
                    : null)}
        </Wrapper>);
    }
}
export default ScrollList;
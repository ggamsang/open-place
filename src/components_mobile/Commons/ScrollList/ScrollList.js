import React from 'react';
import styled from 'styled-components';
import Item from 'components_mobile/Commons/Item';
import Sharer from 'components_mobile/Commons/Sharer';
import { WIDTH } from "constant";

const Wrapper = styled.div`
    box-sizing:border-box;
    margin-bottom:50px;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
    // margin: auto;
    width: ${WIDTH}px;
    margin:${props=>props.type=="sharer"?"none":"auto"};
`;

class ScrollList extends React.Component {
    render() {
        const { list } = this.props;
        // console.log({ list })

        return (<Wrapper type={this.props.type}>
            {list && list.length > 0 && list.map((item, index) =>
                item.type == "item"
                    ? <Item key={index} {...item} />
                    :
                item.type == "sharer"
                    ? <Sharer key={index} {...item}/>
                    : null)}
        </Wrapper>);
    }
}
export default ScrollList;
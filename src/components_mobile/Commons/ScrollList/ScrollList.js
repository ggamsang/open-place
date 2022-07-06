import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from "react-infinite-scroller";
// import Sharer from 'components_mobile/Commons/Sharer';
import { Loader } from "semantic-ui-react";
import Item from 'components_mobile/Commons/Item';

// import { WIDTH } from "constant";
const ScrollWrap = styled.div`
  width:100%;
  .wrapper_{
    width:100%;
  }
`;
// const Wrapper = styled.div`
//     box-sizing:border-box;
//     margin-bottom:50px;
//     -ms-overflow-style: none; /* Internet Explorer 10+ */
//     scrollbar-width: none; /* Firefox */
//     &::-webkit-scrollbar {
//         display: none;
//     }
//     margin: auto;
//     width: ${WIDTH}px;
//     // margin:${props => props.type == "sharer" ? "none" : "auto"};
// `;
const NoData = styled.div`
  width: 100%;
//   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
class ScrollList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasMore: true, loading: false,
        }
        this.getLoadData = this.getLoadData.bind(this);
    }

    getLoadData = (page) => {
        this.props.getList &&
            this.props.getList(page)
                .then(() => {
                    this.setState({ hasMore: this.props.list == null || this.props.list.length < 10 ? false : true, loading: true, })
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({ hasMore: false, })
                })

    }

    render() {
        const { list_added } = this.props;
        // const { ListComponent } = this.props;
        console.log(this.props.list_added);
        return (
            this.props.list_added &&
                this.props.list_added.length > 0 ?
                <ScrollWrap>
                    <InfiniteScroll className="wrapper_" hasMore={this.state.hasMore}
                        threshold={100} pageStart={0} loadMore={this.getLoadData}
                        loader={<Loader className="loading" active={false}
                                inline="centered" size="huge" key={0} />}>
                        {
                                list_added&&list_added.map((item, index) => {
                                return <Item key={index} {...item} onClick={this.props.onClick} />
                            })
                        }
                    </InfiniteScroll>
                </ScrollWrap>
                : <NoData>검색 결과 없음</NoData>
        );
    }
}
export default ScrollList;

/* <Wrapper type={this.props.type}>
{list && list.length > 0 ? list.map((item, index) =>
    item.type == "item"
        ? <Item key={index} {...item} />
        :
        item.type == "sharer"
            ? <Sharer key={index} {...item} />
            : null)
    : <div>데이터가 없습니다.</div>}
</Wrapper> */
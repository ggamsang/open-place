import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Item from "components/Item/Item";
import { ScrollWrap, NoData } from "./styles";
import { Loader } from "semantic-ui-react";

const LoaderComponent = () => (
  <Loader
    className="loading"
    active={false}
    inline="centered"
    size="huge"
    key={0}
  />
);

const ScrollList = (props) => {
  const [more, setMore] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const getLoadData = (page) => {
    props.getList(page);
    // console.log("get:", page);
    if (props.dataList.length < 10) {
      setMore(false);
    }
  };

  return (
    <ScrollWrap>
      {/* {props.dataList.length}
      <br />
      {props.dataListAdded.length} */}
      <InfiniteScroll
        pageStart={0}
        hasMore={more}
        loadMore={getLoadData}
        loader={<LoaderComponent />}
        className="wrapper_"
      >
        {props.dataListAdded?.map((item, index) => (
          <div key={index}>
            <Item {...item} />
          </div>
        ))}
      </InfiniteScroll>

      {more && <button onClick={() => getLoadData(page + 1)}>click</button>}
    </ScrollWrap>
  );
};
export default ScrollList;

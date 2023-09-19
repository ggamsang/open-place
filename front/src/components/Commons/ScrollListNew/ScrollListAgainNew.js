import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Item from "components/Item/Item";
import { ScrollWrap, NoData } from "./styles";
import { Loader } from "semantic-ui-react";

const ScrollList = (props) => {
  const [more, setMore] = React.useState(true);

  useEffect(() => {
    // props.getList(0);
  }, []);

  const getLoadData = (page) => {
    props.getList(page);
    console.log("get:", page, props);

    if (props.dataList.length < 10) {
      setMore(false);
    }
  };

  return (
    <ScrollWrap>
      <InfiniteScroll
        pageStart={0}
        hasMore={more}
        loadMore={getLoadData}
        loader={
          <Loader
            className="loading"
            active={false}
            inline="centered"
            size="huge"
            key={0}
          />
        }
        className="wrapper_"
      >
        {props.dataListAdded?.map((item, index) => (
          <div key={index}>
            <Item {...item} />
          </div>
        ))}
      </InfiniteScroll>

      {/* { <button onClick={() => getLoadData(page + 1)}>click</button>} */}
    </ScrollWrap>
  );
};
export default ScrollList;

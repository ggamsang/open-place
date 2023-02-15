import React from "react";
import TagList from "../Tag/ListPageTags";
import SortOptions from "../SortOptions";
import * as styled from "./styles";

const ListPageFilter = ({ onSortChange, tags }) => (
  <styled.Wrapper>
    <styled.TagWrapper>
      {tags.length > 0 &&
        tags.map((tag) => {
          <div>{tag}</div>;
        })}
      {/* <TagList _tags={tags} onChange={onSortChange} /> */}
    </styled.TagWrapper>
    <styled.SortWrapper>
      <SortOptions onChange={onSortChange} />
    </styled.SortWrapper>
  </styled.Wrapper>
);

export default ListPageFilter;

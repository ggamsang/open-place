import React from "react";
import TagList from "../Tag/ListPageTags";
import SortOptions from "../SortOptions";
import * as styled from "./styles";

const ListPageFilter = ({ onChange, tags }) => (
  <styled.Wrapper>
    <styled.TagWrapper>
      {tags.length > 0 &&
        tags.map((tag) => {
          <div>{tag}</div>;
        })}
      {/* <TagList _tags={tags} onChange={onChange} /> */}
    </styled.TagWrapper>
    <styled.SortWrapper>
      <SortOptions onChange={onChange} />
    </styled.SortWrapper>
  </styled.Wrapper>
);

export default ListPageFilter;

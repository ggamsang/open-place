import React from "react";
import TagList from "../Tag/ListPageTags";
import SortOptions from "../SortOptions";
import * as styled from "./styles";

const ListPageFilter = ({ onChange }) => (
  <styled.Wrapper>
    <styled.TagWrapper>
      <TagList onChange={onChange} />
    </styled.TagWrapper>
    <styled.SortWrapper>
      <SortOptions onChange={onChange} />
    </styled.SortWrapper>
  </styled.Wrapper>
);

export default ListPageFilter;

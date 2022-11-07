import React, { useState } from "react";
import * as styled from "./styles";

const SORT_UPDATE = "update";
const SORT_LIKE = "like";
const SORT_UPDATE_KOR = "최신순";
const SORT_LIKE_KOR = "인기순";
const SortOptions = ({ onChange }) => {
  const [sort, setSort] = useState(SORT_UPDATE);
  const onClickedButton = (sort) => {
    setSort(sort);
    onChange && onChange({ sort: sort });
  };
  return (
    <styled.Container>
      <styled.SortButton
        selected={sort === SORT_LIKE}
        onClick={() => onClickedButton(SORT_LIKE)}
      >
        {SORT_LIKE_KOR}
      </styled.SortButton>
      <styled.SortButton
        selected={sort === SORT_UPDATE}
        onClick={() => onClickedButton(SORT_UPDATE)}
      >
        {SORT_UPDATE_KOR}
      </styled.SortButton>
    </styled.Container>
  );
};

export default SortOptions;

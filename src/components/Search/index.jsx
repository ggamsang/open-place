import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchList from "../SearchList";
import SortOptions from "../SortOptions";
import {
  Wrapper,
  Categories,
  PlayButton,
  LearnButton,
  MakeButton,
  Sorts,
  SortButton,
} from "./styles";

const Search = ({ category: _category, sort: _sort, setSearchParams }) => {
  const params = useParams();
  const { keyword } = params;
  const [category, setCategory] = useState(_category || "play");
  const [sort, setSort] = useState(_sort || "update");
  const onClickCategory = (category) => {
    setSearchParams && setSearchParams({ category: category, sort: sort });
    setCategory(category);
  };
  const onClickSort = (data) => {
    const { sort } = data;
    setSearchParams && setSearchParams({ category: category, sort: sort });
    setSort(sort);
  };

  return (
    <Wrapper>
      <p style={{ textAlign: "center" }}>
        debug: {keyword}에 대한 검색결과를 가져오는 중입니다.
      </p>
      <p style={{ textAlign: "center" }}>
        debug: 검색옵션: {category}, {sort}
      </p>
      <br />

      <Categories>
        <PlayButton onClick={() => onClickCategory("play")}>
          <div className="text">놀기</div>
        </PlayButton>
        <LearnButton onClick={() => onClickCategory("learn")}>
          <div className="text">배우기</div>
        </LearnButton>
        <MakeButton onClick={() => onClickCategory("make")}>
          <div className="text">만들기</div>
        </MakeButton>
      </Categories>

      <div
        style={{
          width: "max-content",
          marginLeft: "auto",
          marginRight: "45px",
        }}
      >
        <SortOptions onChange={onClickSort} />
      </div>
      {/*  */}
      <SearchList keyword={keyword} category={category} sort={sort} />
      {/*  */}
    </Wrapper>
  );
};

export default Search;

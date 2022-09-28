import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchList from "../SearchList";
import {
  Wrapper,
  Categories,
  PlayButton,
  LearnButton,
  MakeButton,
  Sorts,
  SortButton,
} from "./styles";

const Search = (props) => {
  const params = useParams();
  const { keyword } = params;
  const [category, setCategory] = useState(
    props.category === "play"
      ? "play"
      : props.category === "learn"
      ? "learn"
      : props.category === "make"
      ? "make"
      : ""
  );
  const [sort, setSort] = useState(
    props.sort === "update"
      ? "update"
      : props.sort === "like"
      ? "like"
      : "update"
  );
  const onClickCategory = (category) => {
    props.setSearchParams &&
      props.setSearchParams({ category: category, sort: sort });
    setCategory(category);
  };
  const onClickSort = (sort) => {
    props.setSearchParams &&
      props.setSearchParams({ category: category, sort: sort });
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

      <Sorts>
        <SortButton
          onClick={() => onClickSort("update")}
          selected={sort === "update"}
        >
          <div className="text-sort">최신순</div>
        </SortButton>

        <SortButton
          onClick={() => onClickSort("like")}
          selected={sort === "like"}
        >
          <div className="text-sort">인기순</div>
        </SortButton>
      </Sorts>

      {/*  */}
      <SearchList category={category} sort={sort} />
      {/*  */}
    </Wrapper>
  );
};

export default Search;

import React from "react";
import * as styled from "./styles";
import ProfileCard from "../ProfileCard";
import { useState } from "react";
import { useEffect } from "react";
import { GET } from "../../constants";
import host from "../../config";

const SearchList = ({ keyword = null, category = null, sort = "update" }) => {
  const [list, setList] = useState(null);
  const [page, setPage] = useState(0);
  const GetList = () => {
    const url = `${host}/item/${page}/${category}/${sort}/${keyword}`;
    console.log(url);
    fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        page === 0 ? setList(data) : setList(...list, data);
      })
      .catch((error) => dispatch(getExpListFailure(error)));
  };
  useEffect(() => {
    GetList();
  }, []);
  useEffect(() => {
    GetList();
  }, [category]);

  return (
    <styled.Container>
      <styled.TopListContainer>
        {list?.length > 0 &&
          list.map((item) => <ProfileCard key={item.uid} {...item} />)}
      </styled.TopListContainer>
    </styled.Container>
  );
};

export default SearchList;

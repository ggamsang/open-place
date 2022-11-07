import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import ProfileCard from "../ProfileCard";
import host from "src/config.js";

const ExpList = ({
  type = "play",
  page = 0,
  keyword = null,
  category = type,
  sort = null,
  tags = [],
}) => {
  const [list, setList] = useState([]);
  const getExpListRequest = () => {
    const url = `${host}/item/${page}/${category}/${sort}/${keyword}`;
    return fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    getExpListRequest();
  }, [sort]);
  // useEffect(() => {
  //   getExpListRequest();
  //   console.log(this);
  // }, [sort, tags, keyword, page]);

  return (
    <styled.Container>
      <styled.TopListContainer>
        {list?.length > 0 &&
          list.map((item) => <ProfileCard key={item.uid} {...item} />)}
      </styled.TopListContainer>
    </styled.Container>
  );
};

export default ExpList;

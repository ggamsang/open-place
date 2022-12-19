import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import ProfileCard from "../ProfileCard";
import host from "src/config";

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
    const url = `${host}/item/${page}/${category}/${
      sort || "update"
    }/${keyword}`;
    fetch(url, {
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
  }, []);
  useEffect(() => {
    getExpListRequest();
  }, [sort,  keyword, page]);

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

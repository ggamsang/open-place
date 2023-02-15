import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import ProfileCard from "../ProfileCard";
import host from "config";
const ExpList = ({
  type = "play",
  page = 0,
  keyword = null,
  category = type,
  sort = null,
  tags = [],
}) => {
  const [list, setList] = useState([]);
  const [_page, setPage] = useState(0);

  const getExpListRequest = (_) => {
    const url = `${host}/item/${_}/${category}/${sort || "update"}/${keyword}`;
    console.log(url);
    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (_ === 0) {
          //   console.log("set", data);
          setList(data);
        } else {
          console.log("push", data);
          setList([...list, ...data]);
          setPage(_);
        }
        // // console.log(...list, data);
        // const newlist = [...list, ...data];
        // setList(newlist);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getExpListRequest(0);
    const a = document.getElementById("scroll-div");
    window.addEventListener("load", (e) => {
      a.addEventListener("scroll", function (e) {
        console.log(e, e.target);
      });
    });
  }, []);

  useEffect(() => {
    getExpListRequest(0);
  }, [sort, keyword, page]);

  const getMore = async () => {
    getExpListRequest(_page + 1);
    // await setPage(_page + 1).then(getExpListRequest(_page));
  };

  return (
    <styled.Container>
      <button onClick={getMore}>more</button>
      <styled.TopListContainer id="scroll-div">
        {list?.length > 0 &&
          list.map((item) => <ProfileCard key={item.uid} {...item} />)}
      </styled.TopListContainer>
    </styled.Container>
  );
};

export default ExpList;

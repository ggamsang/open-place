import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import NumRate from "../NumRate";
import ProfileCard from "../ProfileCard";
import host from "src/config";

const TopList = () => {
  const [list, setList] = useState();
  const getTopExpListRequest = () => {
    const url = `${host}/item/TopList`;
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
    getTopExpListRequest();
  }, []);

  return (
    <styled.Container>
      <styled.TopListText>탑리스트</styled.TopListText>

      <styled.TopListContainer>
        {list?.length > 0 &&
          list.map((item) => <ProfileCard key={item.uid} {...item} />)}
          
      </styled.TopListContainer>
    </styled.Container>
  );
};

export default TopList;

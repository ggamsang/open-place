import React, { useEffect, useState } from "react";
import * as styled from "./styles";
import ProfileCard from "../ProfileCard";
import host from "src/config";
import { authGET, TokenName } from "../../constants";
import { GetSession } from "../../mobile/modules";

const RecentExpList = () => {
  const [list, setList] = useState([]);
  const getExpListRequest = () => {
    const url = `${host}/user/visited`;
    GetSession(TokenName).then((token) => {
      fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: authGET(token),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setList(data);
        });
      // .catch((e) => console.error(e));
    });
  };
  useEffect(() => {
    getExpListRequest();
  }, []);

  return (
    <styled.Container>
      <styled.TopListContainer>
        {list.length === 0 && <p>최근방문한 경험아이템이 없습니다.</p>}
        {/* {list?.length > 0 &&
          list.map((item) => <ProfileCard key={item.uid} {...item} />)} */}
      </styled.TopListContainer>
    </styled.Container>
  );
};

export default RecentExpList;

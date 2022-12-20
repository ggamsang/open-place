import React from "react";
import { GET, authGET } from "../../../constants";
import host from "../../../config";
import { useEffect } from "react";
import { useState } from "react";

const GetCurrentMyPointRequest = (token) => {
  const url = `${host}/point`;
  return fetch(url, authGET(token))
    .then((res) => res.json())
    .then((data) => data?.detail)
    .catch((err) => null);
};
const BuyExpRequest = (token, item_id) =>
  new Promise((resolve, reject) => {
    const url = `${host}/user/buy/${item_id}`;
    fetch(url, authGET(token))
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });

const getExpDetailRequest = (item_id, user_id) => {
  const url = `${host}/exp/${item_id}/${user_id}`;
  return fetch(url, GET)
    .then((res) => res.json())
    .then((data) => (data ? data : null))
    .catch((error) => null);
};

export default function Buy({ item_id, userInfo }) {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    userInfo && getExpDetailRequest(item_id, userInfo.uid).then(setDetail);
  }, [userInfo]);
  console.log(detail);
  return <div>{item_id}</div>;
}

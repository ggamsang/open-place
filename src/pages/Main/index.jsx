import React, { useEffect } from "react";
import { Main, MainContainer } from "./styles";
import Banner from "../../components/Banner";
import TopList from "../../components/TopList";
import PageLayout from "../../components/PageLayout";
import host from "../../config";

const getTopExpListRequest = () => {
  // return (dispatch) => {
  const url = `${host}/item/TopList`;
  return fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // dispatch(getTopExpListSuccess(data ? data : []));
    })
    .catch((e) => console.error(e));
  // .catch((error) => dispatch(getTopExpListFailure()));
  // }
};

function MainPage() {
  useEffect(() => {
    getTopExpListRequest();
  }, []);
  return (
    <PageLayout>
      <Main>
        <Banner />
        <MainContainer>
          <TopList />
        </MainContainer>
      </Main>
    </PageLayout>
  );
}

export default MainPage;

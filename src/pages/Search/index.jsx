import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ClientTemplate from "../../components/ClientTemplate";
import Search from "../../components/Search";

const SearchPage = () => {

  const params = useParams();
  const { keyword } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const category = searchParams.get("category");

  return (
    <ClientTemplate>
      <Search
        keyword={keyword}
        category={category}
        sort={sort}
        setSearchParams={setSearchParams}
      />
    </ClientTemplate>
  );
};

export default SearchPage;

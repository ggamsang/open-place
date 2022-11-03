import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import PageLayout from "../../components/desktop/PageLayout";
import Search from "../../components/desktop/Search";

const SearchPage = () => {
  const params = useParams();
  const { keyword } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const category = searchParams.get("category");

  return (
    <PageLayout>
      <Search
        keyword={keyword}
        category={category}
        sort={sort}
        setSearchParams={setSearchParams}
      />
    </PageLayout>
  );
};

export default SearchPage;

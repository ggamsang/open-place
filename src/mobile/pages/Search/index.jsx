import { useParams } from "react-router";
import SearchContainer from "../../containers/SearchContainer";
import MobilePageLayout from "../../MobilePageLayout";
import React from "react";

function SearchPage() {
  let params = useParams();
  console.log(params);
  return (
    <MobilePageLayout i_dont_need_footer={true}>
      <SearchContainer
        sort={params.sort}
        category={params.category}
        keyword={params.keyword}
      />
    </MobilePageLayout>
  );
}

export default SearchPage;

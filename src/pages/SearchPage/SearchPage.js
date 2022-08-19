import { useParams } from 'react-router';
import ClientTemplate from 'clientTemplate';

import SearchContainer from "containers/SearchContainer"

function SearchPage() {
  let params = useParams();
  console.log(params)
  return (<ClientTemplate i_dont_need_footer={true}>
    <SearchContainer sort={params.sort} category={params.category} keyword={params.keyword} />
  </ClientTemplate>)
}

export default SearchPage;
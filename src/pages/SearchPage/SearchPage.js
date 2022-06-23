import { useParams } from 'react-router';
import ClientTemplate from 'clientTemplate';

import SearchContainer from "containers/SearchContainer"

function SearchPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <SearchContainer keyword={params.keyword} />
  </ClientTemplate>)
}

export default SearchPage;

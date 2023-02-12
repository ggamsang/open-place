import { useParams } from 'react-router';
import ClientTemplate from 'mobile/clientTemplate';

import PlayExpListContainer from 'mobile/containers/ListContainer/ExpListContainer/PlayExpListContainer';

function ExpListPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <PlayExpListContainer sort={params.sort} keyword={params.keyword} />

  </ClientTemplate>)
}
export default ExpListPage;
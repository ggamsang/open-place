import { useParams } from 'react-router';
import ClientTemplate from 'mobile/clientTemplate';

import MakeExpListContainer from 'mobile/containers/ListContainer/ExpListContainer/MakeExpListContainer';

function MakeExpListPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <MakeExpListContainer sort={params.sort} keyword={params.keyword} />

  </ClientTemplate>)
}
export default MakeExpListPage;
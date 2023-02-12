import { useParams } from 'react-router';
import ClientTemplate from 'mobile/clientTemplate';

import LearnExpListContainer from 'mobile/containers/ListContainer/ExpListContainer/LearnExpListContainer';

function LearnExpListPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <LearnExpListContainer sort={params.sort} keyword={params.keyword} />

  </ClientTemplate>)
}
export default LearnExpListPage;
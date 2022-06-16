import { useParams } from 'react-router';
import ClientTemplate from 'clientTemplate';

import LearnExpListContainer from 'containers/ListContainer/ExpListContainer/LearnExpListContainer';

function LearnExpListPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <LearnExpListContainer keyword={params.keyword} />

  </ClientTemplate>)
}
export default LearnExpListPage;
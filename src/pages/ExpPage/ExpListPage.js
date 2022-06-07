import { useParams } from 'react-router';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import ExpListContainer from 'containers/ListContainer/ExpListContainer';

function ExpListPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <ExpListContainer keyword={params.keyword} />

  </ClientTemplate>)
}
export default ExpListPage;
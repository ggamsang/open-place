import { useParams } from 'react-router';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import PlayExpListContainer from 'containers/ListContainer/ExpListContainer/PlayExpListContainer';

function ExpListPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <PlayExpListContainer keyword={params.keyword} />

  </ClientTemplate>)
}
export default ExpListPage;